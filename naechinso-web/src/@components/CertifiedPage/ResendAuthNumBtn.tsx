import styled from "styled-components";

export interface ResendAuthNumBtnProps {
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setAuthNum: React.Dispatch<React.SetStateAction<string>>;
  setResendMessage: React.Dispatch<React.SetStateAction<string>>;
  sendSms?: () => Promise<void>;
}

export default function ResendAuthNumBtn(props: ResendAuthNumBtnProps) {
  const { setInputActive, setCount, setAuthNum, setResendMessage, sendSms } = props;

  const resendAuthNum = () => {
    setInputActive(true);
    setCount(180);
    setAuthNum("");
    if (sendSms) {
      sendSms();
      setResendMessage("인증번호를 다시 보냈어!");
    }
  };

  // 클릭 시 재전송 post 보내기
  return (
    <St.ButtonWrapper>
      <St.Button type="button" onClick={resendAuthNum}>
        인증번호 재전송
      </St.Button>
    </St.ButtonWrapper>
  );
}
const St = {
  ButtonWrapper: styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;
  `,
  Button: styled.button`
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black20};
    color: ${({ theme }) => theme.colors.black40};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;
  `,
};
