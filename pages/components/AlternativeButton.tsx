import React from "react";

interface BProps {
  type?: "submit" | "button" | "reset";
  className?: string;
  onClick?: (x: any) => void;
  children: string;
  color?: boolean;
}
const Button = ({
  type = "submit",
  className = "",
  children,
  onClick,
  color,
}: BProps) => {
  const backgroundColor = {
    primary: {
      bColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      text: "text-white",
      border: "none",
      radius: "rounded-md",
      width: "w-full sm:w-[50%]",
    },
    secondary: {
      bColor: "bg-white",
      text: "text-[#e91e63]",
      border: "border-[#e91e63]",
      radius: "rounded-full",
      width: "w-full md:w-[48%]",
    },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `${
          color
            ? backgroundColor.primary.bColor
            : backgroundColor.secondary.bColor
        } 
        ${
          color
            ? backgroundColor.primary.border
            : backgroundColor.secondary.border
        }
        ${
          color
            ? backgroundColor.primary.width
            : backgroundColor.secondary.width
        }
        ${
          color
            ? backgroundColor.primary.radius
            : backgroundColor.secondary.radius
        }
       
        w-full animate-bounce md:items-center px-4 py-4 bg-blue border text-xs  font-semibold text-semi mb-4
        ${
          color ? backgroundColor.primary.text : backgroundColor.secondary.text
        } uppercase` + className
      }
    >
      {children}
    </button>
  );
};

export default Button;
