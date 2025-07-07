import { Hero } from './sections/Hero';
import { LogoCloud } from './sections/LogoCloud';
import { Advantages } from './sections/Advantages';
import { Features } from './sections/Features';
import { Pricing } from './sections/Pricing';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import {MarqueeSection} from "./sections/MarqueeSection.jsx";


function App() {
    return (
        <div className="bg-neutral-900 text-neutral-100 font-sans"> {/* Added font-sans here */}
            <Hero />
            <LogoCloud />
            <Advantages />
            <Features />
            <Pricing />
            <MarqueeSection/>
            <CTA />
            <Footer />
        </div>
    );
}

export default App;