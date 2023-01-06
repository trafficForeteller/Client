import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postSmsVerify } from "../../apis/sms.api";
import { routePaths } from "../../core/routes/path";
import { IPostPhoneNumber, IPostVerifyPhoneNumber } from "../../types/sms";
import { Modal, MoveNextPageBtn, MovePreviousPageBtn, Title } from "../@common";
import AuthenticationNumInput from "./AuthenticationNumInput";
import PolicyModal from "./PolicyModal";
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
  const [token, setToken] = useState({});
  const [postAuthNum, setPostAuthNum] = useState<IPostVerifyPhoneNumber>({
    code: "",
    phoneNumber: postPhoneNum.phoneNumber,
  });
  const [hasAccessToken, setHasAccessToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (postAuthNum.code === "") return;
    verifyAuthNum(postAuthNum);
  }, [postAuthNum]);

  useEffect(() => {
    console.log(token);
    if ("registerToken" in token) setHasAccessToken(false);
    else if ("accessToken" in token) setHasAccessToken(true);
  }, [token]);

  useEffect(() => {
    if (hasAccessToken) navigate("/recommend/landing");
  }, [hasAccessToken]);

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
      <MovePreviousPageBtn />
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
          inputborder={inputborder}
          handleAuthNum={handleAuthNum}
          checkAuthNumLength={checkAuthNumLength}
        />
        <ResendAuthNumBtn resendAuthNum={resendAuthNum} />
        <St.ResendMessage>{resendMessage}</St.ResendMessage>
      </St.AuthNumWrapper>
      <MoveNextPageBtn
        nextPage={routePaths.Accept}
        title={"완료"}
        inputActive={inputActive}
        correctAuthNum={correctAuthNum}
      />

      {inputActive ? (
        <></>
      ) : count === 0 ? (
        <Modal
          title={"인증번호 입력 시간이 초과되었어 ⏰"}
          desc={"같은 번호로 다시 보내줄테니까 확인하고 다시 입력해줘!"}
          button={"다시 받기"}
          resendAuthNum={resendAuthNum}
          closeModal={closeModal}
        />
      ) : correctAuthNum ? (
        <PolicyModal setInputActive={setInputActive} />
      ) : (
        <Modal
          title={"인증번호를 확인해줘"}
          desc={"잘못된 인증번호를 입력했어 인증번호를 다시 확인하고 입력해줘!"}
          button={"확인"}
          closeModal={closeModal}
          setCount={setCount}
          setInputBorder={setInputBorder}
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
