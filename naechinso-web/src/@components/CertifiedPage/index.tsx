import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getPendingStatus } from "../../apis/pending.api";
import { postSmsVerify } from "../../apis/sms.api";
import { routePaths } from "../../core/routes/path";
import { ITokenType } from "../../types/member";
import { IPostPhoneNumber, IPostVerifyPhoneNumber, IToken } from "../../types/sms";
import { JoinHeader, Title } from "../@common";
import AuthenticationNumInput from "./AuthenticationNumInput";
import AuthModal from "./AuthModal";
import ResendAuthNumBtn from "./ResendAuthNumBtn";

export interface CertifiedPageProps {
  sendSms: () => Promise<void>;
  postPhoneNum: IPostPhoneNumber;
  token: ITokenType;
  setToken: React.Dispatch<React.SetStateAction<ITokenType>>;
}

export default function CertifiedPage(props: CertifiedPageProps) {
  const { sendSms, postPhoneNum, token, setToken } = props;
  // input창이 비활성화 될 때는 인증번호 색 변화 && 시간 제한 hidden && 모달이 뜬다
  const [inputActive, setInputActive] = useState(true);
  const [count, setCount] = useState(180);
  const [authNum, setAuthNum] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const [correctAuthNum, setCorrectAuthNum] = useState(true);
  const [inputborder, setInputBorder] = useState(false);

  const [postAuthNum, setPostAuthNum] = useState<IPostVerifyPhoneNumber>({
    code: "",
    phoneNumber: postPhoneNum.phoneNumber,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (postAuthNum.code === "") return;
    verifyAuthNum(postAuthNum);
  }, [postAuthNum]);

  const closeModal = () => {
    // 모달 닫기
    setInputActive(true);
    setCount(180);
    setAuthNum("");
    setCorrectAuthNum(true);
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
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setAuthNum(e.target.value.replace(/[^0-9]/g, ""));
    checkAuthNumLength(authNum);
  };

  const verifyAuthNum = async (postAuthNum: IPostVerifyPhoneNumber) => {
    // 인증번호 확인 서버에 POST
    await postSmsVerify(postAuthNum, handleSuccessPostSmsVerify, handleFailPostSmsVerify);
  };

  const isPendingStatus = async () => {
    // 펜딩 상태 GET
    const userData = await getPendingStatus(localStorage.getItem("accessToken"));
    if (userData) {
      if (!userData[0]) navigate(`${routePaths.RecommendLanding}`);
      else if (userData[0].pendingStatus === "reject" && userData[0].type === "JOB") {
        return navigate(`${routePaths.JobEdit}`, { state: userData[0] });
      } else if (userData[0].pendingStatus === "reject" && userData[0].type === "EDU") {
        return navigate(`${routePaths.EduEdit}`, { state: userData[0] });
      } else return navigate(`${routePaths.RecommendLanding}`);
    }
  };

  const handleSuccessPostSmsVerify = (userData: IToken) => {
    setToken({
      ...token,
      registerToken: userData.registerToken,
      accessToken: userData.accessToken,
    });
    setCorrectAuthNum(true);
    setInputBorder(false);
    if (userData.accessToken) {
      localStorage.setItem("accessToken", userData.accessToken);
      isPendingStatus();
    }
  };

  const handleFailPostSmsVerify = (errorMessage: string) => {
    setCorrectAuthNum(false);
    console.log(errorMessage);
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
        <ResendAuthNumBtn resendAuthNum={resendAuthNum} inputActive={inputActive} />
        <St.ResendMessage>{resendMessage}</St.ResendMessage>
      </St.AuthNumWrapper>

      <St.ButtonWrapper inputActive={inputActive}>
        <St.Button onClick={() => navigate(routePaths.FriendInfo)} disabled={inputActive} type="button">
          완료
        </St.Button>
      </St.ButtonWrapper>

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
    padding: 5.6rem 2rem 0;
  `,

  PageTop: styled.hgroup`
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
  `,
  ResendMessage: styled.span`
    color: ${({ theme }) => theme.colors.error};
    ${({ theme }) => theme.fonts.caption1};
    margin-top: 0.8rem;
  `,
  ButtonWrapper: styled.section<{ inputActive: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    height: 11rem;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%);
    z-index: ${({ inputActive }) => (inputActive ? "" : "-1")};
  `,
  Button: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
  `,
};
