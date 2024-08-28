"use client";

import styles from "./page.module.scss";
import Input from "@searchlight/shared/components/ui/input";
import Button from "@searchlight/shared/components/ui/button";
import HospitalCard from "../components/hospital-card";

import Logo from "@searchlight/shared/assets/logo/logo.svg";
import AddIcon from "@searchlight/shared/assets/icons/add.svg";
import LogoutIcon from "@searchlight/shared/assets/icons/logout.svg";

export default function Home() {
  return (
    <main className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo />
          <div className={styles["header-icons"]}>
            <div className={styles["icon-button"]}>
              <AddIcon />
            </div>
            <div className={styles["icon-button"]}>
              <LogoutIcon />
            </div>
          </div>
        </div>
        <div className={styles["hospital-container"]}>
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
          <HospitalCard
            id="1"
            name="Hospital 1"
            address="Address 1"
            email="hospital@hospital.ac.kr"
          />
        </div>
      </div>
    </main>
  );
}
