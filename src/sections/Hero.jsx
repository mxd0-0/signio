import {Button} from '../components/Button';
import logo from '../assets/logo.svg';
import hero from '../assets/hero-ui.png';
export const Hero = () => {
    return (<section className="bg-neutral-900 grid-background relative overflow-hidden">
        {/* Header/Navigation (unchanged) */}
        <header className="container mx-auto px-4 py-5">
            <nav className="flex justify-between items-center">
                <div className="text-3xl font-bold text-white">
                    {/* Your Signio Logo goes here */}
                    <img src={logo}/>
                </div>
                <div className="hidden lg:flex gap-10 text-neutral-300">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">Features</a>
                    <a href="#" className="hover:text-white transition-colors">About Us</a>
                    <a href="#" className="hover:text-white transition-colors">Product</a>
                </div>
                <div className="flex items-center gap-6">
                    <a href="#" className="hidden sm:block text-neutral-300 hover:text-white transition-colors">
                        Log In
                    </a>
                    <Button variant="primary" className="!px-5 !py-2.5 shadow-md shadow-primary/40">Try It Free
                        eSign</Button>
                </div>
            </nav>
        </header>

        {/* Main Content */}
        <div className="relative text-center pt-20 pb-48 lg:pt-24 lg:pb-64">
            <div className="container mx-auto px-4">
                <div className="relative inline-block">
                    {/* Glassmorphism style for the tag */}
                    <div
                        className="absolute -top-8 -right-12 bg-primary/10 backdrop-blur-sm border border-primary/50 text-primary px-3 py-1 rounded-lg text-sm transform rotate-6">
                        Singio.io
                    </div>

                    <h1 className="text-5xl text-center text-wrap lg:text-6xl font-bold text-white tracking-tighter">
                        {/* MODIFICATION HERE: New structure for the soft glow effect */}
                        <div className="relative inline-block">
                            {/* The blurred background shape */}
                            <div className="absolute -inset-x-6 -inset-y-2 bg-blue-900/60 blur-2xl"></div>

                            {/* The animated text on top */}
                            <span className="relative z-10">
                                   <span
                                       className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-primary w-[18ch] animate-[type-and-erase_10s_steps(18,end)_infinite,blink-caret_0.75s_step-end_infinite]">
  Digital Signature
</span>


                  </span>
                        </div>
                    </h1>
                </div>

                <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter mt-2">
                    That Scales Your Workflow
                </h2>

                {/* ... (rest of the component is unchanged) ... */}
                <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto">
                    Draw a digital signature on any computer, tablet, or mobile device. Then add it to any document
                    requiring an electronic signature.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <Button variant="primary" className="shadow-md shadow-primary/30">Start for Free</Button>
                    <Button variant="outline">Request Demo</Button>
                </div>
            </div>
        </div>

        {/* Bottom Feature Image (unchanged) */}
        <div className="relative container mx-auto px-4 -mt-40 md:-mt-48 lg:-mt-56">
            <div className="relative w-full max-w-6xl mx-auto">
                <img
                    src={hero}
                    alt="Signio application showing a project development document"
                    className="w-full h-auto rounded-t-xl shadow-2xl shadow-black/40 object-cover"
                />
                <div
                    className="absolute inset-0 rounded-t-xl bg-gradient-to-b from-transparent via-transparent to-[#020406]">
                </div>
            </div>
        </div>
    </section>);
};