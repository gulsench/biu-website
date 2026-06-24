import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "audit" | "outline" | "ghost" | "module";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
}

const sizes: Record<Size, string> = {
  md: "text-[13px] px-5 py-2.5",
  lg: "text-[15px] px-7 py-3",
};

const primaryStyles = cn(
  "inline-flex items-center justify-center gap-2 border border-brand-600/20 font-semibold",
  "bg-brand-600 text-white",
  "transition-[background-color,transform] duration-150",
  "hover:bg-brand-700",
  "active:translate-y-px",
);

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  if (variant === "audit") {
    return (
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 border border-white/20 font-semibold",
          "bg-white text-brand-700",
          "transition-[background-color,transform] duration-150",
          "hover:bg-brand-glow hover:text-brand-700",
          "active:translate-y-px",
          "disabled:cursor-not-allowed disabled:opacity-60",
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === "module") {
    return (
      <button
        type={type}
        className={cn(
          "module-cta inline-flex items-center justify-center gap-2 font-semibold",
          "active:translate-y-px",
          "disabled:cursor-not-allowed disabled:opacity-60",
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        type={type}
        className={cn(
          primaryStyles,
          "disabled:cursor-not-allowed disabled:opacity-60",
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center border border-border bg-white font-semibold text-ink",
          "transition-all duration-150 hover:border-brand-600/30 hover:bg-surfacealt active:translate-y-px",
          "disabled:cursor-not-allowed disabled:opacity-60",
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-semibold text-mid transition-colors duration-150 hover:text-ink",
        "disabled:cursor-not-allowed disabled:opacity-60",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
