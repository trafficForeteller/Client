import { useEffect } from "react";
import styled from "styled-components";

import { IcCopy, IcFinishNaechinso, IcKakaotalk } from "../../asset/icons";
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
        description: "내 친구가 써준 추천사가 도착했어!",
        imageUrl: "https://naechinso.s3.ap-northeast-2.amazonaws.com/static/letter_chinso.png",
        link: {
          mobileWebUrl: "https://naechinso.page.link/dynamic",
          webUrl: "https://recommend.naechinso.com/arrive",
        },
      },
      buttons: [
        {
          title: "내친소 시작하기",
          link: {
            mobileWebUrl: "https://naechinso.page.link/dynamic",
            webUrl: "https://recommend.naechinso.com/arrive",
          },
        },
      ],
    });
  };

  return (
    <St.Finish>
      <St.TitleWrapper>
        <IcFinishNaechinso />
        <St.Title>추천사 작성이 완료됐어!🙌</St.Title>
      </St.TitleWrapper>
      <St.DescWrapper>
        <St.Desc>아래의 링크를 친구에게 전달해봐!</St.Desc>
        <St.Desc>친구가 자기소개를 할 수 있을 거야.</St.Desc>
      </St.DescWrapper>

      <St.CopyLinkBox type="button" onClick={handleCopyClipBoard}>
        <St.Label>초대링크</St.Label>
        <St.CopyLinkWrapper>
          <St.CopyLink>https://naechinso.page.link...</St.CopyLink>
          <IcCopy />
        </St.CopyLinkWrapper>
      </St.CopyLinkBox>
      <St.ShareKakaotalkBtn type="button" onClick={shareKakaoMessage}>
        <IcKakaotalk />
        카카오톡으로 공유
      </St.ShareKakaotalkBtn>

      <FinishBottom />
    </St.Finish>
  );
}

const St = {
  Finish: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8rem 2rem 0;
  `,
  TitleWrapper: styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
  `,
  DescWrapper: styled.section`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1.6rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body2};
  `,
  CopyLinkBox: styled.button`
    width: 100%;
    height: 8rem;
    background-color: #e5e2da;
    padding: 1.2rem 1.6rem 1.6rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    border-radius: 16px;
    cursor: pointer;
  `,
  Label: styled.label`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body2};
  `,
  CopyLinkWrapper: styled.div`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  CopyLink: styled.p``,
  ShareKakaotalkBtn: styled.button`
    width: 100%;
    height: 5.6rem;
    background-color: #fee500;
    color: #391b1b;
    ${({ theme }) => theme.fonts.sub4};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    border-radius: 16px;
    cursor: pointer;

    margin-top: 1.2rem;
  `,
};
