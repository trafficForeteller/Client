import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postRecommendation } from "../../apis/recommend.api";
import { questionProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { IPostRecommend } from "../../types/recommend";
import FixedHeader from "./FixedHeader";
import TextAreaBox from "./TextAreaBox";
import ToggleTipBox from "./ToggleTipBox";

export interface RecommendBoxProps {
  step: number;
}

export default function RecommendBox(props: RecommendBoxProps) {
  const { step } = props;

  const [isThreeLine, setIsThreeLine] = useState(false);
  const [textCheck, setTextCheck] = useState(false);
  const [firstRecommend, setFirstRecommend] = useState("");
  const [secondRecommend, setSecondRecommend] = useState("");
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
    disabled: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const checkedQ1 = parseLocalStorage("checkedQ1");
    const checkedQ2 = parseLocalStorage("checkedQ2");
    if (step === 0) {
      handleCheckedQuestion(checkedQ1);
      if (localStorage.getItem("firstRecommend")) {
        const recommendInLocal = localStorage.getItem("firstRecommend") as string;
        setFirstRecommend(recommendInLocal);
        setTextCheck(true);
      }
    } else if (step === 1) {
      handleCheckedQuestion(checkedQ2);
      if (localStorage.getItem("secondRecommend")) {
        const recommendInLocal = localStorage.getItem("secondRecommend") as string;
        setSecondRecommend(recommendInLocal);
        setTextCheck(true);
      }
    }
  }, []);

  const handleCheckedQuestion = (checkedQ: questionProps) => {
    // step에 따른 setQuestionData,  setPostQuestion변화
    setQuestionData(checkedQ);
    setPostQuestion(`${checkedQ.desc1}` + `${checkedQ.desc2}` + `${checkedQ.desc3}`);
    if (checkedQ.desc1 === "") setIsThreeLine(false);
    else setIsThreeLine(true);
  };

  useEffect(() => {
    if (step === 0) handleEnteredText(firstRecommend);
    else if (step === 1) handleEnteredText(secondRecommend);
  }, [firstRecommend, secondRecommend]);

  const handleEnteredText = (text: string) => {
    // text 넣어 Post 및 글자수 확인
    setPostRecommend({ ...postRecommend, recommendAnswer: text, recommendQuestion: postQuestion });
    if (text) {
      if (text.length >= 100) setTextCheck(true);
      else setTextCheck(false);
    }
  };

  const handleRecommend = async () => {
    // 추천사 POST && step에 따라 다른 페이지 이동
    if (step === 0) navigate(`${routePaths.ChooseSecondQuestion}`);
    else if (step === 1) navigate(`${routePaths.AppealDetail}`);
    await postRecommendation(postRecommend, localStorage.getItem("accessToken"), localStorage.getItem("uuid"));
    saveTextInLocal();
  };

  const saveTextInLocal = () => {
    if (step === 0) localStorage.setItem("firstRecommend", firstRecommend);
    else if (step === 1) localStorage.setItem("secondRecommend", secondRecommend);
  };

  const parseLocalStorage = (item: string) => {
    //  localStorage에 저장된 친구가 배열 혹은 object일 때 JSON.parse하는 함수
    const itemInLocal = localStorage.getItem(`${item}`) as string;
    const parseItem = JSON.parse(itemInLocal);
    return parseItem;
  };

  return (
    <St.RecommendBox isThreeLine={isThreeLine}>
      <FixedHeader
        header="추천사"
        progressRate={85}
        title1={questionData.desc1}
        title2={questionData.desc2}
        title3={questionData.desc3}
        step={step}
      />
      <ToggleTipBox />

      <TextAreaBox
        placeholder={questionData.placeholder}
        minLength={99}
        maxLength={399}
        text={step === 0 ? firstRecommend : secondRecommend}
        setText={step === 0 ? setFirstRecommend : setSecondRecommend}
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
    padding-top: ${({ isThreeLine }) => (isThreeLine ? "25rem" : "22rem")};
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
