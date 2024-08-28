import s from "./request-card.module.scss";
import Typo from "@searchlight/shared/components/ui/typography";
import { ColorPalette } from "@searchlight/shared/lib/colors";

import TimeIcon from "@searchlight/shared/assets/icons/time.svg";
import CloseIcon from "@searchlight/shared/assets/icons/close.svg";

import cn from "classnames";
import { bedTypes } from "@/src/constants/bedTypes";
import { bedtypeConst } from "@/src/constants/bedTypeConst";
import { getGenderLabel } from "@/src/utils/getGenderLabel";

const Gender = {
  0: "남성",
  1: "여성",
  2: "알 수 없음",
};

interface RequestCardProps {
  age: number;
  gender: number;
  bedType: bedtypeConst[];
  ktas: string;
  symptom: string;
  onReject?: () => void;
  onClick?: () => void;
  selected?: boolean;
}

const RequestCard = ({
  age,
  gender,
  bedType,
  ktas,
  symptom,
  onReject,
  onClick,
  selected,
}: RequestCardProps) => {
  return (
    <div
      className={cn(s["container"], {
        [s["selected"]]: selected,
      })}
      onClick={onClick}
    >
      <div className={s["card-info"]}>
        <div className={s["card-column"]}>
          <div className={s["card-row-8"]}>
            <Typo.Title color={ColorPalette.Grayscale10}>{age}살, {getGenderLabel(gender)}</Typo.Title>
            <Typo.Headline color={ColorPalette.Green}>{ktas}</Typo.Headline>
          </div>
          <div className={s["card-row-4"]}>
            <Typo.Body color={ColorPalette.Grayscale10}>
              {bedType.slice(0, 2).map((bed) => bedTypes[bed]).join(", ")}
              {bedType.length > 2 && ` 외 ${bedType.length - 2}개 응급실`}
            </Typo.Body>
          </div>
          <Typo.Body color={ColorPalette.Grayscale10}>{symptom}</Typo.Body>
        </div>
        <div className={s["card-row-8"]}>
          <TimeIcon />
          <Typo.Body color={ColorPalette.Grayscale20}>
            13km, 약 21분 남음
          </Typo.Body>
        </div>
      </div>
      <div className={s["reject"]} onClick={onReject}>
        <Typo.Body>거절</Typo.Body>
        <CloseIcon />
      </div>
    </div>
  );
};

export default RequestCard;
