import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import FixedHeader from "../@common/FixedHeader";
import ToggleTipBox from "./ToggleTipBox";

export default function RecommendPage() {
  const [isThreeLine, setIsThreeLine] = useState(false);
  const location = useLocation();
  const questionData = location.state.state;

  useEffect(() => {
    console.log(questionData);
    if (questionData.desc1 === "") setIsThreeLine(false);
    else setIsThreeLine(true);
  }, []);

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
        <St.TextArea placeholder={questionData.placeholder} />
      </St.InputBox>
    </St.Recommend>
  );
}

const St = {
  Recommend: styled.main``,
  InputBox: styled.section<{ isThreeLine: boolean }>`
    width: 31.9rem;
    /* min-height: 13rem; */
    height: 20rem;

    margin: ${({ isThreeLine }) => (isThreeLine ? "0rem" : "19rem")} auto 3.2rem;

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
};
