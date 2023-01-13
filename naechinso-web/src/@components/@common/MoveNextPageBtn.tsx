import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { questionProps } from "../../core/recommend/recommend";
export interface NextPageBtnProps {
  nextPage: string;
  title: string;
  inputActive: boolean;
  state?: questionProps;
  handleState?: () => Promise<void>;
}

export default function MoveNextPageBtn(props: NextPageBtnProps) {
  const { nextPage, title, inputActive, handleState, state } = props;
  const navigate = useNavigate();

  const goNextPage = () => {
    handleState && handleState();
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
