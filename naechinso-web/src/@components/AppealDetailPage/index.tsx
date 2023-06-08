import { useEffect, useState } from "react";
import styled from "styled-components";

import { appealDetailList } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import {
  AdressingFixedHeader,
  ConsultantIconBtn,
  ConsultantTextBtn,
  MoveNextPageBtn,
  SelectOneKeyword,
  TextAreaBox,
} from "../@common";

export default function AppealDetailPage() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (localStorage.getItem("appealDetail")) {
      const appealDetail = localStorage.getItem("appealDetail") as string;
      setText(appealDetail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appealDetail", text);
  }, [text]);

  const isButtonDisabled = !text || text.length < 20;

  return (
    <St.AppealDetail>
      <AdressingFixedHeader
        header="추천사"
        navigatePath="/recommend/keyword"
        progressRate={60}
        questionKind="필수질문 2"
        title1="🎈 내 친구는 OO한 친구야!"
      />

      <SelectOneKeyword keywordList={appealDetailList} />
      <ConsultantTextBtn />
      <MoveNextPageBtn nextPage={routePaths.DontGo} title="다음" disabled={isButtonDisabled} />
    </St.AppealDetail>
  );
}

const St = {
  AppealDetail: styled.main`
    padding: 18rem 2rem 15rem;
  `,
};
