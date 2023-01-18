import styled from "styled-components";

import { IcCopy, IcKakaotalk } from "../../asset/icons";
import { ImgCommentNaechinso, ImgHandsUp } from "../../asset/image";

export default function MagicFinish() {
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
        <St.CopyLinkBox>
          <St.Label>초대링크</St.Label>
          <St.CopyLinkWrapper>
            https://naechinso.invite/96...
            <IcCopy />
          </St.CopyLinkWrapper>
        </St.CopyLinkBox>
        <St.ShareKakaotalkBtn type="button">
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
  `,
  Naechinso: styled.img`
    width: 12.5rem;
    height: 16.5rem;
    margin-top: 28%;
  `,
  CommentBox: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  `,
  CommentWrapper: styled.article`
    margin-top: 75%;
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
  CopyLinkBox: styled.section`
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
  `,
  Label: styled.label`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.body2};
  `,
  CopyLinkWrapper: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
    display: flex;
    justify-content: center;
    gap: 1.1rem;
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
  `,
};
