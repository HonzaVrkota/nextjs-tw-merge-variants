import { ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "font-medium rounded-full active:opacity-80 px-2 py-3",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  variant?: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <a href={props.href} target={props.target}>
      <button
        className={twMerge(
          // "w-full bg-orange-500 p-4 text-white",
          button(props.variant),
          props.className,
        )}
      >
        {/* <button className={`w-full bg-orange-500 p-4 text-lg text-white ${props.className}`}> */}
        {props.children}
      </button>
    </a>
  );
};

export default Button;
