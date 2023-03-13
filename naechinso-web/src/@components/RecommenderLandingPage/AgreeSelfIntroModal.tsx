import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgSelfIntroNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";

export default function AgreeSelfIntroModal() {
  const navigate = useNavigate();

  return (
    <St.AgreeSelfIntroModal>
      <St.Naechinso src={ImgSelfIntroNaechinso} alt="내친소" />
      <St.TitleWrapper>
        <St.Title>친구 소개 전에</St.Title>
        <St.Title>
          <St.Highlight>너</St.Highlight>에 대해 먼저 소개해줄래?
        </St.Title>
      </St.TitleWrapper>
      <St.Desc>
        내친소는 신뢰 기반 서비스라서
        <br /> 추천하는 사람의 정보도 받고 있어
      </St.Desc>
      <St.ButtonWrapper>
        <St.Button onClick={() => navigate(routePaths.RecommenderInfo)} type="button">
          그래 좋아!
        </St.Button>
      </St.ButtonWrapper>
    </St.AgreeSelfIntroModal>
  );
}

const St = {
  AgreeSelfIntroModal: styled.section`
    padding: 2.8rem 2rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    width: 31.1rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Naechinso: styled.img`
    width: 9.2rem;
    height: 9.2rem;
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1.8rem 0 0.4rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
    display: flex;
  `,
  Highlight: styled.p`
    color: ${({ theme }) => theme.colors.orange};
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body2};
    margin-bottom: 2.8rem;
  `,
  ButtonWrapper: styled.article``,
  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body3};
    width: 27.1rem;
    height: 4.4rem;
    border-radius: 12px;
  `,
};
