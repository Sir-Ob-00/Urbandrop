import React from "react";

const AppDownloandBanner = () => {
	return (
		<section className="py-12 bg-[#f8fafc]">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
				<div>
					<h3 className="text-2xl font-bold mb-2">Shop smarter with Urbandrop</h3>
					<p className="text-gray-600 mb-4">Available now on your mobile. Fast ordering and delivery at your fingertips.</p>
					<div className="flex items-center gap-4">
						<a href="#" className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg">
							{/* App Store badge placeholder */}
							<svg width="24" height="24" viewBox="0 0 24 24" className="mr-3" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#fff"/></svg>
							App Store
						</a>
						<a href="#" className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg">
							{/* Play Store badge placeholder */}
							<svg width="24" height="24" viewBox="0 0 24 24" className="mr-3" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#fff"/></svg>
							Google Play
						</a>
					</div>
				</div>
				<div className="hidden md:block">
					<img src="/src/assets/images/hero/bag.png" alt="app preview" className="h-48 object-contain" />
				</div>
			</div>
		</section>
	);
};

export default AppDownloandBanner;
