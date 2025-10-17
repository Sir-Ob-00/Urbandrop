import React from "react";
import AppDownloandBanner from "../components/home/AppDownloandBanner";

const sections = [
	{ id: "introduction", title: "1. Introduction" },
	{ id: "information-we-collect", title: "2. Information We Collect" },
	{ id: "how-we-use-your-information", title: "3. How We Use Your Information" },
	{ id: "sharing-your-information", title: "4. Sharing Your Information" },
	{ id: "your-data-protection-rights", title: "5. Your Data Protection Rights" },
	{ id: "security-of-your-data", title: "6. Security of Your Data" },
	{ id: "changes-to-this-privacy-policy", title: "7. Changes to This Privacy Policy" },
];

const PrivacyPolicy = () => {
	return (
		<main className="bg-[#f2f5f9] py-16">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-[#183A37]">Privacy Policy</h1>
					<p className="text-[#879EA4] mt-2">Last Updated: October 26, 2023</p>
				</div>

				<div className="flex flex-col md:flex-row gap-12">
					{/* Left Sidebar */}
					<aside className="md:w-1/4">
						<nav className="sticky top-24">
							<ul className="space-y-2">
								{sections.map(section => (
									<li key={section.id}>
										<a href={`#${section.id}`} className="block text-[#879EA4] hover:text-[#183A37] font-medium transition-colors py-2 border-l-4 border-transparent hover:border-primary pl-4">{section.title}</a>
									</li>
								))}
							</ul>
						</nav>
					</aside>

					{/* Main Content */}
					<div className="md:w-3/4 prose prose-lg max-w-none text-gray-700">
						<section id="introduction" className="mb-10">
							<h2 className="text-2xl font-bold text-[#183A37] mb-3">1. Introduction</h2>
							<p>Welcome to Urbandrop. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
						</section>

						<section id="information-we-collect" className="mb-10">
							<h2 className="text-2xl font-bold text-[#183A37] mb-3">2. Information We Collect</h2>
							<p>We may collect personal information from you in a variety of ways, including:</p>
							<ul>
								<li><span className="text-[#4a954d] font-bold">Personal Identification Information:</span> Name, email address, phone number, delivery address, and billing information when you register an account, place an order, or contact us.</li>
								<li><span className="text-[#4a954d] font-bold">Payment Data:</span> We collect necessary data to process your payments, such as your payment instrument number (e.g., a credit card number) and the security code associated with it. All payment data is stored securely by our payment processors.</li>
								<li><span className="text-[#4a954d] font-bold">Usage Data:</span> Information about how you access and use the service, including your IP address, browser type, pages visited, and the time and date of your visit.</li>
							</ul>
						</section>

						<section id="how-we-use-your-information" className="mb-10">
							<h2 className="text-2xl font-bold text-[#183A37] mb-3">3. How We Use Your Information</h2>
							<p>We use the information we collect for various purposes, including to:</p>
							<ul>
								<li>Provide, operate, and maintain our services.</li>
								<li>Process your transactions and manage your orders.</li>
								<li>Improve, personalize, and expand our services.</li>
								<li>Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
								<li>Detect and prevent fraud.</li>
							</ul>
						</section>

						<section id="sharing-your-information" className="mb-10">
							<h2 className="text-2xl font-bold text-dark mb-3">4. Sharing Your Information</h2>
							<p>We do not sell your personal information. We may share your information with third parties to perform services on our behalf, such as:</p>
							<ul>
								<li><span className="text-[#4a954d] font-bold">Merchants:</span> To fulfill your orders, we share your order details and delivery information with the merchants you purchase from.</li>
								<li><span className="text-[#4a954d] font-bold">Payment Processors:</span> To bill you for products and services.</li>
								<li><span className="text-[#4a954d] font-bold">Delivery Partners:</span> To deliver your orders to your specified address.</li>
							</ul>
							<p>We may also disclose your information where required by law.</p>
						</section>

						<section id="your-data-protection-rights" className="mb-10">
							<h2 className="text-2xl font-bold text-dark mb-3">5. Your Data Protection Rights</h2>
							<p>Under UK GDPR, you have various rights in relation to your personal data, including the right to:</p>
							<ul>
								<li>Access, update or delete the information we have on you.</li>
								<li>Rectify any information that is inaccurate or incomplete.</li>
								<li>Object to our processing of your personal data.</li>
								<li>Request that we restrict the processing of your personal information.</li>
							</ul>
							<p>To exercise these rights, please contact us at <a href="mailto:support@urbandrop.com" className="text-primary hover:underline">support@urbandrop.com</a>.</p>
						</section>

						<section id="security-of-your-data" className="mb-10">
							<h2 className="text-2xl font-bold text-dark mb-3">6. Security of Your Data</h2>
							<p>The security of your data is important to us. We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
						</section>

						<section id="changes-to-this-privacy-policy" className="mb-10">
							<h2 className="text-2xl font-bold text-dark mb-3">7. Changes to This Privacy Policy</h2>
							<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
						</section>
					</div>
				</div>
			</div>
			<AppDownloandBanner />
		</main>
	);
};

export default PrivacyPolicy;
