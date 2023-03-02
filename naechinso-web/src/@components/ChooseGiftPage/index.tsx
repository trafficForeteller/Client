import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { FixedHeader } from "../@common";

export default function ChooseGiftPage() {
  const navigate = useNavigate();

  return (
    <St.ChooseGiftPage>
      <FixedHeader
        header="추천인 보상"
        progressRate={98}
        title1="🎁"
        title2="친구를 추천해서"
        title3="받고 싶은 선물은 뭐야?"
      />

      <St.ButtonWrapper>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.Finish)}>
          썬구라 20개
        </St.ChooseWorkButton>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.Finish)}>
          내 추천사 보기
        </St.ChooseWorkButton>
      </St.ButtonWrapper>
    </St.ChooseGiftPage>
  );
}

const St = {
  ChooseGiftPage: styled.main`
    padding: 22rem 2rem 0;
  `,
  ButtonWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  `,
  ChooseWorkButton: styled.button`
    width: 33.5rem;
    height: 7rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.brown};
    ${({ theme }) => theme.fonts.sub2};

    display: flex;
    align-items: center;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
