import React from "react";
import s from "./button.module.scss";
import classNames from "classnames";
import { ColorPalette } from "~/lib/colors";
import { ArrowRight } from "~/assets/icons/ArrowRight";

import Typo from "../typography";

type ButtonVariants = "primary" | "secondary" | "negative";

type ButtonSizes = "small" | "medium" | "large";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variants: ButtonVariants | "primary";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: boolean;
  size?: ButtonSizes | "large";
  type?: "button" | "submit" | "reset";
}

const Button = ({
  variants,
  disabled,
  onClick,
  children,
  icon,
  size,
  ...props
}: ButtonProps) => {
  const buttonClass = classNames(s.button, {
    [s.primary]: variants === "primary",
    [s.secondary]: variants === "secondary",
    [s.negative]: variants === "negative",
    [s.disabled]: disabled,
    [s.small]: size === "small",
    [s.medium]: size === "medium",
    [s.large]: size === "large",
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <Typo.Headline
        color={
          variants === "secondary"
            ? ColorPalette.Grayscale10
            : ColorPalette.Grayscale70
        }
      >
        {children}
      </Typo.Headline>
      {icon && <ArrowRight color={ColorPalette.Grayscale70} />}
    </button>
  );
};

export default Button;
