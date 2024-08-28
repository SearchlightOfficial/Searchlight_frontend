import s from "./input.module.scss";
import { ColorPalette } from "~/lib/colors";
import Typo from "~/components/ui/typography";
import cn from "classnames";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type?: string;
  label?: string;
  error?: string;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  label,
  error,
}: InputProps) => {
  return (
    <div className={s.container}>
      <div className={s.label}>
        <Typo.Caption color={ColorPalette.Grayscale30}>{label}</Typo.Caption>
      </div>
      <input
        className={cn(s.input, className, { [s.error]: error })}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
