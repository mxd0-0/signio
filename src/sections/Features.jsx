import { Button } from '../components/Button';
import featuresImage from '../assets/features-illustration.svg';

// A real-world approach would use a router or state management
// to change the displayed content based on the selected tab.
// This example is a static representation of the "Sales" tab.
export const Features = () => {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-left max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left side - Title and Description */}
                        <div>
                            <h2 className="text-4xl text-center sm:text-5xl font-bold text-neutral-900 leading-tight">
                                E-signature Helps You for All Your Needs
                            </h2>
                        </div>

                        {/* Right side - Description */}
                        <div className="lg:pt-4">
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Together with collaboration insights, and improvement tips, it's time for your documents to start working for you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature Tabs - Full width with 24px radius */}
                <div className="mt-12 -mx-4 px-8 py-12 rounded-4xl" style={{ backgroundColor: '#FAFAFA' }}>
                    <div className="w-full">
                        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium text-2xl whitespace-nowrap">
                                Sales
                            </button>
                            <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-8 py-4 rounded-xl font-medium text-2xl transition whitespace-nowrap">
                                HR
                            </button>
                            <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-8 py-4 rounded-xl font-medium text-2xl transition whitespace-nowrap">
                                Marketing
                            </button>
                            <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-8 py-4 rounded-xl font-medium text-2xl transition whitespace-nowrap">
                                Customer Success
                            </button>
                            <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-8 py-4 rounded-xl font-medium text-2xl transition whitespace-nowrap">
                                Legal
                            </button>
                            <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-8 py-4 rounded-xl font-medium text-2xl transition whitespace-nowrap">
                                IT & Ops
                            </button>
                            <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-8 py-4 rounded-xl font-medium text-2xl transition whitespace-nowrap">
                                Finance
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature Content */}
                <div className="bg-neutral-900 rounded-3xl mt-12 p-8 md:p-12 lg:flex items-center gap-12 text-left max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl text-center lg:text-4xl font-bold text-white leading-tight">
                            More time selling your product, less time wasted on paperwork
                        </h3>
                        <p className="mt-6 text-center text-neutral-200 text-lg leading-relaxed">
                            Send yourself a sample document to easily go through our signing workflow, or sign a sample document via link.
                        </p>
                        <div className="mt-8 flex items-center justify-center">
                            <Button variant="light">Learn More</Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        {/* Document and Chart Illustration */}
                        <div className="relative h-80 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img
                                src={featuresImage}
                                alt="E-signature workflow illustration showing documents and charts"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}