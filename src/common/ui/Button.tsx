import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "flex items-center justify-around rounded-full text-sm font-medium transition-color duration-200 cursor-pointer disabled:brightness-75 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        ghost: "hover:bg-accent",
        accent: "bg-accent text-white",
      },
      size: {
        default: "h-10 px-3 py-2",
        icon: "w-12 h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
