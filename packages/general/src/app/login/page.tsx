"use client";

import React, { ChangeEvent } from "react";
import s from "./page.module.scss";
import Input from "@searchlight/shared/components/ui/input";
import Button from "@searchlight/shared/components/ui/button";

import LogoLarge from "@searchlight/shared/assets/logo/logo-large.svg";
import { useRouter } from "next/navigation";

import axios from "axios";
import { useAuth } from "@/src/lib/AuthContext";

const Page = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const { setAccessToken } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    try {
      const loginResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { id, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      if (loginResponse.status !== 200) {
        throw new Error(`Login failed: ${loginResponse.data.message}`);
      }

      const refreshResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          withCredentials: true,
        },
      );

      if (refreshResponse.status !== 200) {
        throw new Error(
          `Failed to refresh access token: ${refreshResponse.data.message}`,
        );
      }

      const { accessToken } = refreshResponse.data;

      setAccessToken(accessToken); // Context에 accessToken 저장

      router.push("/");
    } catch (error: any) {
      console.error("Error:", error);
      alert(error.message || "An unexpected error occurred"); // 사용자에게 에러 메시지 표시
    }
  };

  return (
    <div className={s.layout}>
      <form className={s.form} onSubmit={handleLogin}>
        <LogoLarge />
        <div className={s.group}>
          <Input
            value={id}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
            label="아이디"
            placeholder="아이디를 입력하세요"
            name="id"
          />
          <Input
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
            name="password"
          />
        </div>
        <Button icon variants="primary" size="large" type="submit">
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Page;
