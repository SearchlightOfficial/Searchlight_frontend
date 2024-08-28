import { ReactNode } from "react";
import { ColorPalette } from "~/lib/colors";

export const enum TypographyVariant {
  LARGETITLE = "largetitle",
  TITLE = "title",
  HEADLINE = "headline",
  BODY = "body",
  CAPTION = "caption",
}

export type BaseProps = {
  color?: ColorPalette;
  onClick?: () => unknown;
  className?: string;
  children: ReactNode;
};
