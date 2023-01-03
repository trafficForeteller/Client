import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface NextPageBtnProps {
  nextPage: string;
  title: string;
}

export default function NextPageBtn(props: NextPageBtnProps) {
  const { nextPage, title } = props;
  const navigate = useNavigate();

  function goNextPage() {
    navigate(`${nextPage}`);
  }

  return (
    <St.ButtonWrapper>
      <St.Button onClick={goNextPage}>{title}</St.Button>
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
    bottom: 3.6rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;
  `,
};
