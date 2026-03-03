import React from "react";
import HeroSection from "../components/home/HeroSection"; // New import for the redesigned HeroSection
import EthnicMosaic from "../components/home/EthnicMosaic";
import FeaturedCategories from "../components/home/FeaturedCategories";
import WhyChooseUrbandrop from "../components/home/WhyChooseUrbandrop";
import BrandSlider from "../components/home/BrandSlider";
import AppDownloandBanner from "../components/home/AppDownloandBanner";

import SEO from "../components/common/SEO";

const Home = () => {
	return (
		<main className="bg-background text-dark font-sans">
			<SEO
				title="Urbandrop™ - The Home of Ethnic Groceries and Recipes"
				description="Discover Urbandrop™, your go-to platform for ethnic groceries and authentic recipes, delivered fast from local merchants."
				canonical="https://urbandrop.io/"
			/>
			<HeroSection /> {/* Render the new HeroSection */}
			<EthnicMosaic />
			<FeaturedCategories />
			<WhyChooseUrbandrop />
			<BrandSlider />
			<AppDownloandBanner />
		</main>
	);
};

export default Home;
// hmr-touch
