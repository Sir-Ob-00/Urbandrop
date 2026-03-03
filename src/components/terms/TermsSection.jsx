import React from 'react';

const TermsSection = ({ id, title, icon, colorTheme, children }) => {
    const themeStyles = {
        primary: 'border-primary/20 bg-primary/5',
        secondary: 'border-secondary/20 bg-secondary/5',
        accent1: 'border-blue-500/20 bg-blue-500/5',
        accent2: 'border-green-500/20 bg-green-500/5',
        accent3: 'border-purple-500/20 bg-purple-500/5',
    };

    const bgStyle = themeStyles[colorTheme] || themeStyles.primary;

    return (
        <section id={id} className={`scroll-mt-32 p-6 md:p-8 rounded-2xl border ${bgStyle} mb-8 transition-all hover:shadow-md`}>
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-white shadow-sm border border-gray-100 flex-shrink-0 text-${colorTheme === 'primary' ? 'primary' : colorTheme === 'secondary' ? 'secondary' : colorTheme.replace('accent', 'gray-')} `}>
                    {icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 m-0">{title}</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
                {children}
            </div>
        </section>
    );
};

export default TermsSection;
