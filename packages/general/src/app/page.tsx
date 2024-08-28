"use client";

import styles from "./page.module.scss";
import RequestCard from "../components/request-card";
import Logo from "@searchlight/shared/assets/logo/logo.svg";

import Typo from "@searchlight/shared/components/ui/typography";
import { ColorPalette } from "@searchlight/shared/lib/colors";
import { useEffect, useState } from "react";
import Filter from "../components/filter";
import PatientInfo from "../components/patient-info";
import Footer from "../components/footer";
import { usePatientStore } from "../store/patientStore";
import { PatientData } from "../interfaces/patientData";
import { io as ClientIO } from "socket.io-client";
import { useAuth } from "../lib/AuthContext";
import Button from "@searchlight/shared/components/ui/button";

export default function Home() {
  const [activeRequestId, setActiveRequestId] = useState<null | string>(null);
  const [segPosition, setSegPosition] = useState(0);
  const [filter, setFilter] = useState<string[]>([]);

  const { patients } = usePatientStore();

  const { accessToken } = useAuth();
  const [socket, setSocket] = useState<ReturnType<typeof ClientIO> | null>(null);

  const [modalVisible, setModalVisible] = useState(false);

  const [disconnectAmbulanceId, setDisconnectAmbulanceId] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) return;

    const socketInstance = ClientIO(`${process.env.NEXT_PUBLIC_API_URL}/ambulance`, {
      auth: { token: accessToken },
    });

    socketInstance.emit("hospital_connect");

    socketInstance.on("connect", () => {
      console.log("Socket connected");
    });

    socketInstance.on("update_all_patient_info", (patientData: PatientData[]|[]) => {
      console.log("Received patient data:", patientData);
      usePatientStore.getState().setAllPatients(patientData);
    });

    setSocket(socketInstance);

  }, [accessToken]); // Effect dependency on accessToken

  const disconnectAmbulance = () => {
    if (socket && disconnectAmbulanceId) {
      socket.emit("hospital_disconnect_ambulance", {
        ambulanceSocketId: disconnectAmbulanceId,
      });
      usePatientStore.getState().deletePatient(disconnectAmbulanceId);
      setDisconnectAmbulanceId(null);
      setModalVisible(false);
    }
  }

  const handleDisconnectAmbulance = (ambulanceId: string) => {
    setDisconnectAmbulanceId(ambulanceId);
    setModalVisible(true);
  }

  return (<>
    <main className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo />
          <div className={styles["row-4"]}>
            <div className={styles["segment-container"]}>
              <div
                className={styles["segment-box"]}
                onClick={() => {
                  setSegPosition(0);
                }}
              >
                <Typo.Body color={ColorPalette.Grayscale10}>전체</Typo.Body>
              </div>
              <div
                className={styles["segment-box"]}
                onClick={() => {
                  setSegPosition(130);
                }}
              >
                <Typo.Body color={ColorPalette.Grayscale10}>내 병원</Typo.Body>
              </div>
              <div
                className={styles["segment-active"]}
                style={{ transform: `translateX(${segPosition}px)` }}
              ></div>
            </div>
            <Filter filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <div className={styles["dashboard-container"]}>
          <div className={styles["request-card-container"]}>
            {patients?.map((patient) => (
            <RequestCard
              age={patient.age}
              gender={patient.gender}
              ktas={patient.ktas}
              symptom={patient.symptom}
              bedType={patient.bedType}
              selected={
                activeRequestId === patient.ambulanceId
              }
              onClick={() => {
                setActiveRequestId(patient.ambulanceId);
              }}
              onReject={() => {
                handleDisconnectAmbulance(patient.ambulanceId);
              }}
            />
            ))}
          </div>
          <PatientInfo
            patient={
              patients.find((p) => p.ambulanceId === activeRequestId) || undefined
            }
            onReject={() => {
              handleDisconnectAmbulance(
                patients.find((p) => p.ambulanceId === activeRequestId)?.ambulanceId || ""
              );
            }}
            patientLength={patients.length}
          />
        </div>
        <Footer />
      </div>
    </main>
    {
      modalVisible && (
        <div className={styles['modal-root']}>
              <div className={styles['modal']}>
              <div className={styles['modal-top']}>
                <Typo.LargeTitle color={ColorPalette.Grayscale10}>
                  환자 거부
                  </Typo.LargeTitle>
                  <Typo.Title color={ColorPalette.Grayscale20}>
                  정말로 입원을 거부하시겠습니까?
                  </Typo.Title>
                </div>
            
              <div className={styles['modal-bottom']}>
                <Button variants="secondary" size="small" onClick={() => setModalVisible(false)}>
                    취소
                  </Button>
                  <Button variants="negative" size="small" onClick={disconnectAmbulance}>
                    거부
                  </Button>
              </div>
              </div>
        </div>
      )
    }
    </>
  );
}
