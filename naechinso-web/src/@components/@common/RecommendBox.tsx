import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postRecommendation } from "../../apis/recommend.api";
import { questionProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { IPostRecommend } from "../../types/recommend";
import FixedHeader from "./FixedHeader";
import TextAreaBox from "./TextAreaBox";
import ToggleTipBox from "./ToggleTipBox";

export default function RecommendBox() {
  const [isThreeLine, setIsThreeLine] = useState(false);
  const [textCheck, setTextCheck] = useState(false);
  const [text, setText] = useState("");
  const [postRecommend, setPostRecommend] = useState<IPostRecommend>({ recommendQuestion: "", recommendAnswer: "" });
  const [postQuestion, setPostQuestion] = useState("");
  const [questionData, setQuestionData] = useState<questionProps>({
    id: 0,
    icon: "",
    title: "",
    desc1: "",
    desc2: "",
    desc3: "",
    placeholder: "",
    checked: true,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const recommendStep = location.state.state;

  useEffect(() => {
    if (localStorage.getItem("recommendAnswer")) {
      const recommendAnswer = localStorage.getItem("recommendAnswer") as string;
      setText(recommendAnswer);
      setTextCheck(true);
    }
    const checkedQOfLocal = localStorage.getItem("checkedQ") as string;
    const checkedQ = JSON.parse(checkedQOfLocal);
    if (checkedQ) {
      setQuestionData(checkedQ);
      setPostQuestion(`${checkedQ.desc1}` + `${checkedQ.desc2}` + `${checkedQ.desc3}`);

      if (checkedQ.desc1 === "") setIsThreeLine(false);
      else setIsThreeLine(true);
    }
  }, []);

  useEffect(() => {
    setPostRecommend({ ...postRecommend, recommendAnswer: text, recommendQuestion: postQuestion });
    if (text.length >= 100) setTextCheck(true);
    else setTextCheck(false);
  }, [text]);

  const handleRecommend = async () => {
    // 추천사 POST
    navigate(`${routePaths.AppealDetail}`);
    await postRecommendation(postRecommend, localStorage.getItem("accessToken"), localStorage.getItem("uuid"));
    saveTextInLocal();
  };

  const saveTextInLocal = () => {
    localStorage.setItem("recommendAnswer", text);
  };

  return (
    <St.RecommendBox isThreeLine={isThreeLine}>
      <FixedHeader
        header="추천사"
        progressRate={85}
        title1={questionData.desc1}
        title2={questionData.desc2}
        title3={questionData.desc3}
        recommendStep={recommendStep}
      />
      <ToggleTipBox />

      <TextAreaBox
        placeholder={questionData.placeholder}
        minLength={99}
        maxLength={399}
        text={text}
        setText={setText}
        height={13}
      />

      <St.NextBtnWrapper>
        <St.NextStepBtn type="button" disabled={!textCheck} onClick={handleRecommend}>
          다음
        </St.NextStepBtn>
      </St.NextBtnWrapper>
    </St.RecommendBox>
  );
}

const St = {
  RecommendBox: styled.main<{ isThreeLine: boolean }>`
    padding-top: ${({ isThreeLine }) => (isThreeLine ? "25.5rem" : "22.5rem")};
    padding-left: 2rem;
    padding-right: 2rem;
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
