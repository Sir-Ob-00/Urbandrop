import React from "react";
import HeroSection from "../components/home/HeroSection";
// Highlights component removed
import FeaturedProducts from "../components/home/FeaturedProducts";
import CustomerReviews from "../components/home/CustomerReviews";
import AppDownloandBanner from "../components/home/AppDownloandBanner";
import WhyChoose from "../components/home/WhyChoose";

const Home = () => {
	return (
		<main className="bg-background text-dark font-sans">
			<HeroSection />
			<WhyChoose />
			<FeaturedProducts />
			<CustomerReviews />
			<AppDownloandBanner />
		</main>
	);
};

export default Home;
// hmr-touch
