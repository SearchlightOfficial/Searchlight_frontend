import { BaseTypography } from "./base";
import { BaseProps, TypographyVariant } from "./shared";

function LargeTitle(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.LARGETITLE} />;
}

function Title(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.TITLE} />;
}

function Headline(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.HEADLINE} />;
}

function Body(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.BODY} />;
}

function Caption(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.CAPTION} />;
}

const Typography = {
  LargeTitle,
  Title,
  Headline,
  Body,
  Caption,
};

export default Typography;
