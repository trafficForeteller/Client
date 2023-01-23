import styled from "styled-components";

export interface ResendAuthNumBtnProps {
  resendAuthNum: () => void;
  inputActive: boolean;
}

export default function ResendAuthNumBtn(props: ResendAuthNumBtnProps) {
  const { resendAuthNum, inputActive } = props;

  // 클릭 시 재전송 post 보내기
  return (
    <St.ButtonWrapper inputActive={inputActive}>
      <St.Button type="button" onClick={resendAuthNum}>
        인증번호 재전송
      </St.Button>
    </St.ButtonWrapper>
  );
}
const St = {
  ButtonWrapper: styled.section<{ inputActive: boolean }>`
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;

    width: 100%;
    z-index: ${({ inputActive }) => (inputActive ? "" : "-1")};
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
