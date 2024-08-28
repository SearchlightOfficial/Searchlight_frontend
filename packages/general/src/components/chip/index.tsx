import CheckIcon from "@searchlight/shared/assets/icons/check.svg";
import cn from "classnames";

import s from "./chip.module.scss";

interface ChipProps {
  selected?: boolean;
  label: string;
  onClick?: () => void;
}

const Chip = ({ selected, label, onClick }: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(s.container, {
        [s.selected]: selected,
      })}
    >
      <CheckIcon />
      {label}
    </div>
  );
};

export default Chip;
