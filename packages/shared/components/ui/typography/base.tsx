import { createElement } from "react";
import { BaseProps, TypographyVariant } from "./shared";
import classNames from "classnames";

import s from "./typography.module.scss";

type BaseTypographyProps = BaseProps & {
  variant: TypographyVariant;
};
export function BaseTypography(props: BaseTypographyProps) {
  const { color, variant } = props;

  return props.children ? (
    createElement("div", {
      children: props.children,
      style: {
        color: color ? `var(${color})` : undefined,
      },
      className: classNames(s[variant], props.className),
    })
  ) : (
    <></>
  );
}
