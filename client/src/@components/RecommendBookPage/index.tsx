import { useEffect, useState } from "react";
import styled from "styled-components";

import { emojiList, recommendBookInfoList } from "../../core/bookInfo/bookInfo";
import { Header } from "../@common";
import RecommendLoading from "./RecommendLoading";

export default function RecommendBookPage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <St.RecommendBook>
      <Header />
      <St.Background></St.Background>
      <St.Title>jisu123님의 다음 인생책</St.Title>
      <St.RecommendBookListWrapper>
        {recommendBookInfoList.map((el) => {
          return (
            <St.RecommendBookInfoBox key={el.id} bookId={el.id}>
              <St.EmotionBox bookId={el.id}>
                {el.emotions.map((emo, idx) => {
                  return (
                    <St.EmotionWrapper key={idx}>
                      <St.Emotion src={emojiList[emo.emotionId]} alt="이모지" bookId={el.id} />
                      <St.EmotionNumber bookId={el.id}>{emo.emotionNumber}</St.EmotionNumber>
                    </St.EmotionWrapper>
                  );
                })}
              </St.EmotionBox>
              <St.RecommendBookThumbnail src={el.bookThumbnail} alt="책 표지" bookId={el.id} />
              <St.RecommendBookIntro bookId={el.id}>
                <St.RecommendBookName bookId={el.id}>{el.bookName}</St.RecommendBookName>
                <St.RecommendBookAuthor bookId={el.id}>{el.bookAuthor}</St.RecommendBookAuthor>
              </St.RecommendBookIntro>
            </St.RecommendBookInfoBox>
          );
        })}
      </St.RecommendBookListWrapper>
      {visible && <RecommendLoading />}
    </St.RecommendBook>
  );
}

const St = {
  RecommendBook: styled.section`
    position: relative;
  `,
  Background: styled.div`
    width: 100%;
    height: 32.4rem;
    background-color: ${({ theme }) => theme.colors.lightPurple3};

    position: absolute;
    z-index: -1;
  `,
  Title: styled.h2`
    ${({ theme }) => theme.fonts.bold16};

    margin: 3rem 0 2.8rem 2.7rem;
  `,
  RecommendBookListWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `,
  RecommendBookInfoBox: styled.article<{ bookId: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 4.2rem;
    width: ${({ bookId }) => (bookId === 0 ? "100%" : "fit-content")};
  `,
  EmotionBox: styled.div<{ bookId: number }>`
    background-color: rgb(255, 255, 255, 0.7);

    border: 0.7px solid ${({ theme }) => theme.colors.lightPurple2};
    border-radius: 12px;

    display: flex;
    padding: ${({ bookId }) => (bookId === 0 ? "0.9rem 1.2rem" : "0.8rem 0.9rem")};
    gap: ${({ bookId }) => (bookId === 0 ? "0.6rem" : "0.4rem")};
    width: fit-content;
  `,
  EmotionWrapper: styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Emotion: styled.img<{ bookId: number }>`
    width: ${({ bookId }) => (bookId === 0 ? "1.6rem" : "1.1rem")};
  `,
  EmotionNumber: styled.p<{ bookId: number }>`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme, bookId }) => (bookId === 0 ? theme.fonts.semi8 : theme.fonts.semi6)};
  `,
  RecommendBookThumbnail: styled.img<{ bookId: number }>`
    width: ${({ bookId }) => (bookId === 0 ? "15.5rem" : "9rem")};
    margin: ${({ bookId }) => (bookId === 0 ? "1.6rem 0 2.2rem" : "0.7rem 0 0.7rem")};
  `,
  RecommendBookIntro: styled.div<{ bookId: number }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ bookId }) => (bookId === 0 ? "center" : "start")};
    margin-bottom: ${({ bookId }) => (bookId === 0 ? "0.7rem" : "0.3rem")};
  `,
  RecommendBookName: styled.b<{ bookId: number }>`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme, bookId }) => (bookId === 0 ? theme.fonts.semi14 : theme.fonts.semi10)};
  `,
  RecommendBookAuthor: styled.p<{ bookId: number }>`
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme, bookId }) => (bookId === 0 ? theme.fonts.semi10 : theme.fonts.semi8)};
  `,
};
