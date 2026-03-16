import { useState, useRef, useEffect } from "react";
import countriesData from "../data/countries.json";

const BetaSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    location: "",
    device: "",
  });

  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

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
        newPhone = country.dialCode ? `${country.dialCode} ` : "";
      } else if (country.dialCode) {
        if (newPhone.startsWith('+')) {
          newPhone = newPhone.replace(/^\+\d+\s*/, `${country.dialCode} `);
        } else {
          newPhone = `${country.dialCode} ${newPhone}`;
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
    const requiredFields = ['fullName', 'email', 'country', 'location', 'device'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // In Vite, env variables are available under import.meta.env
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      const payload = {
        ...formData,
        company: "", // empty by default
        timestamp: new Date().toISOString(),
      };

      if (!scriptUrl) {
        setError("Script URL is not configured.");
        console.error("Error: The URL for the app script is missing.");
        setIsSubmitting(false);
        return;
      }

      // Convert payload to URLSearchParams to send as x-www-form-urlencoded
      const formParams = new URLSearchParams();
      for (const key in payload) {
        formParams.append(key, payload[key]);
      }

      // POST to Google Apps Script. 
      // Sending x-www-form-urlencoded bypasses the CORS preflight OPTIONS request.
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formParams,
      });

      if (!response.ok) {
        console.error("Error: The URL for the app script is not hitting. Status:", response.status, response.statusText);
        throw new Error("Failed to reach the Google Apps Script endpoint.");
      }
      
      const responseData = await response.json().catch(() => ({}));
      if (responseData.result === "error") {
          throw new Error(responseData.error || "Submission failed inside Google Apps Script");
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        location: "",
        device: "",
        company: "",
      });
      setCountrySearch("");
    } catch (err) {
      console.error("Submission error:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you for joining the UrbanDrop Beta.</h3>
        <p className="text-gray-600">
          Our team will contact you when testing begins.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-blue-600 font-medium hover:underline focus:outline-none"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5">
        {/* Honeypot field for anti-spam */}
        <input type="text" name="company" style={{ display: "none" }} />

        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Country - Searchable Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Country *</label>
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
            onFocus={() => setShowCountryDropdown(true)}
            placeholder="Type at least 3 letters to search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            autoComplete="off"
          />

          {/* Dropdown Menu */}
          {showCountryDropdown && countrySearch.length >= 3 && (
            <ul className="absolute z-10 w-full bg-white mt-1 border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <li
                    key={country.name}
                    onClick={() => handleCountrySelect(country)}
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                  >
                    {country.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-500">No countries found.</li>
              )}
            </ul>
          )}
          {showCountryDropdown && countrySearch.length > 0 && countrySearch.length < 3 && (
            <ul className="absolute z-10 w-full bg-white mt-1 border border-gray-200 rounded-lg shadow-lg">
              <li className="px-4 py-2 text-sm text-gray-500">Keep typing to search...</li>
            </ul>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number (Optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* ZIP Code / City / State */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ZIP Code / City / State *</label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="10001, New York, NY"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Device Information */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Device Information *</label>
          <div className="relative">
            <select
              name="device"
              required
              value={formData.device}
              onChange={handleChange}
              className="w-full appearance-none px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            >
              <option value="" disabled>Select a device</option>
              <option value="Android">Android</option>
              <option value="iPhone">iPhone</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 mt-4 text-white font-semibold rounded-lg shadow transition-all ${isSubmitting ? "bg-primaryLight cursor-not-allowed" : "bg-primary hover:bg-darkGreen active:scale-[0.98]"
            }`}
        >
          {isSubmitting ? "Submitting..." : "Join the Beta"}
        </button>
      </form>

      {/* Error Modal Overlay */}
      {error && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden transform transition-all scale-100 opacity-100">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                !
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Submission Failed</h3>
              <p className="text-gray-600 text-sm mb-6">{error}</p>
              <button
                onClick={() => setError(null)}
                type="button"
                className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
