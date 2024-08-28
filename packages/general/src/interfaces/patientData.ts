import { bedtypeConst } from "../constants/bedTypeConst";

export interface PatientData {
    age: number;
    gender: number;
    bedType: bedtypeConst[]
    ktas: string;
    latitude: number;
    longitude: number;
    symptom: string;
    hospitalName: string;
    ambulanceId: string;
  }