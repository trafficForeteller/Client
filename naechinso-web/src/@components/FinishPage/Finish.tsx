import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgCommentNaechinso, ImgHandsUp } from "../../asset/image";
import { routePaths } from "../../core/routes/path";

export default function Finish() {
  const navigate = useNavigate();

  return (
    <St.Finish>
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
      <St.NextBtnWrapper>
        <St.NextStepBtn type="button" onClick={() => navigate(`${routePaths.Landing}`)}>
          완료
        </St.NextStepBtn>
      </St.NextBtnWrapper>
    </St.Finish>
  );
}

const St = {
  Finish: styled.main`
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
    gap: 3rem;
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
  Emoji: styled.img`
    width: 9rem;
    height: 10rem;
  `,
  NextBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    height: 11rem;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%);
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
