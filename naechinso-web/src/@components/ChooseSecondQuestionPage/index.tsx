import styled from "styled-components";

import { ChooseQuestion } from "../@common";

export default function ChooseSecondQuestionPage() {
  return (
    <St.ChooseSecondQuestionPage>
      <ChooseQuestion step={1} />
    </St.ChooseSecondQuestionPage>
  );
}

const St = {
  ChooseSecondQuestionPage: styled.main``,
};
