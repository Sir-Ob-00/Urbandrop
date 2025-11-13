import React, { useEffect, useState } from "react";

const sections = [
	{ id: "who-we-are", title: "1. Who We Are" },
	{ id: "information-we-collect", title: "2. Information We Collect" },
	{ id: "how-we-use-your-information", title: "3. How We Use Your Information" },
	{ id: "marketing-communications", title: "4. Marketing Communications" },
	{ id: "sharing-your-information", title: "5. Sharing Your Information" },
	{ id: "data-retention", title: "6. Data Retention" },
	{ id: "data-security", title: "7. Data Security" },
	{ id: "international-transfers", title: "8. International Transfers" },
	{ id: "your-rights", title: "9. Your Rights" },
	{ id: "cookies-and-tracking", title: "10. Cookies and Tracking" },
	{ id: "childrens-privacy", title: "11. Children's Privacy" },
	{ id: "links-to-other-sites", title: "12. Links to Other Sites" },
	{ id: "updates-to-this-policy", title: "13. Updates to This Policy" },
	{ id: "contact-us", title: "14. Contact Us" },
];

const PrivacyPolicy = () => {
	const [activeSection, setActiveSection] = useState('');

	const effectiveDate = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	useEffect(() => {
		const handleScroll = () => {
			const sectionElements = sections.map(section => ({
				id: section.id,
				element: document.getElementById(section.id),
				title: section.title
			}));

			const scrollPosition = window.scrollY + 200; // Offset for better detection

			for (let i = sectionElements.length - 1; i >= 0; i--) {
				const section = sectionElements[i];
				if (section.element && section.element.offsetTop <= scrollPosition) {
					setActiveSection(section.id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<main className="min-h-screen bg-gradient-to-br from-[#f2f5f9] to-[#e8f4f8]">
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-[#183A37]/10 to-[#5CB35E]/10"></div>
				<div className="relative container mx-auto px-6 text-center">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-5xl md:text-7xl font-black text-[#183A37] mb-6 leading-tight">
							Privacy <span className="text-[#5CB35E]">Policy</span>
						</h1>
						<p className="text-xl md:text-2xl text-[#879EA4] mb-4 font-medium">
							Your privacy matters to us
						</p>
						<p className="text-lg text-[#879EA4]">
							Effective Date: {effectiveDate}
						</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
			</section>

			<div className="container mx-auto px-6 pb-32">
				{/* Main Content */}
				<div className="max-w-4xl mx-auto space-y-8">
						<section id="who-we-are" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
								Who We Are
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>UrbanDrop Group Limited is a company registered in England and Wales under company number 16026087.</p>
								<p>We operate an online marketplace connecting customers with merchants who sell groceries, prepared foods, and ethnic products for delivery or collection.</p>
							</div>
						</section>

						<section id="information-we-collect" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
								Information We Collect
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>We collect personal information that helps us deliver, improve, and manage our services. This may include:</p>
								<h3 className="text-xl font-semibold text-[#183A37] mb-4 mt-6">2.1 Information You Provide Directly</h3>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>Name, contact number, and delivery address.</li>
									<li>Email address and account password.</li>
									<li>Payment and billing information (processed securely by our payment partners).</li>
									<li>Feedback, messages, or reviews you submit.</li>
									<li>Merchant registration details (for business users), including company name, trading address, and bank account details.</li>
								</ul>
								<h3 className="text-xl font-semibold text-[#183A37] mb-4">2.2 Information Collected Automatically</h3>
								<p>When you use UrbanDrop, we may automatically collect:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>Device and browser information (IP address, operating system, device type).</li>
									<li>Location data (if you allow location services).</li>
									<li>Usage data such as pages visited, app interactions, and order activity.</li>
									<li>Log files and diagnostic data to improve performance and security.</li>
								</ul>
								<h3 className="text-xl font-semibold text-[#183A37] mb-4">2.3 Information from Third Parties</h3>
								<p>We may receive information from:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>Payment providers (e.g., to confirm transaction status).</li>
									<li>Identity verification services.</li>
									<li>Delivery partners (e.g., order delivery status).</li>
									<li>Analytics and advertising partners that help us understand usage trends.</li>
								</ul>
							</div>
						</section>

						<section id="how-we-use-your-information" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
								How We Use Your Information
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>We use personal data to:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>Process and deliver your orders.</li>
									<li>Communicate with you about your account, orders, and customer support requests.</li>
									<li>Verify your identity and prevent fraud.</li>
									<li>Manage payments, refunds, and credits.</li>
									<li>Provide merchants with order details necessary for fulfilment.</li>
									<li>Personalize your experience and recommend relevant products.</li>
									<li>Improve platform functionality, performance, and content.</li>
									<li>Comply with legal and regulatory obligations.</li>
								</ul>
								<p>We will only use your data where we have a lawful basis to do so under data protection laws, such as:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>To perform our contract with you (e.g., fulfil an order).</li>
									<li>To comply with legal obligations.</li>
									<li>For legitimate business interests (e.g., improving user experience).</li>
									<li>With your consent (e.g., marketing).</li>
								</ul>
							</div>
						</section>

						<section id="marketing-communications" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</span>
								Marketing Communications
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>We may send you marketing emails or notifications about new products, offers, or promotions if you have given us permission.</p>
								<p>You can opt out at any time by:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>Clicking "unsubscribe" in any marketing email, or</li>
									<li>Adjusting your preferences in the UrbanDrop app or contacting us directly.</li>
								</ul>
								<p>Even if you opt out, we may still send non-promotional messages (e.g., order confirmations or account notices).</p>
							</div>
						</section>

						<section id="sharing-your-information" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">5</span>
								Sharing Your Information
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>We may share limited personal data with:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li><strong>Merchants:</strong> to prepare, fulfil, and deliver your order.</li>
									<li><strong>Delivery Partners:</strong> to deliver your order accurately and safely.</li>
									<li><strong>Payment Processors:</strong> to process payments securely.</li>
									<li><strong>IT and Cloud Providers:</strong> who help us operate our systems.</li>
									<li><strong>Analytics and Advertising Partners:</strong> to improve services and marketing effectiveness.</li>
									<li><strong>Regulators or Law Enforcement:</strong> where required by law or to protect our rights.</li>
								</ul>
								<p>We do not sell your personal data to third parties.</p>
							</div>
						</section>

						<section id="data-retention" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">6</span>
								Data Retention
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>We keep your personal information for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements.</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li><strong>Customer order records:</strong> retained for up to 6 years under UK tax and consumer laws.</li>
									<li><strong>Merchant data:</strong> retained for as long as the account remains active and for 6 years thereafter.</li>
									<li><strong>Support messages and feedback:</strong> retained for operational and legal reference.</li>
								</ul>
								<p>When data is no longer needed, we securely delete or anonymize it.</p>
							</div>
						</section>

						<section id="data-security" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">7</span>
								Data Security
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>We use appropriate technical and organizational measures to protect your data against unauthorized access, disclosure, alteration, or loss.</p>
								<p>These include:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>Encrypted data transmission (SSL/TLS).</li>
									<li>Secure payment gateways (PCI DSS compliant).</li>
									<li>Access controls and authentication systems.</li>
									<li>Regular security monitoring and audits.</li>
								</ul>
								<p>However, no online service is entirely risk-free. You are responsible for safeguarding your account credentials.</p>
							</div>
						</section>

						<section id="international-transfers" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">8</span>
								International Transfers
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>Some of our service providers or partners may process your data outside the UK or European Economic Area (EEA). Where this occurs, we ensure appropriate safeguards are in place, such as:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li>Adequacy decisions approved by the UK or EU.</li>
									<li>Standard Contractual Clauses (SCCs).</li>
									<li>Binding corporate rules or equivalent protection mechanisms.</li>
								</ul>
							</div>
						</section>

						<section id="your-rights" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">9</span>
								Your Rights
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>Under the UK GDPR, you have the following rights regarding your personal data:</p>
								<ul className="list-disc pl-6 mb-6 space-y-2">
									<li><strong>Access</strong> – to request a copy of your data.</li>
									<li><strong>Rectification</strong> – to correct inaccurate or incomplete data.</li>
									<li><strong>Erasure ("Right to be Forgotten")</strong> – to request deletion of your data when it's no longer needed.</li>
									<li><strong>Restriction</strong> – to limit how your data is processed.</li>
									<li><strong>Portability</strong> – to receive your data in a usable format or have it transferred to another provider.</li>
									<li><strong>Objection</strong> – to object to processing for legitimate interest or direct marketing.</li>
									<li><strong>Withdrawal of Consent</strong> – if processing is based on consent.</li>
								</ul>
								<p>To exercise any of these rights, contact us at <a href="mailto:DPO@urbandrop.io" className="text-[#5CB35E] hover:underline font-medium">DPO@urbandrop.io</a>. We may ask for verification before fulfilling your request.</p>
							</div>
						</section>

						<section id="cookies-and-tracking" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">10</span>
								Cookies and Tracking
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>UrbanDrop uses cookies and similar technologies to improve user experience, remember preferences, and analyze traffic.</p>
								<p>You can manage or disable cookies in your browser settings, but doing so may affect the Platform's functionality.</p>
								<p>For more details, please see our Cookie Policy.</p>
							</div>
						</section>

						<section id="childrens-privacy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">11</span>
								Children's Privacy
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>UrbanDrop is not directed at children under 18, and we do not knowingly collect personal data from minors. If we become aware that we have collected such data, we will delete it promptly.</p>
							</div>
						</section>

						<section id="links-to-other-sites" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">12</span>
								Links to Other Sites
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>Our Platform may include links to third-party websites. We are not responsible for the content, privacy practices, or security of those external sites.</p>
							</div>
						</section>

						<section id="updates-to-this-policy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">13</span>
								Updates to This Policy
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>We may update this Privacy Policy from time to time. The latest version will always be available on our website or app. If changes are significant, we will notify users by email or app notification before they take effect.</p>
							</div>
						</section>

						<section id="contact-us" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
								<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">14</span>
								Contact Us
							</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p>If you have any questions, concerns, or data protection requests, contact:</p>
								<div className="bg-gray-50 p-6 rounded-lg mt-4">
									<p className="font-semibold text-[#183A37]">UrbanDrop Group Limited</p>
									<p>Email: <a href="mailto:DPO@urbandrop.io" className="text-[#5CB35E] hover:underline font-medium">DPO@urbandrop.io</a></p>
									<p className="mt-4">You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) in the UK.</p>
									<p>Website: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#5CB35E] hover:underline font-medium">www.ico.org.uk</a></p>
								</div>
							</div>
						</section>
					</div>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
