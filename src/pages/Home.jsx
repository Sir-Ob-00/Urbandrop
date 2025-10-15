import React from "react";
import HeroSection from "../components/home/HeroSection";
import Highlights from "../components/home/Highlights";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CustomerReviews from "../components/home/CustomerReviews";
import AppDownloandBanner from "../components/home/AppDownloandBanner";

const Home = () => {
	return (
		<main className="bg-background text-dark font-sans">
			<HeroSection />
				<Highlights />
			<FeaturedProducts />
			<CustomerReviews />
			<AppDownloandBanner />
		</main>
	);
};

export default Home;
// hmr-touch
