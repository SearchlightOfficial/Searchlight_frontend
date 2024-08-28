"use client";

import React from "react";
import s from "./page.module.scss";
import Input from "@searchlight/shared/components/ui/input";
import Button from "@searchlight/shared/components/ui/button";

import LogoLarge from "@searchlight/shared/assets/logo/logo-large.svg";

const Page = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className={s.layout}>
      <form className={s.form}>
        <LogoLarge />
        <div className={s.group}>
          <Input
            value={id}
            onChange={setId}
            label="아이디"
            placeholder="아이디를 입력하세요"
          />
          <Input
            value={password}
            onChange={setPassword}
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
        </div>
        <Button icon variants="primary" size="large">
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Page;
