import { useEffect } from "react";
import styled from "styled-components";

import { ImgFinishNone, ImgFinishRecommend, ImgFinishSunguri } from "../../asset/image";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import FinishBottom from "./FinishBottom";

export default function Finish() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(`${process.env.REACT_APP_JS_KEY}`);
    }
  }, []);

  const shareRecommendLink = () => {
    const recommenderName = localStorage.getItem("recommenderName");

    if (navigator.share) {
      navigator
        .share({
          title: `${recommenderName} 친구가 너를 추천했어!`,
          text: `${recommenderName} 친구가 너에 대한 추천사 작성을 완료했어!🎉 
내친소는 너처럼 실제 친구에게 추천을 받은, 주변에서 신뢰받고 애정받은 사람들만 가입할 수 있는 지인소개팅 서비스야! (너는 복받았다! 이런 좋은 친구를 두다니!) 

이제 너가 할 일은 간단한 자기소개만 하면 끝!😎 내친소에서 너만큼 멋진 친구들을 만나러 가볼까?

앱 다운로드: https://recommend.naechinso.com/arrive`,
        })
        .then(() => console.log("공유 성공"))
        .catch((error) => console.log("공유 실패", error));
    } else {
      window.navigator.clipboard.writeText(`${recommenderName} 친구가 너에 대한 추천사 작성을 완료했어!🎉 
내친소는 너처럼 실제 친구에게 추천을 받은, 주변에서 신뢰받고 애정받은 사람들만 가입할 수 있는 지인소개팅 서비스야! (너는 복받았다! 이런 좋은 친구를 두다니!) 
      
이제 너가 할 일은 간단한 자기소개만 하면 끝!😎 내친소에서 너만큼 멋진 친구들을 만나러 가볼까?
      
앱 다운로드: https://recommend.naechinso.com/arrive`);
    }
  };

  return (
    <St.Finish>
      <St.TitleWrapper>
        <St.Title>추천사 너무 좋다😉</St.Title>
        <St.Title>이제 링크를 친구에게 전달해 봐! </St.Title>
      </St.TitleWrapper>
      <St.GiftWrapper>
        {localStorage.getItem("priceType") === "MY_REC" ? (
          <St.Gift src={ImgFinishRecommend} alt="추천사 보기 혜택" />
        ) : localStorage.getItem("priceType") === "SUNGURI" ? (
          <St.Gift src={ImgFinishSunguri} alt="썬구리 혜택" />
        ) : (
          <St.Gift src={ImgFinishNone} alt="혜택 없음" />
        )}
      </St.GiftWrapper>

      <St.ShareBtnWrapper>
        <St.ShareBtnLabel>🔗 친구에게 링크를 보내봐</St.ShareBtnLabel>
        <St.ShareBtn type="button" onClick={shareRecommendLink} className={GTM_CLASS_NAME.viralUrl}>
          초대 링크 공유하기
        </St.ShareBtn>
      </St.ShareBtnWrapper>

      <FinishBottom />
    </St.Finish>
  );
}

const St = {
  Finish: styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 2rem 0;
    @media only screen and (min-height: 680px) {
      padding-top: 30%;
    }
  `,
  TitleWrapper: styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
  `,
  GiftWrapper: styled.section`
    width: 100%;
    height: 13rem;
    background-color: ${({ theme }) => theme.colors.neural};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;

    margin: 2rem 0 1.6rem;
  `,
  Gift: styled.img`
    width: 32.7rem;
    height: 13rem;
  `,
  ShareBtnWrapper: styled.section`
    width: 100%;
    border: 0.5px solid #cccccc;
    border-radius: 16px;
    padding: 1.8rem 1.2rem 1.6rem;
    gap: 1.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ShareBtnLabel: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body2};
  `,
  ShareBtn: styled.button`
    width: 100%;
    height: 5.2rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body1};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
    cursor: pointer;
  `,
};
