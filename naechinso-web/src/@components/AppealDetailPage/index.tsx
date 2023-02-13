import { useEffect, useState } from "react";
import styled from "styled-components";

import { IcAppealDetail } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { FixedHeader, MoveNextPageBtn, TextAreaBox } from "../@common";

export default function AppealDetailPage() {
  const [text, setText] = useState("");
  const [textCheck, setTextCheck] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("appealDetail")) {
      const appealDetail = localStorage.getItem("appealDetail") as string;
      setText(appealDetail);
      setTextCheck(true);
    }
  }, []);

  useEffect(() => {
    handleTextCheck();
  }, [text]);

  const handleTextCheck = () => {
    if (text.length > 19) setTextCheck(true);
    else setTextCheck(false);
  };

  const saveTextInLocal = () => {
    localStorage.setItem("appealDetail", text);
  };

  return (
    <St.AppealDetail>
      <FixedHeader header="추천사" progressRate={75} title1="거의 다 왔어!" title2="내 친구를 한 줄로 소개한다면?" />

      <St.CardWrapper>
        <IcAppealDetail />
      </St.CardWrapper>

      <St.TextWrapper>
        <TextAreaBox
          placeholder="미친듯이 유쾌한 친구야! 함께 있으면 누구보다 행복해질 수 있어!!💕"
          minLength={19}
          maxLength={40}
          text={text}
          setText={setText}
          height={5}
          letterLimit="20자 이상 40자 이내"
        />
      </St.TextWrapper>

      <MoveNextPageBtn
        nextPage={routePaths.DontGo}
        title="완료"
        inputActive={!textCheck}
        handleState={saveTextInLocal}
      />
    </St.AppealDetail>
  );
}

const St = {
  AppealDetail: styled.main`
    padding: 18rem 2rem 0;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 22rem;
    position: absolute;
    top: 17rem;
    left: 0;
    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 30%);
  `,
  TextWrapper: styled.section`
    margin-top: 23.2rem;
  `,
};
