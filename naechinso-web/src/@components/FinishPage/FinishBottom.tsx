import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";

export default function FinishBottom() {
  const navigate = useNavigate();

  return (
    <St.FinishBottom>
      <St.Title>
        <St.HighLight>다른 친구</St.HighLight>도 소개해보는 건 어때?
      </St.Title>
      <St.Title>자기소개는 입력하지 않아도 돼😀</St.Title>
      <St.NextStepBtn type="button" onClick={() => navigate(routePaths.RecommendLanding)}>
        다른친구 소개하러 가기
      </St.NextStepBtn>
      <St.MoveLandingBtn type="button" onClick={() => navigate(routePaths.Landing)}>
        홈 화면으로 이동
      </St.MoveLandingBtn>
    </St.FinishBottom>
  );
}

const St = {
  FinishBottom: styled.footer`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px 20px 0px 0px;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.8rem 2rem 3.6rem;

    width: 37.5rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
  `,
  HighLight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.sub2};
  `,
  NextStepBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 100%;
    height: 5.6rem;
    border-radius: 1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.8rem;
    margin-bottom: 2rem;
  `,
  MoveLandingBtn: styled.button`
    color: ${({ theme }) => theme.colors.gray70};
    ${({ theme }) => theme.fonts.body2};
  `,
};
