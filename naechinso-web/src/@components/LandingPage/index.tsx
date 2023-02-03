import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcAppStore, IcPlayStore } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { LandingBox } from "../@common";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <St.LandingPage>
      <LandingBox />
      <St.Bottom>
        <St.DescWrapper>
          <St.Line></St.Line>
          <St.Desc>내친소를 시작하고 싶다면?</St.Desc>
          <St.Line></St.Line>
        </St.DescWrapper>
        <St.InstallBtnWrapper>
          <St.InstallBtn type="button" onClick={() => navigate(routePaths.InstallApp)}>
            <IcPlayStore />
          </St.InstallBtn>
          <St.InstallBtn type="button" onClick={() => navigate(routePaths.InstallApp)}>
            <IcAppStore />
          </St.InstallBtn>
        </St.InstallBtnWrapper>
      </St.Bottom>
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 35%;
  `,
  Bottom: styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 6.3rem;

    position: absolute;
    bottom: 0;
  `,
  DescWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  `,
  Line: styled.div`
    border: 1px solid ${({ theme }) => theme.colors.gray30};
    width: 23%;
    height: 1px;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body7};
    width: 14.7rem;
  `,

  InstallBtnWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.8rem;
  `,
  InstallBtn: styled.button`
    width: 16rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.colors.gray80};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
