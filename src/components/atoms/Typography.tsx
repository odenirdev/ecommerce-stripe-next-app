import React, { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "caption";

type TypographyProps = ComponentProps<"p"> & {
  variant?: TypographyVariant;
  as?: React.ElementType;
};

const typographyVariants = tv({
  base: "font-sans text-gray-800",
  variants: {
    variant: {
      h1: "text-4xl font-extrabold tracking-tight",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-medium",
      body: "text-base font-normal",
      caption: "text-sm font-light",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  className,
  as: Component = "p",
  children,
  ...props
}) => {
  const variantClasses = typographyVariants({ variant });
  const mergedClasses = twMerge(variantClasses, className);

  return (
    <Component className={mergedClasses} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
