import styled from "styled-components";

import { emojiList, recordBookInfoList } from "../../core/bookInfo/bookInfo";

interface BookShelfProps {
  userId: string;
}

export default function BookShelf(props: BookShelfProps) {
  const { userId } = props;

  return (
    <St.BookShelf>
      <St.Title>{userId === "" ? "사람들 책꽂이 구경하기" : "기록 책꽂이 nn개"}</St.Title>
      <St.BookShelfWrapper>
        {recordBookInfoList.map((el) => {
          return (
            <St.BookWrapper key={el.id}>
              <St.BookThumbnail src={el.bookThumbnail} alt="책 표지" />
              <St.BookName>{el.bookName}</St.BookName>
              <St.EmotionBox>
                {el.emotions.map((emo, idx) => {
                  return (
                    <St.EmotionWrapper key={idx}>
                      <St.Emotion src={emojiList[emo.emotionId]} alt="이모지" />
                      <St.EmotionNumber>{emo.emotionNumber}</St.EmotionNumber>
                    </St.EmotionWrapper>
                  );
                })}
              </St.EmotionBox>
            </St.BookWrapper>
          );
        })}
      </St.BookShelfWrapper>
    </St.BookShelf>
  );
}

const St = {
  BookShelf: styled.div``,
  Title: styled.h2`
    width: 100%;
    ${({ theme }) => theme.fonts.semi12};
    border-bottom: 1px solid #eaecec;

    padding: 6.2rem 2.5rem 1.6rem;
  `,
  BookShelfWrapper: styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2.2rem 3.1rem;
  `,
  BookWrapper: styled.span`
    display: flex;
    flex-direction: column;
  `,
  BookThumbnail: styled.img`
    width: 9rem;
    height: 12.8rem;
  `,
  BookName: styled.b`
    ${({ theme }) => theme.fonts.semi12};
    margin: 1.1rem 0 0.8rem;
    width: 9rem;
  `,
  EmotionBox: styled.div`
    display: flex;
    gap: 0.3rem;
  `,
  EmotionWrapper: styled.span`
    display: flex;
    gap: 0.3rem;
    border: 0.7px solid ${({ theme }) => theme.colors.lightPurple2};
    border-radius: 12px;
    padding: 0.4rem 0.7rem;
  `,
  Emotion: styled.img`
    width: 1.1rem;
  `,
  EmotionNumber: styled.p`
    ${({ theme }) => theme.fonts.semi8};
    color: ${({ theme }) => theme.colors.gray4};
  `,
};
