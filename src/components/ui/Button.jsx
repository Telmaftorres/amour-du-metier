function Button({ children, onClick, variant = "primary", disabled = false }) {
    const baseStyles = "px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-[280px]";
    
    const variants = {
      primary: "bg-kontfeel-pink text-white hover:bg-opacity-90 hover:shadow-glow-pink hover:scale-105 active:scale-95",
      secondary: "bg-kontfeel-light text-kontfeel-navy hover:bg-opacity-90 hover:scale-105 active:scale-95"
    };
  
    return (
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {children}
      </button>
    );
  }
  
  export default Button;