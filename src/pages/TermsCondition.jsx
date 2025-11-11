

const TermsCondition = () => {
	const lastUpdated = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	return (
		<main className="bg-white pt-32 pb-16">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-dark">Terms & Conditions</h1>
					<p className="text-[#879EA4] mt-2">Last Updated: {lastUpdated}</p>
				</div>

				<div className="max-w-4xl mx-auto prose prose-lg prose text-gray-700">
					<h2 className="text-2xl font-bold text-dark mb-3">UrbanDrop Website Terms and Conditions</h2>
					<p>Welcome to UrbanDrop. These Terms and Conditions ("Terms") govern your access to and use of the UrbanDrop website, mobile application, and related services (collectively, the "Platform") operated by UrbanDrop Group Limited ("UrbanDrop," "we," "us," or "our").</p>
					<p>By accessing or using the Platform, you agree to these Terms. Please read them carefully before using the service. If you do not agree, you must not use the Platform.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">1. About UrbanDrop</h2>
					<p>UrbanDrop is an online marketplace that connects customers with independent merchants offering groceries, meals, and ethnic products for delivery or collection. We provide the digital infrastructure, payment processing, and customer interface, but we do not produce, own, or sell the items listed on the Platform.</p>
					<p>When you place an order through UrbanDrop, you are purchasing directly from the merchant, not from UrbanDrop.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">2. Eligibility</h2>
					<p>You must be at least 18 years old to use the Platform. By using it, you confirm that:</p>
					<ul className="list-disc pl-6 mb-4">
						<li>You have the legal capacity to enter into binding agreements.</li>
						<li>You will use the Platform only for lawful purposes.</li>
						<li>You will provide accurate information when creating an account or placing an order.</li>
					</ul>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">3. Your Account</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">3.1 Account Creation</h3>
					<p>To place an order, you may need to create an UrbanDrop account. You must provide accurate details including your name, delivery address, and payment information.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">3.2 Account Security</h3>
					<p>You are responsible for keeping your login credentials secure. Any activity under your account is considered your responsibility.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">3.3 Misuse</h3>
					<p>UrbanDrop may suspend or close accounts used for fraudulent activity, promotion abuse, or violations of these Terms.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">4. Ordering and Payments</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">4.1 Placing an Order</h3>
					<p>When you place an order, you are offering to buy products from a merchant listed on UrbanDrop. Once the merchant accepts your order, a contract forms between you and that merchant.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">4.2 Order Confirmation</h3>
					<p>You will receive confirmation through the Platform once your order is accepted. Merchants may cancel orders if items are unavailable or cannot be fulfilled, in which case you will not be charged.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">4.3 Payments</h3>
					<p>All payments are processed securely through UrbanDrop's payment partners. You authorize UrbanDrop to collect payments on behalf of the merchant.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">4.4 Pricing</h3>
					<p>Prices are set by merchants and include applicable taxes. Delivery, service, and packaging fees may apply and will be displayed before checkout.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">5. Delivery and Collection</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">5.1 Delivery Areas</h3>
					<p>Delivery is available only in areas where UrbanDrop or its logistics partners operate.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">5.2 Delivery Partners</h3>
					<p>Orders may be delivered by UrbanDrop's delivery network or by the merchant directly. Delivery times are estimates and may vary due to traffic, weather, or other factors outside our control.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">5.3 Collection Orders</h3>
					<p>If you choose collection, please arrive at the stated time. Merchants may refuse to hold items beyond a reasonable period.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">6. Promotions and Discounts</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">6.1 Platform Promotions</h3>
					<p>UrbanDrop may occasionally offer promotions or discounts. Each has its own rules, which apply alongside these Terms.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">6.2 Merchant Promotions</h3>
					<p>Promotions created by merchants are funded solely by the merchant. UrbanDrop reviews and approves such offers but is not financially responsible for them.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">6.3 Misuse</h3>
					<p>UrbanDrop reserves the right to suspend or remove offers if misuse or fraudulent activity is detected.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">7. Merchant Responsibilities</h2>
					<p>Each merchant on UrbanDrop is an independent business. Merchants are solely responsible for:</p>
					<ul className="list-disc pl-6 mb-4">
						<li>The accuracy of product information, prices, and images.</li>
						<li>Food safety, hygiene, and proper product labelling.</li>
						<li>Compliance with local licensing and trading laws.</li>
					</ul>
					<p>UrbanDrop does not manufacture, test, or guarantee the products sold by merchants.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">8. Customer Conduct</h2>
					<p>You agree not to:</p>
					<ul className="list-disc pl-6 mb-4">
						<li>Misuse the Platform or attempt to interfere with its operation.</li>
						<li>Harass, abuse, or threaten merchants, drivers, or customer support.</li>
						<li>Create multiple accounts to exploit promotions.</li>
						<li>Post false reviews or misleading feedback.</li>
					</ul>
					<p>UrbanDrop reserves the right to suspend or delete any account that violates these standards.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">9. Customer Cancellation Policy</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">9.1 Before Merchant Acceptance</h3>
					<p>You may cancel an order free of charge at any time before it has been accepted by the merchant.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">9.2 After Merchant Acceptance</h3>
					<p>Once a merchant has accepted your order, cancellation may not be possible, especially for perishable or prepared items. If the merchant has already begun preparing your order, you will be charged in full.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">9.3 Merchant Cancellations</h3>
					<p>Merchants may cancel an order if products are unavailable, the order cannot be fulfilled, or if delivery is not possible. In these cases, you will receive a full refund.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">9.4 Delivery in Progress</h3>
					<p>If your order is already out for delivery, it cannot be cancelled.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">9.5 Repeated Cancellations</h3>
					<p>Customers who repeatedly cancel orders after acceptance may have their accounts restricted or suspended.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">10. Returns and Refunds Policy</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">10.1 General Policy</h3>
					<p>Because UrbanDrop connects customers directly with independent merchants, refunds and returns depend on the nature of the item ordered and the circumstances of the request.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">10.2 Perishable and Prepared Items</h3>
					<p>For perishable goods such as fresh produce, chilled or frozen foods, and cooked meals, refunds or returns are not generally available once an order is delivered or collected, unless:</p>
					<ul className="list-disc pl-6 mb-4">
						<li>The item is damaged, expired, or unsafe to consume at the time of delivery.</li>
						<li>The wrong item was delivered.</li>
						<li>The order was incomplete.</li>
					</ul>
					<p>You must report these issues to UrbanDrop Support within 24 hours of delivery. Supporting evidence such as photos may be required.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">10.3 Non-Perishable Items</h3>
					<p>For packaged, sealed, or non-perishable items, merchants may accept returns in line with UK consumer law if:</p>
					<ul className="list-disc pl-6 mb-4">
						<li>The item is faulty or not as described.</li>
						<li>It is returned unused and in its original packaging.</li>
					</ul>
					<h3 className="text-xl font-semibold text-dark mb-2">10.4 Refund Process</h3>
					<p>Refunds are processed once the merchant confirms eligibility. UrbanDrop will credit the amount to your original payment method within 5–10 business days after approval.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">10.5 Merchant Responsibility</h3>
					<p>Each merchant is responsible for handling refund requests related to their products. UrbanDrop facilitates communication and payment adjustments but is not the final decision-maker.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">10.6 Delivery Issues</h3>
					<p>If your order is delayed, lost, or delivered to the wrong address, please contact UrbanDrop Support immediately. Refunds or redelivery will be considered based on delivery records and merchant confirmation.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">10.7 Abuse of Refunds</h3>
					<p>Repeated refund claims without valid reason may result in your account being flagged or suspended.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">11. Intellectual Property</h2>
					<p>All trademarks, content, and technology on the Platform belong to UrbanDrop Group Limited or its licensors. You may not copy, distribute, or modify any part of the Platform without written permission.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">12. Platform Availability</h2>
					<p>We aim to keep UrbanDrop available 24/7, but we may need to suspend or update services for maintenance. We are not liable for temporary interruptions or data loss arising from such events.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">13. Privacy and Data Protection</h2>
					<p>Your personal data is collected and processed in accordance with our Privacy Policy, available on the Platform. By using UrbanDrop, you consent to the use of your data for order processing, fraud prevention, and customer service.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">14. Limitation of Liability</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">14.1 UrbanDrop's Role</h3>
					<p>UrbanDrop acts as an intermediary between customers and merchants. We are not responsible for:</p>
					<ul className="list-disc pl-6 mb-4">
						<li>Product quality, safety, or authenticity.</li>
						<li>Incorrect or incomplete orders fulfilled by merchants.</li>
						<li>Delivery issues caused by third parties.</li>
					</ul>
					<h3 className="text-xl font-semibold text-dark mb-2">14.2 Indirect Losses</h3>
					<p>We are not liable for indirect, incidental, or consequential damages arising from Platform use.</p>
					<h3 className="text-xl font-semibold text-dark mb-2">14.3 Maximum Liability</h3>
					<p>Our total liability to any user will not exceed the amount paid for the affected order or £50, whichever is lower.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">15. Account Termination</h2>
					<p>UrbanDrop may suspend or close your account at any time if you:</p>
					<ul className="list-disc pl-6 mb-4">
						<li>Breach these Terms.</li>
						<li>Engage in fraudulent or abusive activity.</li>
						<li>Misuse promotions or violate applicable laws.</li>
					</ul>
					<p>You may request account deletion at any time by contacting UrbanDrop Support.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">16. Third-Party Links</h2>
					<p>The Platform may include links to third-party websites. UrbanDrop is not responsible for the content or policies of those sites and accessing them is at your own risk.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">17. Changes to These Terms</h2>
					<p>UrbanDrop may update these Terms periodically. Changes take effect when published on the Platform. Continued use of UrbanDrop means you accept the latest version.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">18. Governing Law</h2>
					<p>These Terms are governed by the laws of England and Wales. Any disputes arising from or related to these Terms will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">19. Contact</h2>
					<p>For questions, complaints, or refund requests, contact:</p>
					<p><strong>UrbanDrop Group Limited</strong><br />
					Email: <a href="mailto:support@urbandrop.io" className="text-primary hover:underline">support@urbandrop.io</a></p>
				</div>
			</div>
		</main>
	);
};

export default TermsCondition;
