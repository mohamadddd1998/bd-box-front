import { clsx } from "@/helpers/clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}
const Button = ({ children, variant }: ButtonProps) => {
  const variantColor = {
    secondary: "bg-secondaryColor/80 hover:bg-secondaryColor",
    primary: "bg-primary hover:bg-darkPrimary",
  }[variant];
  return (
    <button
      className={clsx(
        "p-4 text-xs text-white rounded-md cursor-pointer",
        variantColor
      )}
    >
    {children}
    </button>
  );
};
export default Button;
