import styled from "styled-components";

import { Header } from "../@common";
import RecommendLoading from "./RecommendLoading";

export default function RecommendBook() {
  return (
    <St.RecommendBook>
      <Header />
      <St.RecommendLoadingWrapper>
        <RecommendLoading />
      </St.RecommendLoadingWrapper>
    </St.RecommendBook>
  );
}

const St = {
  RecommendBook: styled.section``,
  RecommendLoadingWrapper: styled.div``,
};
