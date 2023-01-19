import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { FixedHeader } from "../@common";

export default function ChooseWorkPage() {
  const navigate = useNavigate();

  return (
    <St.ChooseWork>
      <FixedHeader header="추천인 소개" progressRate={50} title1="😎" title2="혹시 일을 하고 있어?" />

      <St.ButtonWrapper>
        <St.ChooseWorkButton type="button" onClick={() => navigate(`${routePaths.Job}`)}>
          응, 일을 하고 있어
        </St.ChooseWorkButton>
        <St.ChooseWorkButton type="button" onClick={() => navigate(`${routePaths.Edu}`)}>
          아니, 아직 공부 중인 학생이야
        </St.ChooseWorkButton>
      </St.ButtonWrapper>
    </St.ChooseWork>
  );
}

const St = {
  ChooseWork: styled.main`
    padding: 19rem 2rem 0;
  `,
  ButtonWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  `,
  ChooseWorkButton: styled.button`
    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.brown};
    ${({ theme }) => theme.fonts.sub2};

    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
