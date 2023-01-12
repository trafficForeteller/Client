import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn } from "../@common";
import FixedHeader from "../@common/FixedHeader";
import ToggleTipBox from "./ToggleTipBox";

export default function RecommendPage() {
  const [isThreeLine, setIsThreeLine] = useState(false);
  const [textCount, setTextCount] = useState(false);
  const [text, setText] = useState("");
  const location = useLocation();
  const questionData = location.state.state;

  useEffect(() => {
    if (questionData.desc1 === "") setIsThreeLine(false);
    else setIsThreeLine(true);
  }, []);

  useEffect(() => {
    if (text.length >= 200) setTextCount(true);
    else setTextCount(false);
    console.log(text.length);
  }, [text]);

  const countTextLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <St.Recommend>
      <FixedHeader
        header="추천사"
        progressRate={85}
        title1={questionData.desc1}
        title2={questionData.desc2}
        title3={questionData.desc3}
      />
      <ToggleTipBox isThreeLine={isThreeLine} />

      <St.InputBox isThreeLine={isThreeLine}>
        :
        <St.TextArea
          placeholder={questionData.placeholder}
          minLength={199}
          maxLength={399}
          value={text}
          onChange={(e) => countTextLength(e)}
        />
      </St.InputBox>
      <St.TextLength>
        <St.TextCount>{text.length}</St.TextCount>
        /400
      </St.TextLength>

      <MoveNextPageBtn nextPage={routePaths.AppealDetail} title="다음" inputActive={!textCount} />
    </St.Recommend>
  );
}

const St = {
  Recommend: styled.main``,
  InputBox: styled.section<{ isThreeLine: boolean }>`
    width: 31.9rem;
    height: 20rem;
    max-height: auto;
    margin: 0 auto;
    display: flex;
    gap: 0.8rem;
    ${({ theme }) => theme.fonts.sub3}
    color: ${({ theme }) => theme.colors.brown}
  `,
  TextArea: styled.textarea`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 306px;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3}

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray40};
    }
    border: none;
    resize: none;
    &:focus {
      outline: none;
    }
  `,
  TextLength: styled.div`
    margin-top: 0.8rem;
    padding-right: 3.3rem;
    float: right;
    display: flex;
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption5}
  `,
  TextCount: styled.p`
    color: ${({ theme }) => theme.colors.orange};
  `,
};
