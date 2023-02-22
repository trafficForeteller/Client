import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postRecommendation } from "../../apis/recommend.api";
import { routePaths } from "../../core/routes/path";
import { IPostRecommendQuestion } from "../../types/recommend";
import { FixedHeader, MoveNextPageBtn, TextAreaBox, ToggleTipBox } from "../@common";

export default function FirstRecommendPage() {
  const [textCheck, setTextCheck] = useState(false);
  const [firstRecommend, setFirstRecommend] = useState("");
  const [questionData, setQuestionData] = useState<IPostRecommendQuestion>({
    id: 0,
    icon: "",
    title1: "",
    title2: "",
    question1: "",
    question2: "",
    placeholder: "",
    checked: true,
    disabled: false,
  });
  const [postRecommend, setPostRecommend] = useState({
    recommendQuestions: [
      {
        recommendQuestion: "",
        recommendAnswer: "",
      },
    ],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkedQ1 = parseLocalStorage("checkedQ1");
    setQuestionData(checkedQ1);
    if (localStorage.getItem("firstRecommend")) {
      const recommendInLocal = localStorage.getItem("firstRecommend") as string;
      setFirstRecommend(recommendInLocal);
      setTextCheck(true);
    }
  }, []);

  useEffect(() => {
    handleEnteredText(firstRecommend);
    localStorage.setItem("firstRecommend", firstRecommend);
    setPostRecommend({
      recommendQuestions: [
        {
          recommendQuestion: handleRecommendQuestion(parseLocalStorage("checkedQ1")),
          recommendAnswer: firstRecommend,
        },
      ],
    });
  }, [firstRecommend]);

  const handleEnteredText = (text: string) => {
    // 글자수 확인
    if (text) {
      if (text.length >= 50) setTextCheck(true);
      else setTextCheck(false);
    }
  };

  const parseLocalStorage = (item: string) => {
    //  localStorage에 저장된 친구가 배열 혹은 object일 때 JSON.parse하는 함수
    const itemInLocal = localStorage.getItem(`${item}`) as string;
    const parseItem = JSON.parse(itemInLocal);
    return parseItem;
  };

  const handleRegisterRecommender = async () => {
    // 추천사 등록하기
    await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPostRecommendation,
      handleFailRequest,
    );
  };

  const handleSuccessPostRecommendation = async () => {
    navigate(routePaths.SecondRecommend);
  };

  const handleFailRequest = (errorMessage: string) => {
    //  postRecommendation 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  const handleRecommendQuestion = (recommendQ: IPostRecommendQuestion) => {
    // 질문 공백 없이 합치기
    const recommendQuestion = `${recommendQ.question1}` + `${recommendQ.question2}`;
    return recommendQuestion as string;
  };

  return (
    <St.FirstRecommendPage>
      <FixedHeader header="추천사" progressRate={65} title1={questionData.question1} title2={questionData.question2} />
      <ToggleTipBox />

      <TextAreaBox
        placeholder={questionData.placeholder}
        minLength={49}
        maxLength={150}
        text={firstRecommend}
        setText={setFirstRecommend}
        height={13}
        letterLimit="50자 이상 150자 이내"
      />

      <MoveNextPageBtn title="다음" disabled={!textCheck} handleState={handleRegisterRecommender} />
    </St.FirstRecommendPage>
  );
}

const St = {
  FirstRecommendPage: styled.main`
    padding-top: 19rem;
    padding-left: 2rem;
    padding-right: 2rem;
  `,
};
