// src/sections/CTA.jsx

import { Button } from '../components/Button';

// A small SVG component for the decorative arrow
const ArrowIcon = () => (
    <svg width="101" height="97" viewBox="0 0 101 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M99 2C86 28.8333 46.2 84.4 2 95"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <path d="M2 95L19.4531 82.5222" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round"/>
        <path d="M2 95L16.4883 78.0195" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

// A reusable component for the floating feature pills
const FeaturePill = ({ text, icon, rotation, position }) => {
    return (
        <div
            className={`absolute ${position} ${rotation} bg-white rounded-lg shadow-2xl shadow-black/30 p-3 w-40`}
        >
            <div className="flex justify-between items-center text-neutral-900">
                <span className="font-semibold">{text}</span>
                {/* Placeholder for an icon */}
                <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm">{icon}</div>
            </div>
            {/* The blue patterned bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-4 rounded-b-lg
        bg-primary bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(255,255,255,0.7)_8px,rgba(255,255,255,0.7)_10px)]"
            ></div>
        </div>
    );
};


// Main CTA Section Component
export const CTA = () => {
    return (
        // Reusing the grid-background from the Hero section
        <section className="bg-neutral-900 grid-background relative overflow-hidden py-24 sm:py-32">
            <div className="container mx-auto px-4 text-center">

                {/* Headline Content */}
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    Choose a better solution
                </h2>
                <p className="mt-4 text-lg text-neutral-300">
                    Approve, deliver, track, store, and sign documents online using any device.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    {/* Reusing the Button component from previous steps */}
                    <Button variant="primary">Start free trial</Button>
                    <Button variant="outline">Request Demo</Button>
                </div>

            </div>

            {/* Container for absolutely positioned decorative elements */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <div className="relative w-full h-full max-w-6xl mx-auto">
                    {/* Arrow Icon */}
                    <div className="absolute top-[20%] left-[20%] md:top-[15%] md:left-[25%] opacity-50 md:opacity-100">
                        <ArrowIcon />
                    </div>

                    {/* Floating Feature Pills */}
                    {/* Note: Positions are fine-tuned for a balanced look on desktop */}
                    <FeaturePill
                        text="Signature" icon="✎"
                        position="top-[45%] left-[5%] sm:left-[10%] md:left-[15%]"
                        rotation="-rotate-12"
                    />
                    <FeaturePill
                        text="Text field" icon="T"
                        position="top-[58%] left-[20%] sm:left-[25%] md:left-[28%]"
                        rotation="rotate-12"
                    />
                    <FeaturePill
                        text="Checkbox" icon="✓"
                        position="top-[48%] left-[38%] sm:left-[42%] md:left-[40%]"
                        rotation="-rotate-6"
                    />
                    <FeaturePill
                        text="Date" icon="🗓"
                        position="top-[55%] right-[20%] sm:right-[25%] md:right-[28%]"
                        rotation="rotate-12"
                    />
                    <FeaturePill
                        text="Collection" icon="…"
                        position="top-[45%] right-[5%] sm:right-[10%] md:right-[15%]"
                        rotation="-rotate-8"
                    />
                    <FeaturePill
                        text="Card" icon="💳"
                        position="top-[65%] right-[10%] sm:right-[15%] md:right-[20%]"
                        rotation="rotate-8"
                    />
                </div>
            </div>
        </section>
    );
};