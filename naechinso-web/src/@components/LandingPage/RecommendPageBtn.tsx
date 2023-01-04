import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface RecommendPageBtnProps {
  nextPage: string;
  title: string;
}

export default function RecommendPageBtn(props: RecommendPageBtnProps) {
  const { nextPage, title } = props;
  const navigate = useNavigate();

  function goNextPage() {
    // 다음페이지로 이동
    navigate(`${nextPage}`);
  }

  return (
    <St.Button onClick={goNextPage} type="button">
      {title}
    </St.Button>
  );
}

const St = {
  Button: styled.button`
    position: absolute;
    bottom: 0rem;
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
