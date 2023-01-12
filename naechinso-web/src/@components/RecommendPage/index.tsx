import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import FixedHeader from "../@common/FixedHeader";

export default function RecommendPage() {
  const location = useLocation();
  const questionData = location.state.state;

  useEffect(() => {
    console.log(questionData);
  }, []);

  return (
    <St.Recommend>
      <FixedHeader header="추천사" progressRate={80} title1="친구를 잘 설명할 수 있는" title2="질문을 골라 답해줘!" />
    </St.Recommend>
  );
}

const St = {
  Recommend: styled.main``,
};
