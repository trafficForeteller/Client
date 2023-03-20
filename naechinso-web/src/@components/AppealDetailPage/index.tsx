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
    localStorage.setItem("appealDetail", text);
  }, [text]);

  const handleTextCheck = () => {
    if (text.length > 19) setTextCheck(true);
    else setTextCheck(false);
  };

  return (
    <St.AppealDetail>
      <FixedHeader
        header="추천사"
        progressRate={75}
        title1="추천사 완성 30초 전 🎉"
        title2="내 친구를 한 줄로 소개한다면?"
      />

      <St.CardWrapper>
        <IcAppealDetail aria-label="한 줄 소개 미리보기" />
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

      <MoveNextPageBtn nextPage={routePaths.DontGo} title="다음" disabled={!textCheck} />
    </St.AppealDetail>
  );
}

const St = {
  AppealDetail: styled.main`
    padding-top: 18rem;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 22rem;
    position: absolute;
    top: 17rem;
    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 10%);
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TextWrapper: styled.section`
    margin-top: 23.2rem;
    padding: 0 2rem;
  `,
};
