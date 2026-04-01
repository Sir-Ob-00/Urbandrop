import React, { useState, useEffect, useRef, useCallback } from 'react';

const FloatingField = ({ id, label, required, error, children }) => {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);
    const hasValue = () => {
        if (inputRef.current) {
            if (inputRef.current.tagName === 'SELECT') {
                return inputRef.current.value !== '';
            }
            return inputRef.current.value !== '';
        }
        return false;
    };
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = inputRef.current;
        if (!el) return;
        const check = () => setActive(focused || el.value !== '');
        check();
        el.addEventListener('input', check);
        el.addEventListener('change', check);
        return () => {
            el.removeEventListener('input', check);
            el.removeEventListener('change', check);
        };
    }, [focused]);

    const clonedChildren = React.cloneElement(children, {
        ref: inputRef,
        onFocus: (e) => { setFocused(true); children.props.onFocus?.(e); },
        onBlur: (e) => { setFocused(false); children.props.onBlur?.(e); },
    });

    return (
        <div className="relative">
            <div className={`relative border rounded-xl transition-all duration-200 ${
                error ? 'border-red-400' : focused ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'
            } ${children.props.readOnly ? 'bg-gray-50' : 'bg-white'}`}>
                <label
                    htmlFor={id}
                    className={`absolute left-3 transition-all duration-200 pointer-events-none bg-white px-1 ${
                        active
                            ? '-top-2.5 text-xs ' + (error ? 'text-red-500' : focused ? 'text-primary' : 'text-gray-500')
                            : 'top-3.5 text-sm text-gray-400'
                    }`}
                >
                    {label}{required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
                {clonedChildren}
            </div>
            {error && <p className="mt-1 text-xs text-red-500 pl-1">{error}</p>}
        </div>
    );
};

const ReportBugModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        issueType: '',
        pageUrl: '',
        browserInfo: '',
        attemptedAction: '',
        actualResult: '',
        stepsToReproduce: '',
        affectedEndpoint: '',
        description: '',
        impactLevel: '',
        attachment: null
    });

    const issueTypes = [
        { value: 'broken', label: 'Broken feature / functionality not working' },
        { value: 'login', label: 'Login or authentication issue' },
        { value: 'payment', label: 'Payment issue' },
        { value: 'ui', label: 'User Interface' },
        { value: 'performance', label: 'Performance / slow loading' },
        { value: 'data', label: 'Data issue' },
        { value: 'other', label: 'Other technical issue' }
    ];

    const impactLevels = [
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
        { value: 'High', label: 'High' },
        { value: 'Critical', label: 'Critical' }
    ];

    const getBrowserInfo = () => {
        if (typeof navigator === 'undefined') return '';
        const ua = navigator.userAgent || '';
        const platform = navigator.platform || '';
        let browser = 'Unknown Browser';
        if (/Edg\//.test(ua)) browser = 'Microsoft Edge';
        else if (/OPR\//.test(ua) || /Opera/.test(ua)) browser = 'Opera';
        else if (/Chrome\//.test(ua)) browser = 'Chrome';
        else if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) browser = 'Safari';
        else if (/Firefox\//.test(ua)) browser = 'Firefox';
        const device = /Mobi|Android/i.test(ua) ? 'Mobile' : 'Desktop';
        const os = /Win/i.test(platform) ? 'Windows'
            : /Mac/i.test(platform) ? 'macOS'
            : /Linux/i.test(platform) ? 'Linux'
            : /iPhone|iPad|iPod/i.test(ua) ? 'iOS'
            : /Android/i.test(ua) ? 'Android'
            : 'Unknown OS';
        return `${browser} on ${os} (${device})`;
    };

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({ ...prev, browserInfo: getBrowserInfo() }));
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    const handleOutsideClick = useCallback((e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    }, [onClose]);

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

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.issueType) newErrors.issueType = 'Please select an issue type';
        if (formData.issueType === 'security') {
            if (!formData.affectedEndpoint) newErrors.affectedEndpoint = 'Affected endpoint is required';
            if (!formData.description) newErrors.description = 'Description is required';
            if (!formData.stepsToReproduce) newErrors.stepsToReproduce = 'Steps to reproduce are required';
            if (!formData.impactLevel) newErrors.impactLevel = 'Impact level is required';
        } else {
            if (!formData.attemptedAction) newErrors.attemptedAction = 'Please describe what you were trying to do';
            if (!formData.actualResult) newErrors.actualResult = 'Please describe what happened instead';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            const issueLabel = formData.issueType === 'security' ? 'Security Vulnerability' :
                issueTypes.find(t => t.value === formData.issueType)?.label || formData.issueType;
            let emailBody = `Bug Report - Urbandrop\n\n`;
            emailBody += `Issue Type: ${issueLabel}\n`;
            emailBody += `Page URL: ${formData.pageUrl}\n`;
            emailBody += `Browser Info: ${formData.browserInfo}\n\n`;
            if (formData.issueType === 'security') {
                emailBody += `--- Security Vulnerability Details ---\n`;
                emailBody += `Affected Endpoint: ${formData.affectedEndpoint}\n`;
                emailBody += `Impact Level: ${formData.impactLevel}\n`;
                emailBody += `Description: ${formData.description}\n`;
                emailBody += `Steps to Reproduce: ${formData.stepsToReproduce}\n`;
            } else {
                emailBody += `--- Issue Details ---\n`;
                emailBody += `What were you trying to do?: ${formData.attemptedAction}\n`;
                emailBody += `What happened instead?: ${formData.actualResult}\n`;
                if (formData.stepsToReproduce) emailBody += `Steps to Reproduce: ${formData.stepsToReproduce}\n`;
            }
            const mailtoUrl = `mailto:bugs@urbandrop.io?subject=${encodeURIComponent(`Bug Report: ${issueLabel}`)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoUrl;
            setSubmitSuccess(true);
            setTimeout(() => {
                setSubmitSuccess(false);
                setFormData({
                    issueType: '', pageUrl: '', browserInfo: getBrowserInfo(),
                    attemptedAction: '', actualResult: '', stepsToReproduce: '',
                    affectedEndpoint: '', description: '', impactLevel: '', attachment: null
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

    const isFormValid = () => {
        if (!formData.issueType) return false;
        if (formData.issueType === 'security') {
            return formData.affectedEndpoint && formData.description && formData.stepsToReproduce && formData.impactLevel;
        }
        return formData.attemptedAction && formData.actualResult;
    };

    if (!isOpen) return null;

    const isSecurityIssue = formData.issueType === 'security';
    const inputClass = "w-full px-4 pt-5 pb-2 rounded-xl bg-transparent outline-none text-sm text-gray-800";
    const selectClass = "w-full px-4 pt-5 pb-2 rounded-xl bg-transparent outline-none text-sm text-gray-800 appearance-none cursor-pointer";
    const textareaClass = "w-full px-4 pt-5 pb-2 rounded-xl bg-transparent outline-none text-sm text-gray-800 resize-none";

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div ref={modalRef} className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl transform transition-all duration-300 max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-5 rounded-t-2xl flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <div>
                                <h2 id="modal-title" className="text-white text-lg font-semibold whitespace-nowrap">Report a Technical Issue</h2>
                                <p className="text-white/70 text-xs mt-0.5">Help us improve by reporting bugs or security issues</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="Close modal">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form */}
                <div className="overflow-y-auto flex-1 px-6 py-5">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {submitSuccess ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-900 font-semibold mb-1">Report Submitted!</h3>
                                <p className="text-gray-500 text-sm">Thank you for helping us improve.</p>
                            </div>
                        ) : (
                            <>
                                {/* Issue Type - Full Width */}
                                <div>
                                    <label htmlFor="issueType" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
                                        Issue Type <span className="text-red-500">*</span>
                                    </label>
                                    <select id="issueType" name="issueType" value={formData.issueType} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 outline-none transition-all cursor-pointer ${
                                        errors.issueType ? 'border-red-400' : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
                                    }`}>
                                        <option value="">Select an issue type...</option>
                                        {issueTypes.map(type => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                        <option value="security">Security Vulnerability</option>
                                    </select>
                                    {errors.issueType && <p className="mt-1 text-xs text-red-500 pl-1">{errors.issueType}</p>}
                                </div>

                                {/* Security Fields - 2 col desktop, 1 col mobile */}
                                {isSecurityIssue && (
                                    <div className="bg-red-50/60 rounded-2xl p-4 space-y-4 border border-red-100">
                                        <p className="text-xs font-medium text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                            Security Details
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FloatingField id="affectedEndpoint" label="Affected Endpoint" required error={errors.affectedEndpoint}>
                                                <input type="text" id="affectedEndpoint" name="affectedEndpoint" value={formData.affectedEndpoint} onChange={handleChange} className={inputClass} />
                                            </FloatingField>
                                            <div>
                                                <label htmlFor="impactLevel" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
                                                    Impact Level <span className="text-red-500">*</span>
                                                </label>
                                                <select id="impactLevel" name="impactLevel" value={formData.impactLevel} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 outline-none transition-all cursor-pointer ${
                                                    errors.impactLevel ? 'border-red-400' : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
                                                }`}>
                                                    <option value="">Select impact level...</option>
                                                    {impactLevels.map(level => (
                                                        <option key={level.value} value={level.value}>{level.label}</option>
                                                    ))}
                                                </select>
                                                {errors.impactLevel && <p className="mt-1 text-xs text-red-500 pl-1">{errors.impactLevel}</p>}
                                            </div>
                                            <FloatingField id="description" label="Vulnerability Description" required error={errors.description}>
                                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} className={textareaClass} />
                                            </FloatingField>
                                            <FloatingField id="stepsToReproduce" label="Steps to Reproduce" required error={errors.stepsToReproduce}>
                                                <textarea id="stepsToReproduce" name="stepsToReproduce" value={formData.stepsToReproduce} onChange={handleChange} rows={3} className={textareaClass} />
                                            </FloatingField>
                                        </div>
                                    </div>
                                )}

                                {/* Normal Issue Fields - 2 col desktop, 1 col mobile */}
                                {formData.issueType && !isSecurityIssue && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FloatingField id="attemptedAction" label="What were you trying to do?" required error={errors.attemptedAction}>
                                            <textarea id="attemptedAction" name="attemptedAction" value={formData.attemptedAction} onChange={handleChange} rows={2} className={textareaClass} />
                                        </FloatingField>
                                        <FloatingField id="actualResult" label="What happened instead?" required error={errors.actualResult}>
                                            <textarea id="actualResult" name="actualResult" value={formData.actualResult} onChange={handleChange} rows={2} className={textareaClass} />
                                        </FloatingField>
                                        <FloatingField id="stepsToReproduce" label="Steps to Reproduce">
                                            <textarea id="stepsToReproduce" name="stepsToReproduce" value={formData.stepsToReproduce} onChange={handleChange} rows={2} className={textareaClass} />
                                        </FloatingField>
                                    </div>
                                )}

                                {/* Page URL & Browser - Side by side on desktop */}
                                {formData.issueType && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FloatingField id="pageUrl" label="Page URL">
                                            <input type="text" id="pageUrl" name="pageUrl" value={formData.pageUrl} onChange={handleChange} className={inputClass} />
                                        </FloatingField>
                                        <div>
                                            <label htmlFor="browserInfo" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
                                                Browser and Device Auto Detected
                                            </label>
                                            <input type="text" id="browserInfo" name="browserInfo" value={formData.browserInfo} readOnly disabled className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 text-sm cursor-not-allowed select-none" />
                                        </div>
                                    </div>
                                )}

                                {/* Attachment - Full Width */}
                                {formData.issueType && (
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                            Attachment <span className="normal-case text-gray-400 font-normal">(optional, max 10MB)</span>
                                        </label>
                                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-primary/40 transition-colors cursor-pointer">
                                            <input type="file" id="attachment" name="attachment" onChange={handleChange} accept="image/*,.txt,.pdf,.log" className="hidden" />
                                            <label htmlFor="attachment" className="cursor-pointer">
                                                <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <p className="text-sm text-gray-500">
                                                    {formData.attachment ? (
                                                        <span className="text-primary font-medium">{formData.attachment.name}</span>
                                                    ) : (
                                                        <><span className="text-primary font-medium">Click to upload</span> or drag and drop</>
                                                    )}
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">PNG, JPG, PDF, TXT, LOG</p>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {/* Submit Error */}
                                {errors.submit && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                                        <p className="text-sm text-red-600">{errors.submit}</p>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex gap-3 pt-2">
                                    <button type="button" onClick={onClose} className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm">
                                        Cancel
                                    </button>
                                    <button type="submit" disabled={isSubmitting || !isFormValid()} className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all text-sm ${
                                        isSubmitting || !isFormValid()
                                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30'
                                    }`}>
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : 'Submit Report'}
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportBugModal;
