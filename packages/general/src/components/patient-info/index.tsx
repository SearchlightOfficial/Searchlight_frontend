import KTASIcon from "@searchlight/shared/assets/icons/ktas.svg";
import EmergencyRoomIcon from "@searchlight/shared/assets/icons/emergency-room.svg";
import SymptomIcon from "@searchlight/shared/assets/icons/symptom.svg";

import Typo from "@searchlight/shared/components/ui/typography";
import Button from "@searchlight/shared/components/ui/button";

import { ColorPalette } from "@searchlight/shared/lib/colors";

import s from "./patient-info.module.scss";
import { PatientData } from "@/src/interfaces/patientData";
import { getGenderLabel } from "@/src/utils/getGenderLabel";

interface PatientInfoProps {
  patient?: PatientData;
  onReject?: () => void;
  patientLength?: number;
}

const PatientInfo: React.FC<PatientInfoProps> = ({ patient,onReject,patientLength }) => {

  if (!patient) return <div className={s.empty}>
       <Typo.Title className={s.center} color={ColorPalette.Grayscale10}>
       {patientLength}대의 구급차가 현재 <br />
       우리 병원으로 이송중입니다
            </Typo.Title>
            <Typo.Body className={s.center} color={ColorPalette.Grayscale20}>
            왼쪽의 환자를 선택하면 <br />
            더 자세한 정보를 볼 수 있습니다
            </Typo.Body>
  </div>
  return (
    <div className={s.container}>
      <div className={s["card-column"]}>
        <iframe
          className={s.map}
          src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&center=${patient.latitude},${patient.longitude}&zoom=15`}
        />
        <div className={s["info-content"]}>
          <div className={s["column-4"]}>
            <div className={s.title}>
              {patient.age}세,
              {getGenderLabel(patient.gender)}
            </div>
            <div className={s.subtitle}>{patient.symptom}</div>
          </div>
          <div>
            <div className={s["row-4"]}>
              <KTASIcon />
              <Typo.Body color={ColorPalette.Grayscale10}>KTAS 코드</Typo.Body>
            </div>
            <Typo.Body color={ColorPalette.Grayscale20}>
              {patient.ktas}
            </Typo.Body>
          </div>
          <div>
            <div className={s["row-4"]}>
              <EmergencyRoomIcon />
              <Typo.Body color={ColorPalette.Grayscale10}>응급실</Typo.Body>
            </div>
            <Typo.Body color={ColorPalette.Grayscale20}>
              {patient?.bedType?.join(", ")}
            </Typo.Body>
          </div>
          <div>
            <div className={s["row-4"]}>
              <SymptomIcon />
              <Typo.Body color={ColorPalette.Grayscale10}>증상</Typo.Body>
            </div>
            <Typo.Body color={ColorPalette.Grayscale20}>
              {patient.symptom}
            </Typo.Body>
          </div>
        </div>
      </div>
      <Button variants="secondary" size="large" onClick={onReject}>
        입원 거절
      </Button>
    </div>
  );
};

export default PatientInfo;
