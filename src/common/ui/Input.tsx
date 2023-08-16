"use client";

import { cn } from "@/libs/cn";
import { InputHTMLAttributes, forwardRef } from "react";
import { Spinner } from "./Spinner";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  Icon?: any;
  isPending?: boolean;
  focus?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputClassName, type, focus, Icon, isPending, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex bg-input h-12 w-full px-4 py-1 rounded-md",
          className,
          focus && "shadow-md dark:brightness-110"
        )}
      >
        <input
          type={type}
          className={cn(
            "flex w-full bg-input text-sm file:bg-transparent file:text-sm file:font-medium outline-none",
            inputClassName
          )}
          ref={ref}
          {...props}
        />
        {isPending && Icon ? (
          <span className='flex justify-end items-center w-10'>
            {isPending ? <Spinner /> : <Icon />}
          </span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
