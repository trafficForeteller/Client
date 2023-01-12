import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { questionProps } from "../../core/recommend/recommend";
export interface NextPageBtnProps {
  nextPage: string;
  title: string;
  inputActive: boolean;
  sendSms?: () => Promise<void>;
  correctAuthNum?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  state?: questionProps;
}

export default function MoveNextPageBtn(props: NextPageBtnProps) {
  const { nextPage, title, inputActive, sendSms, state } = props;
  const navigate = useNavigate();

  const goNextPage = () => {
    if (sendSms) sendSms();
    navigate(`${nextPage}`, { state: { state } });
  };

  return (
    <St.ButtonWrapper>
      <St.Button onClick={goNextPage} disabled={inputActive} type="button">
        {title}
      </St.Button>
    </St.ButtonWrapper>
  );
}

const St = {
  ButtonWrapper: styled.section`
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
  `,
  Button: styled.button`
    margin: 0 auto;
    position: fixed;
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
