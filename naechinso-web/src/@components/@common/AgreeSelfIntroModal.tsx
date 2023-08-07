import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgHeartIcon } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { GTM_CLASS_NAME } from "../../util/const/gtm";

export default function AgreeSelfIntroModal() {
  const navigate = useNavigate();

  return (
    <St.AgreeSelfIntroModal>
      <St.HeartIcon src={ImgHeartIcon} alt="두근대는 심장" />
      <St.TitleWrapper>
        <St.Title>친구 소개 전에</St.Title>
        <St.Title>
          <St.Highlight>너에 대해 먼저 </St.Highlight> 소개해줄래?
        </St.Title>
      </St.TitleWrapper>
      <St.Desc>
        내친소는 신뢰 기반 서비스라서
        <br /> 추천하는 사람의 정보도 받고 있어
      </St.Desc>
      <St.Button
        onClick={() => navigate(routePaths.PhoneNum)}
        type="button"
        className={GTM_CLASS_NAME.recommenderAccess}>
        그래 좋아!
      </St.Button>
    </St.AgreeSelfIntroModal>
  );
}

const St = {
  AgreeSelfIntroModal: styled.section`
    z-index: 101;
    padding: 2.8rem 2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    width: 31.1rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  HeartIcon: styled.img`
    width: 9.2rem;
    height: 9.2rem;
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1.2rem 0 0.8rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold_18};
    display: flex;
  `,
  Highlight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    margin-right: 0.4rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.black40};
    ${({ theme }) => theme.fonts.mid_16};
    margin-bottom: 2.8rem;
  `,
  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_14};
    width: 27.1rem;
    height: 4.4rem;
    border-radius: 12px;
  `,
};
