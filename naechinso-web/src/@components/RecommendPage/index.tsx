import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { postRecommendation } from "../../apis/recommend.api";
import { routePaths } from "../../core/routes/path";
import { IPostRecommend } from "../../types/recommend";
import { MoveNextPageBtn } from "../@common";
import FixedHeader from "../@common/FixedHeader";
import ToggleTipBox from "./ToggleTipBox";

export default function RecommendPage() {
  const [isThreeLine, setIsThreeLine] = useState(false);
  const [textCount, setTextCount] = useState(false);
  const [text, setText] = useState("");
  const [postRecommend, setPostRecommend] = useState<IPostRecommend>({ recommendQuestion: "", recommendAnswer: "" });

  const location = useLocation();
  const questionData = location.state.state;

  useEffect(() => {
    if (questionData.desc1 === "") setIsThreeLine(false);
    else setIsThreeLine(true);
  }, []);

  useEffect(() => {
    if (text.length >= 200) setTextCount(true);
    else setTextCount(false);
  }, [text]);

  const countTextLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePostRecommend = () => {
    setPostRecommend({ recommendQuestion: questionData.question, recommendAnswer: text });
    postRecommend && handleRecommend();
  };

  const handleRecommend = async () => {
    // 추천사 POST
    const userData = await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
    );
    console.log(userData);
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

      <St.InputBox>
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

      <St.NextBtnWrapper onClick={handlePostRecommend}>
        <St.NextStepBtn type="button" disabled={!textCount} onClick={handlePostRecommend}>
          다음
        </St.NextStepBtn>
      </St.NextBtnWrapper>
    </St.Recommend>
  );
}

const St = {
  Recommend: styled.main``,
  InputBox: styled.section`
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
    border: none;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray40};
    }
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
