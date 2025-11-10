import React from "react";
import HeroSection from "../components/home/HeroSection"; // New import for the redesigned HeroSection
import EthnicMosaic from "../components/home/EthnicMosaic";
import FeaturedCategories from "../components/home/FeaturedCategories";
import CustomerReviews from "../components/home/CustomerReviews";
import AppDownloandBanner from "../components/home/AppDownloandBanner";

const Home = () => {
	return (
		<main className="bg-background text-dark font-sans">
			<HeroSection /> {/* Render the new HeroSection */}
			<EthnicMosaic />
			<FeaturedCategories />
			<CustomerReviews />
			<AppDownloandBanner />
		</main>
	);
};

export default Home;
// hmr-touch
