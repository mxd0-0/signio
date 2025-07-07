// src/components/BrandLogo.jsx

/**
 * A reusable component for displaying brand logos.
 * @param {string} src - The path to the SVG logo file.
 * @param {string} alt - The alternative text for the logo.
 * @param {string} className - Additional classes for styling.
 */
export const BrandLogo = ({ src, alt, className = '' }) => {
    return (
        <img
            src={src}
            alt={`${alt} logo`}
            // Adjust height (h-7, h-8) as needed to match your SVG aspect ratios
            className={`h-7 sm:h-8 transition-opacity opacity-90 hover:opacity-100 ${className}`}
        />
    );
};