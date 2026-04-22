import React from "react";
import SEO from "../components/common/SEO";

const PrivacyPolicy = () => {
	return (
		<main className="min-h-screen bg-gradient-to-br from-[#f2f5f9] to-[#e8f4f8]">
			<SEO
				title="Privacy Policy - Urbandrop™"
				description="Read Urbandrop®'s Privacy Policy to understand how we collect, use, and protect your data."
				canonical="https://urbandrop.io/privacy-policy"
			/>
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-[#183A37]/10 to-[#5CB35E]/10"></div>
				<div className="relative container mx-auto px-6 text-center">
					<div className="max-w-4xl mx-auto">
						<p className="text-[#5CB35E] font-semibold mb-3">Last Modified: 11 April 2026</p>
						<h1 className="font-black text-[#183A37] mb-6">UrbanDrop <span className="text-[#5CB35E]">Privacy Policy</span></h1>
						<p className="text-[#879EA4] mb-4 font-medium text-h4">
							We are committed to protecting your privacy. This policy explains how we collect, use, share, and protect your personal data.
						</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
			</section>

			<div className="container mx-auto px-6 pb-32">
				{/* Main Content */}
				<div className="max-w-4xl mx-auto space-y-8">
					{/* Section 1: Who We Are */}
					<section id="who-we-are" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
							Who We Are
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>
								<strong>UrbanDrop</strong> is a food delivery platform operated by <strong>UrbanDrop Group Ltd</strong>, a company registered in the <strong>United Kingdom</strong>. We connect customers with local African, Caribbean, and Asian food vendors.
							</p>
							<p>
								UrbanDrop ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal data when you use our platform. Please read it carefully. If you do not agree with our practices, please do not use our services.
							</p>
						</div>
					</section>

					{/* Section 2: Lawful Basis for Processing */}
					<section id="lawful-basis" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
							Lawful Basis for Processing
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>We process your personal data on the following legal grounds under <strong>UK GDPR</strong>:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><strong>Contract performance</strong> — to provide the services you have requested, including order fulfilment and delivery.</li>
								<li><strong>Legal obligation</strong> — to comply with applicable laws and regulations.</li>
								<li><strong>Legitimate interests</strong> — to improve our platform, prevent fraud, and ensure security, where your rights do not override these interests.</li>
								<li><strong>Consent</strong> — for marketing communications and non-essential cookies. You may withdraw consent at any time.</li>
							</ul>
						</div>
					</section>

					{/* Section 3: Information We Collect */}
					<section id="information-we-collect" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
							Information We Collect
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>We collect the following personal data:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><strong>Personal details</strong> — name, email address, phone number, and delivery address.</li>
								<li><strong>Payment information</strong> — card details, billing address, and transaction history. Payment data is processed directly by our payment provider and is not stored by us.</li>
								<li><strong>Location data</strong> — real-time location, only when you use location-based features such as finding nearby vendors.</li>
								<li><strong>Device information</strong> — IP address, device type, operating system, app version, and browser type.</li>
								<li><strong>Usage data</strong> — how you interact with our app, including search history, order history, and customer support interactions.</li>
							</ul>
						</div>
					</section>

					{/* Section 4: How We Use Your Information */}
					<section id="how-we-use" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</span>
							How We Use Your Information
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>We use your personal data to:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><strong>Fulfil orders</strong> — process and deliver your food and grocery orders.</li>
								<li><strong>Provide customer support</strong> — respond to queries, complaints, and requests.</li>
								<li><strong>Personalise your experience</strong> — offer recommendations based on your preferences and order history.</li>
								<li><strong>Process payments</strong> — handle transactions securely.</li>
								<li><strong>Send marketing</strong> — with your consent, send promotional offers, updates, and surveys. You can opt out at any time.</li>
								<li><strong>Meet legal obligations</strong> — comply with tax regulations, fraud prevention requirements, and other legal duties.</li>
								<li><strong>Improve our service</strong> — analyse usage patterns to enhance the platform.</li>
							</ul>
						</div>
					</section>

					{/* Section 5: Sharing Your Information */}
					<section id="sharing-your-information" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">5</span>
							Sharing Your Information
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>We may share your personal data with:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><strong>Vendors</strong> — your name, order details, and delivery address are shared to fulfil your order.</li>
								<li><strong>Riders</strong> — your name, address, and contact number are shared for delivery. Riders lose access to this data once delivery is confirmed.</li>
								<li><strong>Payment processors</strong> — our payment partner is <strong>PCI-DSS certified</strong> and securely handles your payment data.</li>
								<li><strong>Service providers</strong> — trusted third parties who support our operations, including analytics, marketing, and customer service.</li>
								<li><strong>Authorities</strong> — we may disclose data where required by law, to protect our rights, or to prevent fraud.</li>
								<li><strong>Buyers or successors</strong> — in the event of a merger, acquisition, or asset sale, your data may transfer to the new entity. We will notify affected users.</li>
							</ul>
							<p className="font-semibold text-[#183A37]">We do not sell your personal data.</p>
						</div>
					</section>

					{/* Section 6: Data Retention */}
					<section id="data-retention" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">6</span>
							Data Retention
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>We keep personal data only for as long as necessary. Our standard retention periods are:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><strong>Order and transaction data</strong> — up to <strong>seven years</strong>, to comply with tax and accounting requirements.</li>
								<li><strong>Account information</strong> — until you delete your account, after which we delete or anonymise your data unless we are legally required to retain it.</li>
								<li><strong>Marketing preferences</strong> — until you withdraw consent.</li>
							</ul>
						</div>
					</section>

					{/* Section 7: Your Rights */}
					<section id="your-rights" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">7</span>
							Your Rights
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>Under <strong>UK data protection law</strong>, you have the right to:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
								<li><strong>Correction</strong> — ask us to correct inaccurate or incomplete data.</li>
								<li><strong>Deletion</strong> — request that we delete your data, subject to legal obligations.</li>
								<li><strong>Restriction</strong> — ask us to limit how we process your data in certain circumstances.</li>
								<li><strong>Data portability</strong> — receive your data in a structured, machine-readable format.</li>
								<li><strong>Objection</strong> — object to processing based on legitimate interests, including direct marketing.</li>
								<li><strong>Withdraw consent</strong> — withdraw consent at any time where processing is consent-based.</li>
							</ul>
							<p>To exercise any of these rights, contact us at <strong>support@urbandrop.io</strong>. We will respond within <strong>one month</strong>, in line with UK GDPR requirements.</p>
							<p>If you are not satisfied with how we handle your data, you have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong> at <strong>ico.org.uk</strong> or by calling <strong>0303 123 1113</strong>.</p>
						</div>
					</section>

					{/* Section 8: Security */}
					<section id="data-security" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">8</span>
							Security
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>We use industry-standard measures to protect your data, including:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><strong>Encryption</strong> — data is transmitted securely using <strong>SSL/TLS protocols</strong>.</li>
								<li><strong>Access controls</strong> — personal data is accessible only to authorised personnel.</li>
								<li><strong>Secure storage</strong> — data is held in protected environments.</li>
							</ul>
							<p className="italic">No method of transmission or storage is completely secure. While we take all reasonable steps to protect your data, we cannot guarantee absolute security.</p>
						</div>
					</section>

					{/* Section 9: Cookies and Tracking Technologies */}
					<section id="cookies-and-tracking" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">9</span>
							Cookies and Tracking Technologies
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>We use cookies and similar technologies to improve your experience. Cookies help us:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Remember your preferences.</li>
								<li>Analyse how you use our platform.</li>
								<li>Deliver relevant advertising.</li>
							</ul>
							<p>Where cookies are not strictly necessary, we will ask for your consent before placing them, in line with <strong>UK PECR rules</strong>. You can manage or disable cookies through your browser settings, though this may affect some functionality.</p>
						</div>
					</section>

					{/* Section 10: Third-Party Links */}
					<section id="links-to-other-sites" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">10</span>
							Third-Party Links
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>
								Our platform may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. We encourage you to read their privacy policies before sharing any personal data.
							</p>
						</div>
					</section>

					{/* Section 11: Children's Privacy */}
					<section id="childrens-privacy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">11</span>
							Children's Privacy
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>
								UrbanDrop is <strong>not intended for anyone under the age of 18</strong>. We do not knowingly collect personal data from children. If we become aware that we have done so, we will delete it promptly.
							</p>
						</div>
					</section>

					{/* Section 12: International Data Transfers */}
					<section id="international-transfers" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">12</span>
							International Data Transfers
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>
								UrbanDrop operates within the UK and complies with <strong>UK GDPR</strong>. Where personal data is transferred outside the UK or EEA, we ensure appropriate safeguards are in place, such as <strong>Standard Contractual Clauses</strong>.
							</p>
						</div>
					</section>

					{/* Section 13: Changes to This Policy */}
					<section id="updates-to-this-policy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">13</span>
							Changes to This Policy
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>
								We may update this Privacy Policy from time to time. When we make significant changes, we will update the "Last Modified" date at the top and, where appropriate, notify you directly. Continued use of our platform after changes are posted constitutes acceptance of the updated policy.
							</p>
						</div>
					</section>

					{/* Section 14: Contact Us */}
					<section id="contact-us" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">14</span>
							Contact Us
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
							<div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-3">
								<p className="font-semibold text-[#183A37]">UrbanDrop Group Ltd</p>
								<p>Bristol, United Kingdom</p>
								<p><strong>Email:</strong> <a href="mailto:support@urbandrop.io" className="text-[#5CB35E] hover:underline">support@urbandrop.io</a></p>
								<p><strong>Information Commissioner's Office (ICO):</strong></p>
								<p><a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#5CB35E] hover:underline">ico.org.uk</a> or call <strong>0303 123 1113</strong></p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
