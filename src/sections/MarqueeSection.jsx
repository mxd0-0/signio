import starIcon from '../assets/star.svg';
import logoWhite from '../assets/Logo-white.svg';

export const MarqueeSection = () => {
    const items = [
        { src: starIcon, alt: 'Star', className: 'h-5 w-auto' },
        { src: logoWhite, alt: 'Signio Logo', className: 'h-8 w-auto' },
    ];

    const renderItems = () => (
        <div className="flex items-center gap-8">
            {items.map((item, idx) => (
                <img key={idx} src={item.src} alt={item.alt} className={item.className} />
            ))}
        </div>
    );

    return (
        <section className="bg-primary py-6 overflow-hidden">
            <div className="relative w-full">
                <div className="marquee flex min-w-[200%] whitespace-nowrap gap-10">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            {renderItems()}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
