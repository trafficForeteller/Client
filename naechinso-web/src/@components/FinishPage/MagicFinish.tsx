import { useEffect } from "react";
import styled from "styled-components";

import { IcCopy, IcKakaotalk } from "../../asset/icons";
import { ImgCommentNaechinso, ImgHandsUp } from "../../asset/image";

export default function MagicFinish() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(`${process.env.REACT_APP_JS_KEY}`);
      console.log(window.Kakao.isInitialized());
    }
  }, []);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
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
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl: "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      itemContent: {
        profileText: "Kakao",
        profileImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageText: "Cheese cake",
        titleImageCategory: "Cake",
        items: [
          {
            item: "Cake1",
            itemOp: "1000원",
          },
          {
            item: "Cake2",
            itemOp: "2000원",
          },
          {
            item: "Cake3",
            itemOp: "3000원",
          },
          {
            item: "Cake4",
            itemOp: "4000원",
          },
          {
            item: "Cake5",
            itemOp: "5000원",
          },
        ],
        sum: "총 결제금액",
        sumOp: "15000원",
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        {
          title: "앱으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
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
        <St.CopyLinkBox type="button" onClick={() => handleCopyClipBoard("https://naechinso.invite/96...")}>
          <St.Label>초대링크</St.Label>
          <St.CopyLinkWrapper>
            https://naechinso.invite/96...
            <IcCopy />
          </St.CopyLinkWrapper>
        </St.CopyLinkBox>
        <St.ShareKakaotalkBtn type="button" onClick={shareKakaoMessage}>
          <IcKakaotalk />
          카카오톡으로 공유
        </St.ShareKakaotalkBtn>
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
    width: 37.5rem;
    padding-top: 2.8rem;
    height: 33.8rem;
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
    width: 33.1rem;
    height: 8rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1.2rem 1.6rem 1.6rem 1.6rem;
    margin-top: 2.8rem;
    margin-bottom: 1.2rem;
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
  CopyLinkWrapper: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
    display: flex;
    gap: 3rem;
  `,
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
  `,
};
