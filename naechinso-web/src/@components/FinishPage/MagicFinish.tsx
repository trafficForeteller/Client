import { useEffect } from "react";
import styled from "styled-components";

import { IcCopy, IcKakaotalk } from "../../asset/icons";
import { ImgCommentNaechinso, ImgHandsUp } from "../../asset/image";

interface MagicFinishProps {
  handleFinish: () => void;
}

export default function MagicFinish(props: MagicFinishProps) {
  const { handleFinish } = props;

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
        imageUrl: "https://ifh.cc/g/pocbkv.png",
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
    <St.MagicFinish>
      <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
      <St.CommentBox>
        <St.CommentWrapper>
          <St.Comment>추천사 작성이 완료 됐어!</St.Comment>
          <St.Comment>
            친구를 추천해줘서
            <br />
            정말 고마워!💕
          </St.Comment>
          <St.Comment>
            믿고 추천한만큼
            <br />
            내친소도 정말 열심히 할게!
          </St.Comment>
        </St.CommentWrapper>
        <St.Emoji src={ImgHandsUp} alt="손 올리는 아이콘" />
      </St.CommentBox>

      <St.Bottom>
        <St.Title>아래의 링크를 친구에게 전달해봐!</St.Title>
        <St.Desc>링크를 친구에게 전달하면</St.Desc>
        <St.Desc>친구가 자기소개를 할 수 있을거야😗</St.Desc>
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
        <St.NextStepBtn type="button" onClick={() => handleFinish()}>
          완료
        </St.NextStepBtn>
      </St.Bottom>
    </St.MagicFinish>
  );
}

const St = {
  MagicFinish: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};

    display: flex;
    gap: 1.5rem;
    padding-top: 8%;
  `,
  Naechinso: styled.img`
    width: 12.5rem;
    height: 16.5rem;
  `,
  CommentBox: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  `,
  CommentWrapper: styled.article`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  Comment: styled.p`
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem 1.2rem;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3};
    border-radius: 0px 16px 16px 16px;
  `,
  Emoji: styled.img`
    margin-left: 1rem;
    width: 5rem;
    height: 5rem;
  `,
  Bottom: styled.section`
    width: 100%;
    padding: 2.8rem 2rem 3.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px 20px 0px 0px;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
    margin-bottom: 1.2rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body2};
  `,
  CopyLinkBox: styled.button`
    width: 33.5rem;
    height: 8rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1.2rem 1.6rem 1.6rem 1.6rem;
    margin-top: 2.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    border-radius: 16px;

    cursor: pointer;
  `,
  Label: styled.label`
    color: ${({ theme }) => theme.colors.gray40};
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
    width: 33.5rem;
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

    margin-top: 0.8rem;
    margin-bottom: 1.8rem;
  `,

  NextStepBtn: styled.button`
    bottom: 3.5rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
  `,
};
