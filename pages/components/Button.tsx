import React from "react";

interface BProps {
  type?: "submit" | "button" | "reset";
  className?: string;
  onClick?: (x: any) => void;
  children: string | JSX.Element;
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
      bColor: "bg-[#e91e63]",
      text: "text-white",
      border: "border-[#e91e63]",
      marginRight: "mr-4",
    },
    secondary: {
      bColor: "bg-white",
      text: "text-[#e91e63]",
      border: "border-[#e91e63]",
      marginRight: "0",
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
            ? backgroundColor.primary.marginRight
            : backgroundColor.secondary.marginRight
        }
        w-full md:w-[50%] items-center px-4 py-4 bg-blue border rounded-md text-xs  font-semibold text-semi
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
