import { useState } from "react";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import Modal from "../@common/Modal";
import NextPageBtn from "../@common/MoveNextPageBtn";
import PreviousPageBtn from "../@common/MovePreviousPageBtn";
import Title from "../@common/Title";
import AuthenticationNumInput from "./AuthenticationNumInput";
import ResendAuthNumBtn from "./ResendAuthNumBtn";

export interface CertifiedPageProps {
  sendSms: () => Promise<void>;
}

export default function CertifiedPage(props: CertifiedPageProps) {
  const { sendSms } = props;

  // input창이 비활성화 될 때는 인증번호 색 변화 && 시간 제한 hidden && 모달이 뜬다
  const [inputActive, setInputActive] = useState(true);
  const [count, setCount] = useState(180);
  const [authNum, setAuthNum] = useState("");
  const [resendMessage, setResendMessage] = useState("");

  return (
    <St.AutorizePage inputActive={inputActive}>
      <PreviousPageBtn />
      <St.PageTop>
        <Title title={"📩"} />
        <Title title={"방금 보낸 "} />
        <Title title={"인증번호를 적어줘!"} />
      </St.PageTop>
      <St.AuthNumWrapper inputActive={inputActive}>
        <AuthenticationNumInput
          inputActive={inputActive}
          setInputActive={setInputActive}
          count={count}
          setCount={setCount}
          authNum={authNum}
          setAuthNum={setAuthNum}
        />
        <ResendAuthNumBtn
          setInputActive={setInputActive}
          setCount={setCount}
          setAuthNum={setAuthNum}
          setResendMessage={setResendMessage}
          sendSms={sendSms}
        />
        <St.ResendMessage>{resendMessage}</St.ResendMessage>
      </St.AuthNumWrapper>
      <NextPageBtn nextPage={routePaths.InstallApp} title={"완료"} inputActive={inputActive} />

      {inputActive ? (
        <></>
      ) : (
        <Modal
          title={"인증번호 입력 시간이 초과되었어 ⏰"}
          desc={"같은 번호로 다시 보내줄테니까 확인하고 다시 입력해줘!"}
          button={"다시 받기"}
          setInputActive={setInputActive}
          setCount={setCount}
          setAuthNum={setAuthNum}
          setResendMessage={setResendMessage}
          sendSms={sendSms}
        />
      )}
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
  AuthNumWrapper: styled.section<{ inputActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    position: relative;
    z-index: ${({ inputActive }) => (inputActive ? "" : "-1")};
  `,
  ResendMessage: styled.span`
    color: ${({ theme }) => theme.colors.error};
    ${({ theme }) => theme.fonts.caption1};
    margin-top: 0.8rem;
  `,
};
