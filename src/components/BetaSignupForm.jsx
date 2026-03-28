import { useState, useRef, useEffect } from "react";
import countriesData from "../data/countries.json";
import logo from "../assets/images/logo-1.png";
import CyberButton from "../components/common/CyberButton";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

const BetaSignupForm = ({ source = "direct", successMessageTitle = "Welcome to UrbanDrop Beta!" }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    city_state: "",
    device: "",
  });

  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  // Filter countries based on search term
  const filteredCountries = countrySearch.length >= 3
    ? countriesData.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()))
    : [];

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (country) => {
    setFormData((prev) => {
      let newPhone = prev.phone;
      if (!newPhone) {
        newPhone = country.dialCode ? country.dialCode + " " : "";
      } else if (country.dialCode) {
        if (newPhone.startsWith('+')) {
          newPhone = newPhone.replace(/^\+\d+\s*/, country.dialCode + " ");
        } else {
          newPhone = country.dialCode + " " + newPhone;
        }
      }
      return {
        ...prev,
        country: country.name,
        phone: newPhone
      };
    });
    setCountrySearch(country.name);
    setShowCountryDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic validation check
    const requiredFields = ["full_name", "email", "country", "city_state", "device"];
    const missingFields = requiredFields.filter(
      (field) => !String(formData[field] ?? "").trim()
    );

    // Check if country is selected (either from dropdown or manual entry matching)
    if (!formData.country && !countrySearch.trim()) {
      setError("Please select a country from the dropdown or type to search.");
      setIsSubmitting(false);
      return;
    }
    
    // If user typed a country but didn't select from dropdown, try to match it
    if (!formData.country && countrySearch.trim()) {
      const matchedCountry = countriesData.find(
        c => c.name.toLowerCase() === countrySearch.trim().toLowerCase()
      );
      if (matchedCountry) {
        setFormData(prev => ({ ...prev, country: matchedCountry.name }));
      } else {
        setError('"' + countrySearch + '" is not a valid country. Please select from the dropdown.');
        setIsSubmitting(false);
        return;
      }
    }

    // Phone number validation - minimum 7 digits total for valid international numbers
    if (formData.phone && formData.phone.trim()) {
      // Extract digits only from the phone number
      const digitsOnly = formData.phone.replace(/\D/g, '');
      
      // Check if we have enough digits (at least 7 total for valid phone)
      if (digitsOnly.length < 7) {
        setError("Please enter a valid phone number with at least 7 digits.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      // In Vite, env variables are available under import.meta.env
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

      const payload = {
        ...formData,
        company: "", // empty by default
        source: source,
        timestamp: new Date().toISOString(),
      };

      if (!apiBaseUrl) {
        setError("API base URL is not configured.");
        console.error("Error: VITE_API_BASE_URL is missing.");
        setIsSubmitting(false);
        return;
      }

      const baseUrl = apiBaseUrl.replace(/\/+$/, "");
      const endpoint = baseUrl + "/beta-testers";

      // POST to backend API as JSON
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errorMessage = "Failed to submit to the backend.";
        let isServerError = false;
        let isDuplicateEmail = false;
        
        try {
          const errorPayload = await response.json();
          const backendMessage = errorPayload?.error || errorPayload?.message || errorMessage;
          
          // Check if this is a duplicate email error
          const normalized = String(backendMessage).toLowerCase();
          isDuplicateEmail =
            normalized.includes("email already exist") ||
            normalized.includes("email already exists") ||
            normalized.includes("duplicate") ||
            normalized.includes("already registered") ||
            normalized.includes("email taken") ||
            normalized.includes("unique constraint") ||
            normalized.includes("duplicate entry") ||
            normalized.includes("duplicate key") ||
            normalized.includes("already been registered");
          
          if (isDuplicateEmail) {
            errorMessage = "This email address is already registered for the beta program. If you believe this is an error, please contact our support team.";
          } else if (response.status >= 500) {
            // For 500 errors, check if it's a database error first
            const isDatabaseError = normalized.includes("failing row") || normalized.includes("constraint");
            if (isDatabaseError) {
              isServerError = true;
              errorMessage = "A server error occurred while saving your information. Please try again later or contact support.";
            } else if (backendMessage && backendMessage !== "Failed to submit to the backend.") {
              errorMessage = backendMessage;
            } else {
              isServerError = true;
              errorMessage = "Server is temporarily unavailable. Please try again in a few minutes.";
            }
          } else if (response.status === 429) {
            errorMessage = "Too many requests. Please wait a moment and try again.";
          } else if (response.status === 0 || response.statusText === "Network Error") {
            isServerError = true;
            errorMessage = "Network connection failed. Please check your internet connection and try again.";
          } else {
            errorMessage = backendMessage;
          }
        } catch {
          // If JSON parsing fails, check status code
          if (response.status >= 500) {
            isServerError = true;
            errorMessage = "Server is temporarily unavailable. Please try again in a few minutes.";
          } else if (response.status === 0 || response.statusText === "Network Error") {
            isServerError = true;
            errorMessage = "Network connection failed. Please check your internet connection and try again.";
          } else {
            errorMessage = "Request failed with status " + response.status + ". Please try again.";
          }
        }
        
        console.error("Error: backend request failed. Status:", response.status, response.statusText);
        console.log("In !response.ok block - Is duplicate email:", isDuplicateEmail);
        throw new Error(errorMessage);
      }
      
      const responseData = await response.json().catch(() => ({}));
      console.log("Backend response data:", responseData);
      console.log("Response status:", response.status);
      
      // Check for both error formats: result === "error" OR status === "FAILED"
      if (responseData?.result === "error" || responseData?.status === "FAILED") {
        const backendMessage =
          responseData.error ||
          responseData.message ||
          "Submission failed inside the backend.";
        const normalized = String(backendMessage).toLowerCase();
        
        console.log("Backend error message:", backendMessage);
        console.log("Normalized message:", normalized);
        
        // Enhanced duplicate email detection
        const isDuplicateEmail =
          normalized.includes("email already exist") ||
          normalized.includes("email already exists") ||
          normalized.includes("duplicate") ||
          normalized.includes("already registered") ||
          normalized.includes("email taken") ||
          normalized.includes("unique constraint") ||
          normalized.includes("duplicate entry") ||
          normalized.includes("duplicate key") ||
          normalized.includes("already been registered");

        console.log("Is duplicate email detected:", isDuplicateEmail);

        if (isDuplicateEmail) {
          setError("This email address is already registered for the beta program. If you believe this is an error, please contact our support team.");
        } else {
          setError(backendMessage);
        }
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        country: "",
        city_state: "",
        device: "",
        company: "",
      });
      setCountrySearch("");
    } catch (err) {
      console.error("Submission error:", err);
      console.error("Error message:", err?.message);
      console.error("Error stack:", err?.stack);
      
      const rawMessage = err?.message || "";
      const normalized = rawMessage.toLowerCase();
      
      // Enhanced duplicate email detection in catch block
      const isDuplicateEmail =
        normalized.includes("email already exist") ||
        normalized.includes("email already exists") ||
        normalized.includes("duplicate") ||
        normalized.includes("already registered") ||
        normalized.includes("email taken") ||
        normalized.includes("unique constraint") ||
        normalized.includes("duplicate entry") ||
        normalized.includes("duplicate key") ||
        normalized.includes("already been registered");

      // Enhanced server/network error detection
      const isServerError =
        normalized.includes("server") ||
        normalized.includes("network") ||
        normalized.includes("connection") ||
        normalized.includes("unavailable") ||
        normalized.includes("timeout") ||
        normalized.includes("fetch") ||
        normalized.includes("failing row") ||
        rawMessage.includes("Failed to fetch") ||
        rawMessage.includes("NetworkError");

      console.log("Catch block - Is duplicate email:", isDuplicateEmail);
      console.log("Catch block - Is server error:", isServerError);
      console.log("Catch block - Raw message:", rawMessage);

      if (isDuplicateEmail) {
        setError("This email address is already registered for the beta program.");
      } else if (isServerError) {
        // excluding raw database errors to users
        if (normalized.includes("failing row")) {
          setError("A server error occurred while saving your information. Please try again later or contact support if the problem persists.");
        } else {
          setError(rawMessage || "Unable to connect to our servers. Please check your internet connection and try again in a few minutes.");
        }
      } else {
        setError("An unexpected error occurred. Please try again later. If the problem persists, please contact our support team.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-2xl text-center border border-green-100 max-w-sm w-full animate-in fade-in zoom-in duration-500">
          {/* Animated checkmark */}
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-5xl font-bold shadow-lg transform animate-bounce">
            ✓
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
            {successMessageTitle}
          </h3>
          <p className="text-gray-600 text-base mb-6">
            Thanks for subscribing to participate in the Beta Testing program.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Our team will contact you when testing begins. Download link will be sent to your email.
          </p>
          <div className="flex items-center justify-center gap-5 mt-2">
            <a href="https://www.instagram.com/urbandrop.io?igsh=MTBsbXVsdjR6dzNocw%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-md text-[#5CB35E]">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com/@urbandropgroup?si=gDd_BU7TLc3NJOzO" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-md text-[#5CB35E]">
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/company/108883908/admin/dashboard/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-md text-[#5CB35E]">
              <Linkedin size={20} />
            </a>
            <a href="https://www.facebook.com/urbandropgroupltd" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-md text-[#5CB35E]">
              <Facebook size={20} />
            </a>
            <a href="https://www.tiktok.com/@urbanrecipe?_r=1&_t=ZN-952wO10Niwp" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-md text-[#5CB35E]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Form Container */}
      <div className="w-full max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center rounded-2xl">
            <img src={logo} alt="UrbanDrop Logo" className="w-48 h-48 object-contain" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-darkGreen bg-clip-text text-transparent mb-2">
            Join Our Beta testing program
          </h2>
          <p className="text-gray-600 text-base max-w-md mx-auto">
            Influence the future of Urbandrop. Your feedback will directly shape our service to you.
            <br />
            <br />
            Tell us what works, what doesn't, and help us ensure our cultural accuracy is unmatched
          </p>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#fff5ea] to-[#fef3e0] rounded-3xl shadow-2xl border border-orange-100 p-8 md:p-12 space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
          {/* Honeypot field for anti-spam */}
          <input type="text" name="company" style={{ display: "none" }} />

          {/* Form Row 1 - Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("full_name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Jane Doe"
                  className={"w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 placeholder-gray-400 " + (focusedField === "full_name" ? "border-primary bg-orange-50 shadow-lg shadow-orange-200" : "border-gray-200 bg-gray-50 hover:border-gray-300")}
                />
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="jane@example.com"
                  className={"w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 placeholder-gray-400 " + (focusedField === "email" ? "border-primary bg-orange-50 shadow-lg shadow-orange-200" : "border-gray-200 bg-gray-50 hover:border-gray-300")}
                />
              </div>
            </div>
          </div>

          {/* Form Row 2 - Country and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country - Searchable Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={countrySearch}
                onChange={(e) => {
                  setCountrySearch(e.target.value);
                  setShowCountryDropdown(true);
                  if (e.target.value !== formData.country) {
                    setFormData((prev) => ({ ...prev, country: "" }));
                  }
                }}
                onFocus={() => {
                  setShowCountryDropdown(true);
                  setFocusedField("country");
                }}
                onBlur={() => setFocusedField(null)}
                placeholder="Type at least 3 letters..."
                className={"w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 placeholder-gray-400 " + (focusedField === "country" ? "border-primary bg-orange-50 shadow-lg shadow-orange-200" : "border-gray-200 bg-gray-50 hover:border-gray-300")}
                autoComplete="off"
              />

              {/* Dropdown Menu */}
              {showCountryDropdown && countrySearch.length >= 3 && (
                <ul className="absolute z-10 w-full bg-white mt-2 border-2 border-gray-200 rounded-xl shadow-2xl max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-300">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <li
                        key={country.name}
                        onClick={() => handleCountrySelect(country)}
                        className="px-4 py-3 hover:bg-orange-50 cursor-pointer text-sm text-gray-700 hover:text-primary transition-all border-b border-gray-100 last:border-b-0 font-medium"
                      >
                        <span className="mr-2">🌐</span>
                        {country.name}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-3 text-sm text-gray-500">No countries found.</li>
                  )}
                </ul>
              )}
              {showCountryDropdown && countrySearch.length > 0 && countrySearch.length < 3 && (
                <ul className="absolute z-10 w-full bg-white mt-2 border-2 border-gray-200 rounded-xl shadow-lg">
                  <li className="px-4 py-3 text-sm text-gray-600 font-medium flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Keep typing to search...
                  </li>
                </ul>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                City / State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city_state"
                required
                value={formData.city_state}
                onChange={handleChange}
                onFocus={() => setFocusedField("city_state")}
                onBlur={() => setFocusedField(null)}
                placeholder="London/ Ohio..."
                className={"w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 placeholder-gray-400 " + (focusedField === "city_state" ? "border-primary bg-orange-50 shadow-lg shadow-orange-200" : "border-gray-200 bg-gray-50 hover:border-gray-300")}
              />
            </div>
          </div>

          {/* Form Row 3 - Phone */}
          <div className="group">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Phone Number <span className="text-gray-500 text-xs font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder="+44 234 567 890"
                maxLength={20}
                className={"w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 placeholder-gray-400 " + (focusedField === "phone" ? "border-primary bg-orange-50 shadow-lg shadow-orange-200" : "border-gray-200 bg-gray-50 hover:border-gray-300")}
              />
            </div>
          </div>

          {/* Form Row 4 - Device */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Device OS <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="device"
                required
                value={formData.device}
                onChange={handleChange}
                onFocus={() => setFocusedField("device")}
                onBlur={() => setFocusedField(null)}
                className={"w-full appearance-none px-4 py-3 border-2 rounded-xl outline-none transition-all duration-300 font-medium " + (focusedField === "device" ? "border-primary bg-orange-50 shadow-lg shadow-orange-200" : "border-gray-200 bg-gray-50 hover:border-gray-300")}
              >
                <option value="" disabled className="text-gray-400">
                  Select an OS
                </option>
                <option value="Android" className="text-gray-700">
                  Android
                </option>
                <option value="iOS" className="text-gray-700">
                  Apple(iPhone)
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <CyberButton type="submit" disabled={isSubmitting} className="w-[85%] max-w-[280px] md:max-w-none md:w-full flex justify-center items-center">
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Join the Beta Now"
              )}
            </CyberButton>
          </div>

          {/* Additional Info */}
          <p className="text-center text-sm text-gray-500 pt-2">
            We respect your privacy. Your data is secure with us.
          </p>
        </form>
      </div>

      {/* Error Modal Overlay */}
      {error && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all scale-100 opacity-100 animate-in zoom-in duration-300">
            <div className="p-8 text-center">
              {/* Error Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold shadow-lg">
                ⚠️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Oops! Something went wrong</h3>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">{error}</p>
              
              <button
                onClick={() => setError(null)}
                type="button"
                className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Try Again
              </button>

              <button
                onClick={() => setError(null)}
                type="button"
                className="w-full mt-3 py-2 px-4 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BetaSignupForm;
