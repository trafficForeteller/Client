import styled from "styled-components";

import { ImgCommentNaechinso } from "../../asset/image";
import FinishBottom from "./FinishBottom";

export default function EditFinish() {
  return (
    <St.EditFinish>
      <St.CommentBox>
        <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
        <St.CommentWrapper>
          <St.Comment>
            {localStorage.getItem("landingUrl") === "edit" ? "네 소개 잘 받았어" : "소속인증 잘 받았어"}😊
          </St.Comment>
          <St.Comment>친구가 가입하면</St.Comment>
          <St.Comment>
            추천사와 함께 <br /> 썬구리도 선물할게😎
          </St.Comment>
          <St.Comment>
            좋은 친구 추천해줘서
            <br />
            너무 고마워!!💕
          </St.Comment>
        </St.CommentWrapper>
      </St.CommentBox>

      <FinishBottom />
    </St.EditFinish>
  );
}

const St = {
  EditFinish: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 10%;
    @media only screen and (min-height: 720px) {
      padding-top: 30%;
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
