import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface RecommendPageBtnProps {
  nextPage: string;
  title: string;
}

export default function RecommendPageBtn(props: RecommendPageBtnProps) {
  const { nextPage, title } = props;
  const navigate = useNavigate();

  const goNextPage = () => {
    // 다음페이지로 이동
    navigate(`${nextPage}`);
  };

  return (
    <St.Button onClick={goNextPage} type="button" title={title}>
      {title}
    </St.Button>
  );
}

const St = {
  Button: styled.button<{ title: string }>`
    padding: 1rem;
    background-color: ${({ theme, title }) => (title === "내친소 시작하기" ? theme.colors.orange : theme.colors.white)};
    border: 1px solid
      ${({ theme, title }) => (title === "내친소 시작하기" ? theme.colors.orange : theme.colors.black20)};
    color: ${({ theme, title }) => (title === "내친소 시작하기" ? theme.colors.white : theme.colors.black40)};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    cursor: pointer;
  `,
};
