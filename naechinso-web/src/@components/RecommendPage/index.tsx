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
    </St.Recommend>
  );
}

const St = {
  Recommend: styled.main``,
};
