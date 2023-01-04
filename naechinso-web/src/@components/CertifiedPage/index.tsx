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
    <St.AutorizePage>
      <PreviousPageBtn />
      <St.PageTop>
        <Title title={"📩"} />
        <Title title={"방금 보낸 "} />
        <Title title={"인증번호를 적어줘!"} />
      </St.PageTop>
      <St.InputWrapper>
        <AuthenticationNumInput inputActive={inputActive} setInputActive={setInputActive} />
      </St.InputWrapper>
      <ResendAuthNumBtn />
      <NextPageBtn nextPage={routePaths.InstallApp} title={"완료"} inputActive={inputActive} />
      {inputActive ? <></> : <Modal />}
    </St.AutorizePage>
  );
}

const St = {
  AutorizePage: styled.main``,
  PageTop: styled.hgroup`
    padding: 5.8rem 2.4rem 0;
    margin-bottom: 2.4rem;
  `,
  InputWrapper: styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  `,
};
