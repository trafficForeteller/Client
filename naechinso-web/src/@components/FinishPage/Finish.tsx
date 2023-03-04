import { useEffect } from "react";
import styled from "styled-components";

import { IcFinishSunguri } from "../../asset/icons";
import FinishBottom from "./FinishBottom";

export default function Finish() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(`${process.env.REACT_APP_JS_KEY}`);
    }
  }, []);

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText("https://naechinso.page.link/dynamic");
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  const shareKakaoMessage = () => {
    // 카카오톡 메시지 공유하기
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "내친소 자기소개 쓰러 갈래?",
        description: "내 친구가 작성한 추천사가 도착했어!🎉",
        imageUrl: "https://naechinso.s3.ap-northeast-2.amazonaws.com/static/letter_chinso.png",
        link: {
          mobileWebUrl: "https://recommend.naechinso.com/arrive",
          webUrl: "https://recommend.naechinso.com/arrive",
        },
      },
      buttons: [
        {
          title: "내친소 시작하기",
          link: {
            mobileWebUrl: "https://recommend.naechinso.com/arrive",
            webUrl: "https://recommend.naechinso.com/arrive",
          },
        },
      ],
    });
  };

  return (
    <St.Finish>
      <St.TitleWrapper>
        <St.Title>추천사 너무 좋다😉</St.Title>
        <St.Title>이제 링크를 친구에게 전달해 봐! </St.Title>
      </St.TitleWrapper>
      <St.ImgWrapper>
        <IcFinishSunguri />
      </St.ImgWrapper>

      <St.ShareBtnWrapper>
        <St.ShareBtnLabel> 🔗 친구에게 링크를 보내봐</St.ShareBtnLabel>
        <St.ShareBtn type="button" onClick={shareKakaoMessage}>
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
  ImgWrapper: styled.section`
    width: 100%;
    height: 13rem;
    background-color: ${({ theme }) => theme.colors.neural};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;

    margin: 2rem 0 1.6rem;
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
