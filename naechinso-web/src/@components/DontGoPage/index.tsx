import { useEffect, useState } from "react";
import styled from "styled-components";

import { getMemberStatus } from "../../apis/member.api";
import { patchRecommendFriendDetail } from "../../apis/recommend.api";
import { IcDontGo } from "../../asset/icons";
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
  const [joinStatus, setJoinStatus] = useState("");

  useEffect(() => {
    if (localStorage.getItem("dontGo")) {
      const dontGo = localStorage.getItem("dontGo") as string;
      setText(dontGo);
      setTextCheck(true);
    }
  }, []);

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
    await patchRecommendFriendDetail(patchRecommend, localStorage.getItem("accessToken"), localStorage.getItem("uuid"));
    const userData = (await getMemberStatus(localStorage.getItem("accessToken"))) as string;
    setJoinStatus(userData);
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
        <IcDontGo />
      </St.CardWrapper>

      <St.TextWrapper>
        <TextAreaBox
          placeholder="한번만 다시 생각해봐! 일단 내 친구는 만나봐야 얘가 진국인지 아닌지 알 수있기 때문이지! "
          minLength={19}
          maxLength={100}
          text={text}
          setText={setText}
          height={7.8}
        />
      </St.TextWrapper>

      <MoveNextPageBtn
        nextPage={
          (joinStatus && joinStatus === "NEW") || (joinStatus && joinStatus === "NO_BASIC")
            ? routePaths.Finish
            : routePaths.RecommenderLanding
        }
        title="완료"
        inputActive={!textCheck}
        handleState={handleFriendDetail}
      />
    </St.DontGo>
  );
}

const St = {
  DontGo: styled.main`
    padding: 21rem 2rem 0;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 18.6rem;
    position: absolute;
    top: 21rem;
    left: 0;

    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 30%);
  `,
  TextWrapper: styled.section`
    margin-top: 21rem;
  `,
};
