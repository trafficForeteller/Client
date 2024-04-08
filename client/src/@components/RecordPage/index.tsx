import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { emojiList } from "../../core/bookInfo/bookInfo";
import { Header } from "../@common";
import BottomSheet from "./BottomSheet";
import TextAreaBox from "./TextAreaBox";

export default function RecordPage() {
  const [selectedEmotion, setSelectedEmotion] = useState<(string | null)[]>([null, null, null]); // selectedEmotion 상태를 useState로 관리합니다.
  const [isSelectedAllEmoticon, setISSelectedEmoticon] = useState(false);
  const [text, setText] = useState("");
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  const location = useLocation();
  const bookInfo = location.state.bookInfo;

  useEffect(() => {
    // selectedEmotion 배열이 변경될 때마다 실행되어 "뿡"을 화면에 보여줍니다.
    if (selectedEmotion.every((emo) => emo !== null)) {
      setISSelectedEmoticon(true);
    } else setISSelectedEmoticon(false);
  }, [selectedEmotion]);

  // 이모지를 선택할 때 실행되는 함수
  const handleEmojiClick = (emoji: string) => {
    // selectedEmotion 배열에서 처음으로 null인 요소에 선택된 이모지를 추가합니다.
    const index = selectedEmotion.findIndex((emo) => emo === null);
    if (index !== -1) {
      const updatedEmotions = [...selectedEmotion];
      updatedEmotions[index] = emoji;
      setSelectedEmotion(updatedEmotions);
    }
  };

  // 선택된 이모지를 제거하는 함수
  const handleSelectedEmotionClick = (index: number) => {
    const updatedEmotions = [...selectedEmotion];
    updatedEmotions.splice(index, 1); // 해당 인덱스의 이모지를 제거합니다.
    updatedEmotions.push(null); // 제거한 자리에 null을 추가하여 배열의 뒷쪽으로 밀어냅니다.
    setSelectedEmotion(updatedEmotions);
  };

  const closeModal = () => setIsBottomSheetOpened(false);

  return (
    <St.Record>
      {/* 뒤로가기 버튼 있어야 함 */}
      <Header />
      <St.BookWrapper>
        <St.BookThumbnail src={bookInfo.bookThumbnail} alt="책 표지" />
        <St.BookName>{bookInfo.bookName}</St.BookName>
        <St.BookAuthor>{bookInfo.bookAuthor}</St.BookAuthor>
      </St.BookWrapper>
      <St.SelectedEmotionWrapper>
        {selectedEmotion.map((emo, idx) =>
          emo ? ( // 선택된 이모지가 있을 경우 해당 이모지를 렌더링합니다.
            <St.SelectedEmotion
              key={idx}
              src={emo}
              alt="선택된 이모지"
              onClick={() => handleSelectedEmotionClick(idx)}
            />
          ) : (
            // 선택된 이모지가 없을 경우 회색 원을 렌더링합니다.
            <St.EmptyEmotion key={idx} />
          ),
        )}
      </St.SelectedEmotionWrapper>
      <St.EmotionBox>
        <St.EmotionDesc>어떤 감정이 들었나요?</St.EmotionDesc>
        {isSelectedAllEmoticon ? (
          <St.TextAreaWrapper>
            <TextAreaBox text={text} setText={setText} />
            <St.RecordBtn type="button" disabled={text.length < 15} onClick={() => setIsBottomSheetOpened(true)}>
              기록하기
            </St.RecordBtn>
          </St.TextAreaWrapper>
        ) : (
          <St.EmotionWrapper>
            {emojiList.map((emo, idx) => {
              return <St.Emotion key={idx} src={emo} alt="이모지" onClick={() => handleEmojiClick(emo)} />;
            })}
          </St.EmotionWrapper>
        )}
      </St.EmotionBox>

      {isBottomSheetOpened && <BottomSheet isBottomSheetOpened={isBottomSheetOpened} closeModal={closeModal} />}
    </St.Record>
  );
}

const St = {
  Record: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4.1rem;
  `,
  BookWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 3.2rem;
  `,
  BookThumbnail: styled.img`
    width: 15.5rem;
    height: 22.1rem;
  `,
  BookName: styled.b`
    ${({ theme }) => theme.fonts.semi14};
    margin: 1.5rem 0 0.7rem;
  `,
  BookAuthor: styled.p`
    ${({ theme }) => theme.fonts.semi10};
    color: ${({ theme }) => theme.colors.gray4};
  `,
  SelectedEmotionWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2.5rem 0;
  `,
  SelectedEmotion: styled.img`
    width: 3.9rem;
    /* 선택된 이모지 스타일 */
  `,
  EmptyEmotion: styled.div`
    width: 3.9rem;
    height: 3.9rem;
    background-color: ${({ theme }) => theme.colors.gray1};
    border-radius: 50%;
  `,
  EmotionBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    width: 100%;
  `,
  EmotionDesc: styled.p`
    ${({ theme }) => theme.fonts.semi14};
  `,
  TextAreaWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    gap: 2.5rem;
  `,
  RecordBtn: styled.button`
    ${({ theme }) => theme.fonts.semi12};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 12px;

    width: 7.7rem;
    height: 4rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.lightPurple3};
    }
  `,
  EmotionWrapper: styled.div`
    display: flex;
    gap: 1.1rem;
    border: 0.7px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 12px;
    padding: 1.4rem 2.7rem;
    width: fit-content;
  `,
  Emotion: styled.img`
    width: 3.9rem;

    cursor: pointer;
  `,
};
