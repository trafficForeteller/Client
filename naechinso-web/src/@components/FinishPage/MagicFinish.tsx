import styled from "styled-components";

import { ImgCommentNaechinso } from "../../asset/image";
import FinishBottom from "./FinishBottom";

export default function MagicFinish() {
  return (
    <St.MagicFinish>
      <St.CommentBox>
        <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
        <St.CommentWrapper>
          <St.Comment>추천사는 제출됐어😊</St.Comment>
          <St.Comment>친구를 추천해줘서</St.Comment>
          <St.Comment>정말 고마워!💕</St.Comment>
          <St.Comment>
            친구의 가입이 승인되면
            <br />
            {localStorage.getItem("priceType") === "SUNGURI" ? "썬구리가 지급될 거야!" : "네 추천사를 볼 수 있어!"}
          </St.Comment>
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
    padding-top: 10%;
    @media only screen and (min-height: 720px) {
      padding-top: 39%;
    }
  `,
  CommentBox: styled.section`
    display: flex;
    gap: 1.5rem;
  `,
  Naechinso: styled.img`
    width: 12.5rem;
    height: 16.5rem;
  `,
  CommentWrapper: styled.article`
    width: 19.4rem;
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
};
