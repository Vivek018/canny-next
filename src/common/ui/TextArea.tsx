import { cn } from "@/libs/cn";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-48 w-full border-gray bg-input p-4 rounded-md justify-start text-sm outline-none resize-none",
          className
        )}
        ref={ref}
        minLength={8}
        maxLength={300}
        {...props}
      />
    );
  }
);
TextArea.displayName = "Textarea";

export { TextArea };
