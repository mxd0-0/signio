// An array to hold the data for each feature card. This makes the code clean and easy to manage.
const advantagesData = [
    {
        title: 'eSign from anywhere',
        description: 'Upload documents from your device or cloud and add your signature with ease: draw, upload, or type it on your mobile device or laptop.',
        imageSrc: '/src/assets/advantage-esign.svg' // <-- Your image path here
    },
    {
        title: 'Capture legally e-signature',
        description: 'Recipients receive notifications with passwords to access the task. Personalize your signatures, initials, or stamps.',
        imageSrc: '/src/assets/advantage-capture.svg' // <-- Your image path here
    },
    {
        title: 'Fast Document Sharing',
        description: 'Upload documents from your device or cloud and add your signature with ease: draw, upload, or type it on your mobile device or laptop.',
        imageSrc: '/src/assets/advantage-sharing.svg' // <-- Your image path here
    },
    {
        title: 'Secure signing is priority',
        description: 'Upload documents from your device or cloud and add your signature with ease: draw, upload, or type it on your mobile device or laptop.',
        imageSrc: '/src/assets/advantage-secure.svg' // <-- Your image path here
    },
];

export const Advantages = () => {
    return (
        <section className="bg-white text-neutral-900 py-16 sm:py-24">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Easy to Use, Reliable, and Completely Secure
                    </h2>
                    <p className="mt-5 text-lg text-neutral-600">
                        With e-signature, templates, custom fields, approval workflows, and more, Signio gives you the confidence to create impressive documents in minutes and get them signed in a snap.
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-16">

                    {/* Loop through the data to create each card */}
                    {advantagesData.map((advantage) => (
                        <div key={advantage.title} className="bg-white rounded-2xl">

                            {/* Image Container: with a subtle background and border like in the design */}
                            <div className="bg-[#F3F6FD] rounded-2xl border border-gray-200/80 p-6">
                                {/* I will add the image tag for you. You just need to import the file. */}
                                <img
                                    src={advantage.imageSrc}
                                    alt={`${advantage.title} feature illustration`}
                                    className="w-full h-auto rounded-xl object-contain shadow-sm"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="pt-6">
                                <h3 className="text-2xl text-center font-bold text-neutral-800">{advantage.title}</h3>
                                <p className="mt-2 text-base text-center text-neutral-600">{advantage.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};