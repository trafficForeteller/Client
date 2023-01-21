import { useEffect } from "react";

import { ITokenType } from "../../types/member";
import { Modal } from "../@common";
import PolicyModal from "./PolicyModal";

export interface AuthModalProps {
  inputActive: boolean;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  resendAuthNum: () => void;
  closeModal: () => void;
  correctAuthNum: boolean;
  setInputBorder: React.Dispatch<React.SetStateAction<boolean>>;
  token: ITokenType;
  setToken: React.Dispatch<React.SetStateAction<ITokenType>>;
}

export default function AuthModal(props: AuthModalProps) {
  const { inputActive, count, setCount, resendAuthNum, closeModal, correctAuthNum, setInputBorder, token, setToken } =
    props;

  useEffect(() => {
    console.log(correctAuthNum);
  }, [correctAuthNum]);

  return (
    <>
      {inputActive ? (
        <></>
      ) : count === 0 ? (
        <Modal
          title="인증번호 입력 시간이 초과되었어 ⏰"
          desc="같은 번호로 다시 보내줄테니까 확인하고 다시 입력해줘!"
          button="다시 받기"
          resendAuthNum={resendAuthNum}
          closeModal={closeModal}
        />
      ) : token["registerToken"] && token["accessToken"] === "" ? (
        <PolicyModal token={token} setToken={setToken} />
      ) : correctAuthNum ? (
        <></>
      ) : (
        <Modal
          title="인증번호를 확인해줘"
          desc="잘못된 인증번호를 입력했어 인증번호를 다시 확인하고 입력해줘!"
          button="확인"
          closeModal={closeModal}
          setCount={setCount}
          setInputBorder={setInputBorder}
        />
      )}
    </>
  );
}
