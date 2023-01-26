import styled from "styled-components";

import { ChooseQuestion } from "../@common";

export default function ChooseFirstQuestionPage() {
  return (
    <St.ChooseFirstQuestionPage>
      <ChooseQuestion step={0} />
    </St.ChooseFirstQuestionPage>
  );
}

const St = {
  ChooseFirstQuestionPage: styled.main``,
};
