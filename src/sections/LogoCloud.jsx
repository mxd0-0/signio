// src/sections/LogoCloud.jsx

import { BrandLogo } from '../components/BrandLogo';

// Define the logos you want to display.
// I will use the paths as if you've added the SVGs to `src/assets/`.
const logos = [
    { name: 'Autodesk', src: '/src/assets/autodesk.svg' },
    { name: 'HubSpot', src: '/src/assets/hubspot.svg' },
    { name: 'Zapier', src: '/src/assets/zapier.svg' },
    { name: 'Tata Steel', src: '/src/assets/tata-steel.svg' },
    { name: 'Bonusly', src: '/src/assets/bonusly.svg' },
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