"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  appName?: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "+`${className}`}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      Button
    </button>
  );
};
