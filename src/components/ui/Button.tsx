"use client";

import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-campo text-white hover:bg-campo/90 shadow-md hover:shadow-lg",
  secondary:
    "bg-bronce text-white hover:bg-bronce/90 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-tierra text-tierra hover:bg-tierra hover:text-crema",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-jost font-medium text-sm tracking-wide transition-all duration-300";

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
