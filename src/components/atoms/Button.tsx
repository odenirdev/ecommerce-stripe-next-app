import React, { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

const buttonVariants = tv({
  base: "inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      primary:
        "bg-primary border border-primary text-primary-foreground",
      secondary:
        "bg-transparent border border-primary text-secondary-foreground",
      tertiary:
        "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const variantClasses = buttonVariants({ variant });
  const mergedClasses = twMerge(variantClasses, className);

  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
