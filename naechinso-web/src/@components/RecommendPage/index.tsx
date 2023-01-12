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
      <FixedHeader
        header="추천사"
        progressRate={85}
        title1={questionData.desc1}
        title2={questionData.desc2}
        title3={questionData.desc3}
      />
    </St.Recommend>
  );
}

const St = {
  Recommend: styled.main``,
};
