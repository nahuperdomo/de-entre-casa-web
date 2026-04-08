"use client";

import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-campo text-white hover:bg-campo/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-bronce text-white hover:bg-bronce/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "border-2 border-tierra text-tierra hover:bg-tierra hover:text-crema hover:-translate-y-0.5",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-full font-jost font-medium text-sm tracking-wide transition-all duration-300 ease-out";

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
