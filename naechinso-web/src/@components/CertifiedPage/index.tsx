import { useState } from "react";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import Modal from "../@common/Modal";
import NextPageBtn from "../@common/MoveNextPageBtn";
import PreviousPageBtn from "../@common/MovePreviousPageBtn";
import Title from "../@common/Title";
import AuthenticationNumInput from "./AuthenticationNumInput";
import ResendAuthNumBtn from "./ResendAuthNumBtn";

export default function CertifiedPage() {
  // input창이 비활성화 될 때는 인증번호 색 변화 && 시간 제한 hidden && 모달이 뜬다
  const [inputActive, setInputActive] = useState(true);

  return (
    <St.AutorizePage inputActive={inputActive}>
      <PreviousPageBtn />
      <St.PageTop>
        <Title title={"📩"} />
        <Title title={"방금 보낸 "} />
        <Title title={"인증번호를 적어줘!"} />
      </St.PageTop>
      <St.AuthNumWrapper>
        <AuthenticationNumInput inputActive={inputActive} setInputActive={setInputActive} />
        <ResendAuthNumBtn />
      </St.AuthNumWrapper>
      <NextPageBtn nextPage={routePaths.InstallApp} title={"완료"} inputActive={inputActive} />

      {inputActive ? <></> : <Modal />}
    </St.AutorizePage>
  );
}

const St = {
  AutorizePage: styled.main<{ inputActive: boolean }>`
    background-color: rgba(${({ inputActive }) => (inputActive ? "" : "0, 0, 0, 0.64")});
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,

  PageTop: styled.hgroup`
    padding: 5.8rem 2.4rem 0;
    margin-bottom: 2.4rem;
    position: relative;
    z-index: -1;
  `,
  AuthNumWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    position: relative;
    z-index: -1;
  `,
};
