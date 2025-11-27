import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutPurpose from "../components/about/AboutPurpose";
import AboutEcosystem from "../components/about/AboutEcosystem";
import AboutProcess from "../components/about/AboutProcess";
import AboutHighlights from "../components/about/AboutHighlights";

const AboutUs = () => {
    return (
        <>
            <main className="bg-white">
                <AboutHero />
                <AboutPurpose />
                <AboutEcosystem />
                <AboutProcess />
                <AboutHighlights />
            </main>
        </>
    );
};

export default AboutUs;
