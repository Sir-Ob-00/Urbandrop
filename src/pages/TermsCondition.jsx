import React from "react";

const TermsCondition = () => {
	return (
		<main className="bg-white py-16">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-dark">Terms & Conditions</h1>
					<p className="text-muted mt-2">Last Updated: October 26, 2023</p>
				</div>

				<div className="max-w-3xl mx-auto prose prose-lg max-w-none text-gray-700">
					<h2 className="text-2xl font-bold text-dark mb-3">1. Agreement to Terms</h2>
					<p>By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.</p>
					
					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">2. Accounts</h2>
					<p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>
					
					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">3. Orders and Payments</h2>
					<p>By placing an order through Urbandrop, you warrant that you are legally capable of entering into binding contracts. All orders are subject to availability and confirmation of the order price.</p>
					<p>Payment must be made at the time of ordering. We accept various forms of payment as specified on the website. You confirm that the credit/debit card that is being used is yours or that you have been specifically authorised by the owner of the credit/debit card to use it.</p>
					
					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">4. Intellectual Property</h2>
					<p>The service and its original content, features, and functionality are and will remain the exclusive property of Urbandrop Ltd. and its licensors. The service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.</p>
					
					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">5. Limitation of Liability</h2>
					<p>In no event shall Urbandrop Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
					
					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">6. Governing Law</h2>
					<p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
					
					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">7. Changes</h2>
					<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
					
					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">8. Contact Us</h2>
					<p>If you have any questions about these Terms, please contact us at <a href="mailto:support@urbandrop.com" className="text-primary hover:underline">support@urbandrop.com</a>.</p>
				</div>
			</div>
		</main>
	);
};

export default TermsCondition;
