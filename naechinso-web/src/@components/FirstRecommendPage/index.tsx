import styled from "styled-components";

import { RecommendBox } from "../@common";

export default function FirstRecommendPage() {
  return (
    <St.FirstRecommendPage>
      <RecommendBox step={0} />
    </St.FirstRecommendPage>
  );
}

const St = {
  FirstRecommendPage: styled.main``,
};
