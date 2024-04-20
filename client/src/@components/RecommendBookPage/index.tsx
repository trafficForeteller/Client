import { useEffect, useState } from "react";
import styled from "styled-components";

import { getLifeBook } from "../../apis/book.api";
import { emojiList } from "../../core/bookInfo/bookInfo";
import { IGetLifeBookData } from "../../types/book";
import { Header } from "../@common";
import LoadingBox from "../@common/LoadingBox";

export default function RecommendBookPage() {
  const [visible, setVisible] = useState(true);
  const [lifeBookList, setLifeBookList] = useState<IGetLifeBookData[] | null>(null);

  useEffect(() => {
    getLifeBook(handleSuccessGetLifeBook, handleFailGetLifeBook);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleSuccessGetLifeBook = (lifeBookData: IGetLifeBookData[]) => {
    setLifeBookList(lifeBookData);
  };

  const handleFailGetLifeBook = (errorMessage: string) => {
    console.log(errorMessage);
  };

  return (
    <St.RecommendBook>
      <Header />
      {visible ? (
        <LoadingBox />
      ) : (
        <>
          <St.Background></St.Background>
          <St.Title>{localStorage.getItem("userId")}님의 다음 인생책</St.Title>
          <St.RecommendBookListWrapper>
            {lifeBookList !== null &&
              lifeBookList.map((el, idx) => {
                return (
                  <St.RecommendBookInfoBox key={idx} bookId={idx}>
                    <St.EmotionBox bookId={idx}>
                      {el.emotion.map((emo, idx) => {
                        return (
                          <St.EmotionWrapper key={idx}>
                            <St.Emotion src={emojiList[emo.emotionId]} alt="이모지" bookId={idx} />
                            <St.EmotionNumber bookId={idx}>{emo.emotionNumber}</St.EmotionNumber>
                          </St.EmotionWrapper>
                        );
                      })}
                    </St.EmotionBox>
                    <St.RecommendBookThumbnail src={el.thumbnail} alt="책 표지" bookId={idx} />
                    <St.RecommendBookIntro bookId={idx}>
                      <St.RecommendBookName bookId={idx}>{el.title}</St.RecommendBookName>
                      <St.RecommendBookAuthor bookId={idx}>{el.authors}</St.RecommendBookAuthor>
                    </St.RecommendBookIntro>
                  </St.RecommendBookInfoBox>
                );
              })}
          </St.RecommendBookListWrapper>
        </>
      )}
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
