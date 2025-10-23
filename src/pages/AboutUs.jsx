import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutMission from "../components/about/AboutMission";
import AboutStory from "../components/about/AboutStory";
import AboutCTA from "../components/about/AboutCTA";

const AboutUs = () => {
	return (
		<>
            <main className="bg-white">
                <AboutHero />
                <AboutMission />
                <AboutStory />
                <AboutCTA />
            </main>
        </>
	);
};

export default AboutUs;
