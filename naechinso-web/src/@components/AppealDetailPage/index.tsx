import { useEffect, useState } from "react";
import styled from "styled-components";

import { ImgAppealDetail } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { FixedHeader, MoveNextPageBtn, TextAreaBox } from "../@common";

export default function AppealDetailPage() {
  const [text, setText] = useState("");
  const [textCheck, setTextCheck] = useState(false);

  useEffect(() => {
    handleTextCheck();
  }, [text]);

  const handleTextCheck = () => {
    if (text.length > 19) setTextCheck(true);
    else setTextCheck(false);
  };

  return (
    <St.AppealDetail>
      <FixedHeader header="추천사" progressRate={92} title1="거의 다 왔어!" title2="내 친구를 한줄로 소개한다면?" />

      <St.CardWrapper>
        <St.CardImg src={ImgAppealDetail} alt="내친소 추천카드" />
      </St.CardWrapper>

      <TextAreaBox
        placeholder="미친듯이 유쾌한 친구야! 함께 있으면 누구보다 행복해질 수 있어!!💕"
        minLength={19}
        maxLength={39}
        text={text}
        setText={setText}
        height={6}
      />

      <MoveNextPageBtn nextPage={routePaths.DontGo} title="완료" inputActive={!textCheck} />
    </St.AppealDetail>
  );
}

const St = {
  AppealDetail: styled.main``,
  CardWrapper: styled.section`
    margin-top: 18rem;
    margin-bottom: 3.2rem;
  `,
  CardImg: styled.img`
    width: 37.5rem;
  `,
};
