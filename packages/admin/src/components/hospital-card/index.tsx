import s from "./hospital-card.module.scss";
import Typo from "@searchlight/shared/components/ui/typography";
import { ColorPalette } from "@searchlight/shared/lib/colors";

import LocationIcon from "@searchlight/shared/assets/icons/location.svg";
import EditIcon from "@searchlight/shared/assets/icons/pencil.svg";
import DeleteIcon from "@searchlight/shared/assets/icons/delete.svg";

interface HospitalCardProps {
  id: string;
  email: string;
  name: string;
  address: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const HospitalCard = ({ id, email, name, address }: HospitalCardProps) => {
  return (
    <div className={s.container}>
      <div className={s["card-top"]}>
        <div className={s["card-top-head"]}>
          <Typo.Title color={ColorPalette.Grayscale10}>{name}</Typo.Title>
          <div className={s["button-group"]}>
            <div className={s.icon}>
              <EditIcon color={ColorPalette.Grayscale50} />
            </div>
            <div className={s.icon}>
              <DeleteIcon />
            </div>
          </div>
        </div>
        <Typo.Body color={ColorPalette.Grayscale10}>{email}</Typo.Body>
      </div>
      <div className={s["card-bottom"]}>
        <LocationIcon />
        <Typo.Body color={ColorPalette.Grayscale20}>{address}</Typo.Body>
      </div>
    </div>
  );
};

export default HospitalCard;
