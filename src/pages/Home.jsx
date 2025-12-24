import React from "react";
import HeroSection from "../components/home/HeroSection"; // New import for the redesigned HeroSection
import EthnicMosaic from "../components/home/EthnicMosaic";
import FeaturedCategories from "../components/home/FeaturedCategories";
import WhyChooseUrbandrop from "../components/home/WhyChooseUrbandrop";
import AppDownloandBanner from "../components/home/AppDownloandBanner";

import SEO from "../components/common/SEO";

const Home = () => {
	return (
		<main className="bg-background text-dark font-sans">
			<SEO
				title="Urbandrop - The Future of Urban Delivery"
				description="Experience the fastest urban delivery service. Connecting you with local merchants for instant delivery."
				canonical="https://urbandrop.io/"
			/>
			<HeroSection /> {/* Render the new HeroSection */}
			<EthnicMosaic />
			<FeaturedCategories />
			<WhyChooseUrbandrop />
			<AppDownloandBanner />
		</main>
	);
};

export default Home;
// hmr-touch
