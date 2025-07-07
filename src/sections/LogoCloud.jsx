// src/sections/LogoCloud.jsx
import autodesk from '../assets/autodesk.svg';
import hubspot from '../assets/hubspot.svg';
import zapier from '../assets/zapier.svg';
import tataSteel from '../assets/tata-steel.svg';
import bonusly from '../assets/bonusly.svg';
import { BrandLogo } from '../components/BrandLogo';

// Define the logos you want to display.
// I will use the paths as if you've added the SVGs to `src/assets/`.
const logos = [
    { name: 'Autodesk', src: autodesk },
    { name: 'HubSpot', src: hubspot },
    { name: 'Zapier', src: zapier },
    { name: 'Tata Steel', src: tataSteel },
    { name: 'Bonusly', src: bonusly },
];

export const LogoCloud = () => {
    return (
        // Using the primary blue color from the theme for the background
        <section className="bg-[#1877F2] py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-2xl sm:text-3xl font-bold text-white mb-10">
                    Trusted by Brands All Over World
                </h1>
                {/* Container for the logos */}
                <div className="flex flex-wrap justify-center items-center gap-x-30 gap-y-8 md:gap-x-30 lg:gap-x-30">
                    {/* Map over the logos array to render each one */}
                    {logos.map((logo) => (
                        <BrandLogo key={logo.name} src={logo.src} alt={logo.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};