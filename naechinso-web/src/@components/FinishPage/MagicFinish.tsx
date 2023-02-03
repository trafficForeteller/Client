import styled from "styled-components";

import { ImgCommentNaechinso } from "../../asset/image";
import FinishBottom from "./FinishBottom";

export default function MagicFinish() {
  return (
    <St.MagicFinish>
      <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
      <St.CommentBox>
        <St.CommentWrapper>
          <St.Comment>추천사 작성이 완료 됐어!</St.Comment>
          <St.Comment>친구를 추천해줘서 고마워!💕</St.Comment>
          <St.Comment>
            <St.Highlight>또 다른 친구</St.Highlight>를 소개하는 건
            <br />
            훨씬 간단해!
          </St.Comment>
          <St.Comment>다른 친구도 소개할래?🙌</St.Comment>
        </St.CommentWrapper>
      </St.CommentBox>

      <FinishBottom />
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
    padding-top: 20%;
  `,
  Naechinso: styled.img`
    width: 12.5rem;
    height: 16.5rem;
  `,
  CommentBox: styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.1rem;
  `,
  CommentWrapper: styled.article`
    margin-top: 20%;
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
  Highlight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.sub3};
  `,
};
