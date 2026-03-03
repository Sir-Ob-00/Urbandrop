import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * ReportBugModal - A reusable modal for reporting technical issues and security vulnerabilities
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback to close modal
 */
const ReportBugModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    
    // Form state
    const [formData, setFormData] = useState({
        // Common fields
        issueType: '',
        pageUrl: '',
        browserInfo: '',
        
        // Normal issue fields
        attemptedAction: '',
        actualResult: '',
        stepsToReproduce: '',
        
        // Security fields
        affectedEndpoint: '',
        description: '',
        impactLevel: '',
        
        // Attachment
        attachment: null
    });

    // Issue type options
    const issueTypes = [
        { value: 'broken', label: 'Broken feature / functionality not working' },
        { value: 'login', label: 'Login or authentication issue' },
        { value: 'payment', label: 'Payment issue' },
        { value: 'ui', label: 'UI display problem' },
        { value: 'performance', label: 'Performance / slow loading' },
        { value: 'data', label: 'Data issue' },
        { value: 'other', label: 'Other technical issue' }
    ];

    // Impact level options
    const impactLevels = [
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
        { value: 'High', label: 'High' },
        { value: 'Critical', label: 'Critical' }
    ];

    // Auto-fill browser info and page URL on mount/open
    useEffect(() => {
        if (isOpen) {
            const browserInfo = typeof navigator !== 'undefined' ? navigator.userAgent : '';
            const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
            
            setFormData(prev => ({
                ...prev,
                browserInfo,
                pageUrl
            }));
        }
    }, [isOpen]);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Handle outside click to close modal
    const handleOutsideClick = useCallback((e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    }, [onClose]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, handleOutsideClick]);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Validate form
    const validate = () => {
        const newErrors = {};
        
        // Issue type is always required
        if (!formData.issueType) {
            newErrors.issueType = 'Please select an issue type';
        }
        
        if (formData.issueType === 'security') {
            // Security-specific validation
            if (!formData.affectedEndpoint) {
                newErrors.affectedEndpoint = 'Affected endpoint is required';
            }
            if (!formData.description) {
                newErrors.description = 'Description is required';
            }
            if (!formData.stepsToReproduce) {
                newErrors.stepsToReproduce = 'Steps to reproduce are required';
            }
            if (!formData.impactLevel) {
                newErrors.impactLevel = 'Impact level is required';
            }
        } else {
            // Normal issue validation
            if (!formData.attemptedAction) {
                newErrors.attemptedAction = 'Please describe what you were trying to do';
            }
            if (!formData.actualResult) {
                newErrors.actualResult = 'Please describe what happened instead';
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validate()) return;
        
        setIsSubmitting(true);
        
        try {
            // Prepare unified backend payload
            const payload = {
                issueType: formData.issueType,
                pageUrl: formData.pageUrl,
                browserInfo: formData.browserInfo,
                stepsToReproduce: formData.stepsToReproduce,
                attachment: formData.attachment?.name || null,
                status: 'open', // Default status
                
                // Conditional fields based on issue type
                ...(formData.issueType === 'security' ? {
                    affectedEndpoint: formData.affectedEndpoint,
                    description: formData.description,
                    impactLevel: formData.impactLevel,
                    attemptedAction: '',
                    actualResult: ''
                } : {
                    attemptedAction: formData.attemptedAction,
                    actualResult: formData.actualResult,
                    affectedEndpoint: '',
                    description: '',
                    impactLevel: ''
                })
            };
            
            // Simulate API call - replace with actual endpoint
            console.log('Submitting bug report:', payload);
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // In production, use:
            // const response = await fetch('/api/report-bug', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(payload)
            // });
            
            setSubmitSuccess(true);
            
            // Reset form after success
            setTimeout(() => {
                setSubmitSuccess(false);
                setFormData({
                    issueType: '',
                    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
                    browserInfo: typeof navigator !== 'undefined' ? navigator.userAgent : '',
                    attemptedAction: '',
                    actualResult: '',
                    stepsToReproduce: '',
                    affectedEndpoint: '',
                    description: '',
                    impactLevel: '',
                    attachment: null
                });
                onClose();
            }, 2000);
            
        } catch (error) {
            console.error('Error submitting bug report:', error);
            setErrors({ submit: 'Failed to submit report. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Check if form is valid for submit button state
    const isFormValid = () => {
        if (!formData.issueType) return false;
        
        if (formData.issueType === 'security') {
            return formData.affectedEndpoint && formData.description && 
                   formData.stepsToReproduce && formData.impactLevel;
        }
        
        return formData.attemptedAction && formData.actualResult;
    };

    // Don't render if modal is closed
    if (!isOpen) return null;

    const isSecurityIssue = formData.issueType === 'security';

    return (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Modal Container */}
            <div 
                ref={modalRef}
                className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl transform transition-all duration-300 max-h-[90vh] overflow-y-auto"
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-2xl z-10">
                    <div className="flex items-center justify-between">
                        <h2 id="modal-title" className="text-xl font-bold text-gray-900">
                            Report a Technical Issue
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                        Help us improve by reporting bugs or security issues.
                    </p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {submitSuccess ? (
                        /* Success State */
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Submitted!</h3>
                            <p className="text-gray-600">Thank you for helping us improve.</p>
                        </div>
                    ) : (
                        /* Form Fields */
                        <>
                            {/* Issue Type Dropdown */}
                            <div>
                                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-2">
                                    Issue Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="issueType"
                                    name="issueType"
                                    value={formData.issueType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl border ${
                                        errors.issueType ? 'border-red-500' : 'border-gray-200'
                                    } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                >
                                    <option value="">Select an issue type...</option>
                                    {issueTypes.map(type => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                    <option value="security">Security Vulnerability</option>
                                </select>
                                {errors.issueType && (
                                    <p className="mt-1 text-sm text-red-500">{errors.issueType}</p>
                                )}
                            </div>
                            
                            {/* Security Vulnerability Fields */}
                            {isSecurityIssue && (
                                <div className="p-4 bg-red-50 rounded-xl border border-red-100 space-y-4">
                                    {/* Affected Endpoint */}
                                    <div>
                                        <label htmlFor="affectedEndpoint" className="block text-sm font-medium text-gray-700 mb-2">
                                            Affected Endpoint <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="affectedEndpoint"
                                            name="affectedEndpoint"
                                            value={formData.affectedEndpoint}
                                            onChange={handleChange}
                                            placeholder="e.g., /api/users, https://example.com/login"
                                            className={`w-full px-4 py-3 rounded-xl border ${
                                                errors.affectedEndpoint ? 'border-red-500' : 'border-gray-200'
                                            } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        />
                                        {errors.affectedEndpoint && (
                                            <p className="mt-1 text-sm text-red-500">{errors.affectedEndpoint}</p>
                                        )}
                                    </div>
                                    
                                    {/* Vulnerability Description */}
                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                            Vulnerability Description <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Describe the security vulnerability in detail..."
                                            className={`w-full px-4 py-3 rounded-xl border resize-none ${
                                                errors.description ? 'border-red-500' : 'border-gray-200'
                                            } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        />
                                        {errors.description && (
                                            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                                        )}
                                    </div>
                                    
                                    {/* Steps to Reproduce */}
                                    <div>
                                        <label htmlFor="stepsToReproduce" className="block text-sm font-medium text-gray-700 mb-2">
                                            Steps to Reproduce <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="stepsToReproduce"
                                            name="stepsToReproduce"
                                            value={formData.stepsToReproduce}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="1. Navigate to...&#10;2. Enter the following input...&#10;3. Observe..."
                                            className={`w-full px-4 py-3 rounded-xl border resize-none ${
                                                errors.stepsToReproduce ? 'border-red-500' : 'border-gray-200'
                                            } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        />
                                        {errors.stepsToReproduce && (
                                            <p className="mt-1 text-sm text-red-500">{errors.stepsToReproduce}</p>
                                        )}
                                    </div>
                                    
                                    {/* Impact Level */}
                                    <div>
                                        <label htmlFor="impactLevel" className="block text-sm font-medium text-gray-700 mb-2">
                                            Impact Level <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="impactLevel"
                                            name="impactLevel"
                                            value={formData.impactLevel}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${
                                                errors.impactLevel ? 'border-red-500' : 'border-gray-200'
                                            } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        >
                                            <option value="">Select impact level...</option>
                                            {impactLevels.map(level => (
                                                <option key={level.value} value={level.value}>
                                                    {level.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.impactLevel && (
                                            <p className="mt-1 text-sm text-red-500">{errors.impactLevel}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                            
                            {/* Normal Technical Issue Fields */}
                            {formData.issueType && !isSecurityIssue && (
                                <div className="space-y-4">
                                    {/* What were you trying to do? */}
                                    <div>
                                        <label htmlFor="attemptedAction" className="block text-sm font-medium text-gray-700 mb-2">
                                            What were you trying to do? <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="attemptedAction"
                                            name="attemptedAction"
                                            value={formData.attemptedAction}
                                            onChange={handleChange}
                                            rows={2}
                                            placeholder="I was trying to..."
                                            className={`w-full px-4 py-3 rounded-xl border resize-none ${
                                                errors.attemptedAction ? 'border-red-500' : 'border-gray-200'
                                            } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        />
                                        {errors.attemptedAction && (
                                            <p className="mt-1 text-sm text-red-500">{errors.attemptedAction}</p>
                                        )}
                                    </div>
                                    
                                    {/* What happened instead? */}
                                    <div>
                                        <label htmlFor="actualResult" className="block text-sm font-medium text-gray-700 mb-2">
                                            What happened instead? <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="actualResult"
                                            name="actualResult"
                                            value={formData.actualResult}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="But instead, I saw / got / experienced..."
                                            className={`w-full px-4 py-3 rounded-xl border resize-none ${
                                                errors.actualResult ? 'border-red-500' : 'border-gray-200'
                                            } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        />
                                        {errors.actualResult && (
                                            <p className="mt-1 text-sm text-red-500">{errors.actualResult}</p>
                                        )}
                                    </div>
                                    
                                    {/* Steps to Reproduce (Optional) */}
                                    <div>
                                        <label htmlFor="stepsToReproduce" className="block text-sm font-medium text-gray-700 mb-2">
                                            Steps to Reproduce <span className="text-gray-400 text-xs">(optional)</span>
                                        </label>
                                        <textarea
                                            id="stepsToReproduce"
                                            name="stepsToReproduce"
                                            value={formData.stepsToReproduce}
                                            onChange={handleChange}
                                            rows={2}
                                            placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe..."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        />
                                    </div>
                                </div>
                            )}
                            
                            {/* Auto-captured Fields (Hidden/Read-only) */}
                            {formData.issueType && (
                                <div className="space-y-3 pt-2">
                                    {/* Page URL */}
                                    <div>
                                        <label htmlFor="pageUrl" className="block text-sm font-medium text-gray-500 mb-1">
                                            Page URL
                                        </label>
                                        <input
                                            type="text"
                                            id="pageUrl"
                                            name="pageUrl"
                                            value={formData.pageUrl}
                                            readOnly
                                            className="w-full px-4 py-2 rounded-lg border border-gray-100 bg-gray-50 text-gray-600 text-sm"
                                        />
                                    </div>
                                    
                                    {/* Browser Info */}
                                    <div>
                                        <label htmlFor="browserInfo" className="block text-sm font-medium text-gray-500 mb-1">
                                            Browser & Device
                                        </label>
                                        <input
                                            type="text"
                                            id="browserInfo"
                                            name="browserInfo"
                                            value={formData.browserInfo}
                                            readOnly
                                            className="w-full px-4 py-2 rounded-lg border border-gray-100 bg-gray-50 text-gray-600 text-sm"
                                        />
                                    </div>
                                </div>
                            )}
                            
                            {/* Attachment Upload */}
                            {formData.issueType && (
                                <div>
                                    <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-2">
                                        Attachment <span className="text-gray-400 text-xs">(optional, max 10MB)</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="attachment"
                                        name="attachment"
                                        onChange={handleChange}
                                        accept="image/*,.txt,.pdf,.log"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary/90"
                                    />
                                    <p className="mt-1 text-xs text-gray-500">
                                        Supported: images, text, PDF, logs
                                    </p>
                                </div>
                            )}
                            
                            {/* Submit Error */}
                            {errors.submit && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <p className="text-sm text-red-600">{errors.submit}</p>
                                </div>
                            )}
                            
                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !isFormValid()}
                                    className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${
                                        isSubmitting || !isFormValid()
                                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        'Submit Report'
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ReportBugModal;
