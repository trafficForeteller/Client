import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ITokenType } from "../../types/member";

export interface NextPageBtnProps {
  nextPage: string;
  title: string;
  inputActive: boolean;
  sendSms?: () => Promise<void>;
  correctAuthNum?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  state?: ITokenType;
}

export default function MoveNextPageBtn(props: NextPageBtnProps) {
  const { nextPage, title, inputActive, sendSms, state } = props;
  const navigate = useNavigate();

  const goNextPage = () => {
    if (sendSms) sendSms();
    navigate(`${nextPage}`, { state: { state: `${state}` } });
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
  `,
  Button: styled.button`
    position: absolute;
    bottom: 3.5rem;
    padding: 1rem;

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
