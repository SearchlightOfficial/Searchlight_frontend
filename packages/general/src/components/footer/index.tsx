"use client";

import styles from "./footer.module.scss";
import Typo from "@searchlight/shared/components/ui/typography";

import { ColorPalette } from "@searchlight/shared/lib/colors";
import LogoutIcon from "@searchlight/shared/assets/icons/logout.svg";
import { useAuth } from "@/src/lib/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Hospital {
  name: string;
  address: string;
}

const Footer = () => {
  const router = useRouter();
  const { accessToken } = useAuth();
  const [data, setData] = useState<Hospital | null>(null);

  if (!accessToken) {
    return null;
  }

  useEffect(() => {
    // get hospital data from server
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/hospital?fields=name,address`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["column-4"]}>
          <Typo.Headline color={ColorPalette.Grayscale10}>
            {data?.name}
          </Typo.Headline>
          <Typo.Caption color={ColorPalette.Grayscale20}>
            {data?.address}
          </Typo.Caption>
        </div>
        <LogoutIcon onClick={() => {
          router.push("/login");
        }} />
      </div>
    </div>
  );
};

export default Footer;
