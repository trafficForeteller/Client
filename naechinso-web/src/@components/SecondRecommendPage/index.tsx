import styled from "styled-components";

import { RecommendBox } from "../@common";

export default function SecondRecommendPage() {
  return (
    <St.SecondRecommendPage>
      <RecommendBox step={1} />
    </St.SecondRecommendPage>
  );
}

const St = {
  SecondRecommendPage: styled.main``,
};
