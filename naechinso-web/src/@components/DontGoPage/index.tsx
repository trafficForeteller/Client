import { useEffect, useState } from "react";
import styled from "styled-components";

import { patchRecommendFriendDetail } from "../../apis/recommend.api";
import { ImgDontGo } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { IPatchFriendDetail } from "../../types/recommend";
import { FixedHeader, MoveNextPageBtn, TextAreaBox } from "../@common";

export default function DontGoPage() {
  const [text, setText] = useState("");
  const [textCheck, setTextCheck] = useState(false);
  const [patchRecommend, setPatchRecommend] = useState<IPatchFriendDetail>({
    appealDetail: "",
    appeals: [],
    dontGo: "",
  });

  useEffect(() => {
    handleTextCheck();
    localStorage.setItem("dontGo", text);
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: localStorage.getItem("appealDetail"),
      appeals: JSON.parse(localStorage.getItem("appeals") || "[]"),
      dontGo: localStorage.getItem("dontGo"),
    });
  }, [text]);

  const handleFriendDetail = async () => {
    const userData = await patchRecommendFriendDetail(
      patchRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
    );
    console.log("돈고", userData);
  };

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
        placeholder="한번만 다시 생각해봐! 일단 내 친구는 만나봐야 얘가 진국인지 아닌지 알 수있기 때문이지! "
        minLength={19}
        maxLength={199}
        text={text}
        setText={setText}
        height={10.2}
      />

      <MoveNextPageBtn
        nextPage={routePaths.RecommenderInfo}
        title="완료"
        inputActive={!textCheck}
        handleState={handleFriendDetail}
      />
    </St.DontGo>
  );
}

const St = {
  DontGo: styled.main``,
  CardWrapper: styled.section`
    margin-top: 21rem;
    margin-bottom: 3.2rem;
    height: 18.6rem;
    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 30%);
  `,
  CardImg: styled.img`
    width: 37.5rem;
  `,
};
