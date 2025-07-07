export const Button = ({ children, variant = 'primary', className = '' }) => {
    const baseStyle = "px-6 py-3 font-medium rounded-lg transition-transform hover:scale-105 shadow-md";

    const styles = {
        primary: 'bg-primary text-white border border-primary',
        outline: 'bg-transparent text-white border border-neutral-700 hover:bg-neutral-800',
        secondary: 'bg-secondary text-neutral-900 font-semibold',
        light: 'bg-white text-primary font-semibold hover:bg-neutral-100',
    };

    return (
        <button className={`${baseStyle} ${styles[variant]} ${className}`}>
            {children}
        </button>
    );
};