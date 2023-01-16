import styled from "styled-components";

import { FixedHeader, ShortInputBox } from "../@common";

export default function SchoolPage() {
  return (
    <St.StudentPage>
      <FixedHeader header="추천인 소개" progressRate={60} title1="🏫" title2="학교는 어디 다녀?" />
    </St.StudentPage>
  );
}

const St = {
  StudentPage: styled.main``,
};
