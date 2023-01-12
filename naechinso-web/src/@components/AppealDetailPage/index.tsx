import { useState } from "react";
import styled from "styled-components";

import { FixedHeader, TextAreaBox } from "../@common";
export default function AppealDetailPage() {
  const [text, setText] = useState("");

  return (
    <St.AppealDetail>
      <FixedHeader header="추천사" progressRate={85} title1="거의 다 왔어!" title2="내 친구를 한줄로 소개한다면?" />

      <St.CardWrapper></St.CardWrapper>

      <TextAreaBox
        placeholder="미친듯이 유쾌한 친구야! 함께 있으면 누구보다 행복해질 수 있어!!💕"
        minLength={19}
        maxLength={40}
        text={text}
        setText={setText}
        height={6}
      />
    </St.AppealDetail>
  );
}

const St = {
  AppealDetail: styled.main``,
  CardWrapper: styled.section`
    height: 20rem;
  `,
};
