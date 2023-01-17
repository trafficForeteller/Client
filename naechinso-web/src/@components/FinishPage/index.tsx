import styled from "styled-components";

import { ImgCommentNaechinso, ImgHandsUp } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn } from "../@common";

export default function FinishPage() {
  return (
    <St.FinishPage>
      <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
      <St.CommentBox>
        <St.CommentWrapper>
          <St.Comment>추천사 작성이 완료 됐어!</St.Comment>
          <St.Comment>친구를 추천해줘서</St.Comment>
          <St.Comment>정말 고마워!💕</St.Comment>
          <St.Comment>
            믿고 추천한만큼
            <br />
            내친소도 정말 열심히 할게!
          </St.Comment>
        </St.CommentWrapper>

        <St.Emoji src={ImgHandsUp} alt="손 올리는 아이콘" />
      </St.CommentBox>

      <MoveNextPageBtn nextPage={routePaths.FriendInfo} title="완료" inputActive={false} />
    </St.FinishPage>
  );
}

const St = {
  FinishPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};

    display: flex;
    gap: 1.5rem;
  `,
  Naechinso: styled.img`
    width: 12.5rem;
    height: 16.5rem;
    margin-top: 40%;
  `,
  CommentBox: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `,
  CommentWrapper: styled.article`
    margin-top: 110%;
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
    width: 9rem;
    height: 10rem;
  `,
};
