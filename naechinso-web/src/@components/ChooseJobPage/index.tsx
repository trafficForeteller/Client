import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { FixedHeader } from "../@common";

export default function ChooseJobPage() {
  const navigate = useNavigate();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/recommender/chooseJob" },
    });
  }, []);

  return (
    <St.ChooseJobPage>
      <FixedHeader header="추천인 소개" progressRate={50} title1="💼" title2="어떤 일을 해?" />

      <St.ButtonWrapper>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.Job)}>
          직장인이야
        </St.ChooseWorkButton>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.Freelance)}>
          프리랜서야
        </St.ChooseWorkButton>
        <St.ChooseWorkButton type="button" onClick={() => navigate(routePaths.SelfEmployed)}>
          자영업자야
        </St.ChooseWorkButton>
      </St.ButtonWrapper>
    </St.ChooseJobPage>
  );
}

const St = {
  ChooseJobPage: styled.main`
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
