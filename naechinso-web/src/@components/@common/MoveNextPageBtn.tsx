import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface NextPageBtnProps {
  nextPage?: string;
  title: string;
  disabled: boolean;
  state?: number;
  handleState?: () => Promise<void> | void;
  className?: string;
  isNoBackground?: boolean;
}

export default function MoveNextPageBtn(props: NextPageBtnProps) {
  const { nextPage, title, disabled, handleState, state, className, isNoBackground } = props;
  const navigate = useNavigate();

  const goNextPage = () => {
    handleState && handleState();
    nextPage && navigate(`${nextPage}`, { state: { state } });
  };

  return (
    <St.ButtonWrapper isNoBackground={isNoBackground === true && isNoBackground}>
      <St.Button onClick={goNextPage} disabled={disabled} type="button" className={className && className}>
        {title}
      </St.Button>
    </St.ButtonWrapper>
  );
}

const St = {
  ButtonWrapper: styled.section<{ isNoBackground: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    height: 8rem;
    z-index: 99;

    background: ${({ isNoBackground }) =>
      isNoBackground ? "" : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%)"};
  `,
  Button: styled.button`
    bottom: 3.2rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 34.3rem;
    height: 4.8rem;
    border-radius: 12px;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
