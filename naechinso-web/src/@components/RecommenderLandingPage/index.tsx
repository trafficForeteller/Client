import { useState } from "react";
import styled from "styled-components";

import { ImgCommentNaechinso } from "../../asset/image";
import { RecommendLandingList } from "../../core/recommend/recommend";
import { MoveNextPageBtn } from "../@common";
import AgreeSelfIntroModal from "./AgreeSelfIntroModal";

export default function RecommenderLandingPage() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <St.RecommendLandingPage>
        <St.CommentBox>
          <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
          <St.CommentWrapper>
            <St.Comment>안녕 👋🏻</St.Comment>
            <St.Comment>지인 추천 기반 소개 서비스 내친소야!</St.Comment>
            <St.Comment>어떤 친구를 소개해 줄지</St.Comment>
            <St.Comment>너무 기대된다!</St.Comment>
          </St.CommentWrapper>
        </St.CommentBox>

        <St.Bottom index={0}>
          <St.TitleWrapper>
            <St.Title>
              딱 <St.Highlight>5분</St.Highlight>만 투자해서
            </St.Title>
            <St.Title>소중한 친구를 소개해줘!</St.Title>
          </St.TitleWrapper>

          <St.Desc>
            {RecommendLandingList[0].desc1} <St.Highlight>{RecommendLandingList[0].highlight}</St.Highlight>
          </St.Desc>
          <St.Desc> {RecommendLandingList[0].desc2}</St.Desc>
          <St.Desc> {RecommendLandingList[0].desc3}</St.Desc>
        </St.Bottom>
        <MoveNextPageBtn title="추천사 작성 시작하기" disabled={false} handleState={handleModalOpen} />
      </St.RecommendLandingPage>

      {isModalOpened && (
        <>
          <AgreeSelfIntroModal />
          <St.BackDrop />
        </>
      )}
    </>
  );
}

const St = {
  RecommendLandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    z-index: 2;
    padding-top: 30%;
    @media only screen and (max-height: 680px) {
      padding-top: 8%;
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
    width: 22rem;
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
  Bottom: styled.section<{ index: number }>`
    width: 100%;
    padding-top: 2.8rem;
    height: ${({ index }) => (index === 0 ? "30.4rem" : "28rem")};
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
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 1.2rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body2};
  `,
  Highlight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
  `,
  BackDrop: styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    top: 0;
    left: 0;
  `,
};
