import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postSmsVerify } from "../../apis/sms.api";
import { routePaths } from "../../core/routes/path";
import { IPostPhoneNumber, IPostVerifyPhoneNumber } from "../../types/sms";
import { MoveNextPageBtn, MovePreviousPageBtn, Title } from "../@common";
import JoinHeader from "../@common/JoinHeader";
import AuthenticationNumInput from "./AuthenticationNumInput";
import AuthModal from "./AuthModal";
import ResendAuthNumBtn from "./ResendAuthNumBtn";

export interface CertifiedPageProps {
  sendSms: () => Promise<void>;
  postPhoneNum: IPostPhoneNumber;
}

export default function CertifiedPage(props: CertifiedPageProps) {
  const { sendSms, postPhoneNum } = props;
  // input창이 비활성화 될 때는 인증번호 색 변화 && 시간 제한 hidden && 모달이 뜬다
  const [inputActive, setInputActive] = useState(true);
  const [count, setCount] = useState(180);
  const [authNum, setAuthNum] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const [correctAuthNum, setCorrectAuthNum] = useState(false);
  const [inputborder, setInputBorder] = useState(false);
  const [token, setToken] = useState({ registerToken: "", accessToken: "" });
  const [postAuthNum, setPostAuthNum] = useState<IPostVerifyPhoneNumber>({
    code: "",
    phoneNumber: postPhoneNum.phoneNumber,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (postAuthNum.code === "") return;
    verifyAuthNum(postAuthNum);
  }, [postAuthNum]);

  useEffect(() => {
    if (token["accessToken"]) {
      localStorage.setItem("accessToken", token["accessToken"]);
      navigate(`${routePaths.Recommend}`);
    }
  }, [token]);

  const closeModal = () => {
    // 모달 닫기
    setInputActive(true);
    setCount(180);
    setAuthNum("");
  };

  const resendAuthNum = () => {
    // 인증번호 다시 보내기
    if (sendSms) {
      sendSms();
      setResendMessage("인증번호를 다시 보냈어!");
    }
  };

  const checkAuthNumLength = (authNum: string) => {
    //인증번호 길이 확인해 label글자색, nextBtn 색 변화
    if (authNum.length === 6) {
      setPostAuthNum({ ...postAuthNum, code: authNum });
      setInputActive(false);
    } else setInputActive(true);
  };

  const handleAuthNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 인증번호 handle 함수 -input에 숫자만 입력가능케하는 정규식
    setAuthNum(e.target.value.replace(/[^0-9]/g, ""));
    checkAuthNumLength(authNum);
  };

  const verifyAuthNum = async (postAuthNum: IPostVerifyPhoneNumber) => {
    // 인증번호 확인 서버에 POST
    const userData = await postSmsVerify(postAuthNum);
    userData && setToken(userData);
    setCorrectAuthNum(true);
    setInputBorder(false);
  };

  return (
    <St.AutorizePage inputActive={inputActive}>
      <JoinHeader />
      <St.PageTop>
        <Title title="📩" />
        <Title title="방금 보낸 " />
        <Title title="인증번호를 적어줘!" />
      </St.PageTop>
      <St.AuthNumWrapper inputActive={inputActive}>
        <AuthenticationNumInput
          inputActive={inputActive}
          setInputActive={setInputActive}
          count={count}
          setCount={setCount}
          authNum={authNum}
          inputborder={inputborder}
          handleAuthNum={handleAuthNum}
          checkAuthNumLength={checkAuthNumLength}
        />
        <ResendAuthNumBtn resendAuthNum={resendAuthNum} />
        <St.ResendMessage>{resendMessage}</St.ResendMessage>
      </St.AuthNumWrapper>
      <MoveNextPageBtn
        nextPage={routePaths.Recommend}
        title="완료"
        inputActive={inputActive}
        correctAuthNum={correctAuthNum}
      />

      <AuthModal
        inputActive={inputActive}
        count={count}
        setCount={setCount}
        resendAuthNum={resendAuthNum}
        closeModal={closeModal}
        correctAuthNum={correctAuthNum}
        setInputBorder={setInputBorder}
        token={token}
        setToken={setToken}
      />
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
    padding: 0 2.4rem;
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
