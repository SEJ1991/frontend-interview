import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  text?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}
export default function Button({
  className,
  text,
  isDisabled,
  onClick,
}: Props) {
  return (
    <button
      className={twMerge(
        "border border-white rounded-md px-2 py-1 select-none",
        isDisabled ? "opacity-25" : "opacity-100",
        className
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
