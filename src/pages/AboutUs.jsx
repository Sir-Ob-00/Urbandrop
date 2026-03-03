import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutPurpose from "../components/about/AboutPurpose";
import OurStory from "../components/about/OurStory";
import AboutProcess from "../components/about/AboutProcess";
import AboutHighlights from "../components/about/AboutHighlights";

import SEO from "../components/common/SEO";

const AboutUs = () => {
    return (
        <>
            <SEO
                title="About Us - Urbandrop™"
                description="Learn about Urbandrop™'s mission to revolutionize urban logistics and connect communities."
                canonical="https://urbandrop.io/about-us"
            />
            <main className="bg-white">
                <AboutHero />
                <AboutPurpose />
                <OurStory />
                <AboutProcess />
                <AboutHighlights />
            </main>
        </>
    );
};

export default AboutUs;
