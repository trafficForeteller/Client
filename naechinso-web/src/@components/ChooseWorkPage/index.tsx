import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { FixedHeader } from "../@common";

export default function ChooseWorkPage() {
  const navigate = useNavigate();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/recommender/chooseWork" },
    });
  }, []);

  return (
    <St.ChooseWorkPage>
      <FixedHeader header="추천인 소개" progressRate={50} title1="😎" title2="일을 하고 있어?" />

      <St.ButtonWrapper>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.ChooseJob)}>
          일을 하고 있어
        </St.ChooseWorkButton>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.Edu)}>
          공부 중인 학생이야
        </St.ChooseWorkButton>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.PrepareWork)}>
          일을 쉬고 있어 / 준비 중이야
        </St.ChooseWorkButton>
      </St.ButtonWrapper>
    </St.ChooseWorkPage>
  );
}

const St = {
  ChooseWorkPage: styled.main`
    padding: 19rem 2rem 0;
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
