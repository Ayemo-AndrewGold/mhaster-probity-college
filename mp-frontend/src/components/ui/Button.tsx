import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-[#0A2463] text-white hover:bg-[#051733] active:bg-[#051733] shadow-sm hover:shadow-md",
      secondary:
        "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-600 shadow-sm hover:shadow-md",
      outline:
        "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0A2463] active:bg-white active:border-white",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
