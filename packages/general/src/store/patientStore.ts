
import { create } from "zustand";
import { PatientData } from "../interfaces/patientData";

  
  interface PatientState {
    patients: PatientData[];
    addPatient: (patient: PatientData) => void;
    updatePatient: (ambulanceId: string, updatedPatient: Partial<PatientData>) => void;
    deletePatient: (ambulanceId: string) => void;
    setAllPatients: (patients: PatientData[]) => void;
  }
  
  export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    addPatient: (patient) => set((state) => ({
      patients: [...state.patients, patient]
    })),
    updatePatient: (ambulanceId, updatedPatient) => set((state) => ({
      patients: state.patients.map((p) => 
        p.ambulanceId === ambulanceId ? { ...p, ...updatedPatient } : p
      )
    })),
    deletePatient: (ambulanceId) => set((state) => ({
      patients: state.patients.filter((p) => p.ambulanceId !== ambulanceId)
    })),
    setAllPatients: (patients) => set({ patients }),
  }))
