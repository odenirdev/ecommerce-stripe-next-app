import React, { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { Eye, EyeSlash, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

type InputVariant = "default" | "outlined" | "ghost";

type InputProps = ComponentProps<"input"> & {
  variant?: InputVariant;
  icon?: React.ReactNode;
  type?: "text" | "password" | "search";
};

const inputVariants = tv({
  base: "flex items-center h-10 w-full rounded-full px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      default:
        "border border-input bg-background placeholder:text-muted-foreground",
      outlined: "border-2 border-gray-300 bg-white placeholder:text-gray-500",
      ghost: "border-none bg-transparent placeholder:text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Input: React.FC<InputProps> = ({
  variant = "default",
  icon,
  type = "text",
  className,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const variantClasses = inputVariants({ variant });
  const mergedClasses = twMerge(variantClasses, className);

  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const renderIcon = () => {
    if (type === "password") {
      return isPasswordVisible ? (
        <EyeSlash
          onClick={togglePasswordVisibility}
          className="cursor-pointer"
        />
      ) : (
        <Eye onClick={togglePasswordVisibility} className="cursor-pointer" />
      );
    } else if (type === "search") {
      return <MagnifyingGlass />;
    } else if (icon) {
      return icon;
    }
    return null;
  };

  return (
    <div className="relative w-full">
      <input
        className={twMerge(mergedClasses, icon && "pr-10")}
        type={inputType}
        {...props}
      />
      {renderIcon() && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          {renderIcon()}
        </span>
      )}
    </div>
  );
};

export default Input;
