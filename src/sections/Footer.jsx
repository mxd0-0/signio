// src/sections/Footer.jsx

export const Footer = () => {
    // Data object for the footer links, making them easy to manage.
    const footerLinks = {
        Product: ['Overview', 'Features', 'Tutorials', 'Pricing', 'Releases'],
        'Help and Support': ['Account Information', 'Talk to support', 'Support Docs', 'System Status'],
        Resources: ['Blog', 'Newsletter', 'Help centre'],
    };

    return (
        <footer className="bg-neutral-900 py-16">
            <div className="container mx-auto px-4">

                {/* Top section of the footer containing the logo and main links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand Info Column */}
                    <div className="lg:col-span-2">
                        {/*
                          This <img> tag loads your existing logo.
                          Place your Logo.svg file inside the `src/assets/` directory.
                        */}
                        <img
                            src="/src/assets/Logo.svg"
                            alt="Signio Logo"
                            className="h-9" // You can adjust the height (h-8, h-9, h-10) if needed
                        />
                        <p className="mt-6 text-neutral-400 max-w-xs">
                            Draw a digital signature on any computer, tablet, or mobile device.
                        </p>
                    </div>

                    {/* Link Columns: Looping through the data object */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-neutral-400 mb-5">{title}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white font-medium hover:text-primary transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar: Contains copyright, legal links, and your portfolio */}
                <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="flex items-center gap-x-6 gap-y-2 flex-wrap justify-center">
                        <div className="flex items-center gap-x-6 text-sm">
                            <a href="#" className="text-neutral-400 hover:text-white">Terms and condition</a>
                            <span className="text-neutral-600">•</span>
                            <a href="#" className="text-neutral-400 hover:text-white">Privacy Policy</a>
                        </div>
                        <span className="text-neutral-600">•</span>

                        {/* Your portfolio link */}
                        <a
                            href="https://mohammedamine.social"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white text-sm"
                        >
                            mohammedamine.social
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};