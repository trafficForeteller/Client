import { useEffect, useState } from "react";
import styled from "styled-components";

import { ImgDontGo } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { FixedHeader, MoveNextPageBtn, TextAreaBox } from "../@common";

export default function DontGoPage() {
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
    <St.DontGo>
      <FixedHeader
        header="추천사"
        progressRate={100}
        title1="마지막이야!"
        title2="친구를 거절한 상대방의"
        title3="마음을 돌릴 한마디?"
      />

      <St.CardWrapper>
        <St.CardImg src={ImgDontGo} alt="내친소 추천카드" />
      </St.CardWrapper>

      <TextAreaBox
        placeholder="미친듯이 유쾌한 친구야! 함께 있으면 누구보다 행복해질 수 있어!!💕"
        minLength={19}
        maxLength={199}
        text={text}
        setText={setText}
        height={10.2}
      />

      <MoveNextPageBtn nextPage={routePaths.DontGo} title="완료" inputActive={!textCheck} />
    </St.DontGo>
  );
}

const St = {
  DontGo: styled.main``,
  CardWrapper: styled.section`
    margin-top: 21rem;
    margin-bottom: 3.2rem;
  `,
  CardImg: styled.img`
    width: 37.5rem;
  `,
};
