import { useEffect, useState } from "react";
import styled from "styled-components";

import { friendLoverTypeList } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { AdressingFixedHeader, ConsultantTextBtn, MoveNextPageBtn, SelectOneKeyword } from "../@common";

export default function FriendLoverTypePage() {
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [friendLoverTypeArr, setFriendLoverTypeArr] = useState(friendLoverTypeList);

  useEffect(() => {
    // 키워드 클릭했을 때 실행되는 함수&& checked항목이 하나라도 true면 버튼 활성화
    setActiveNextBtn(friendLoverTypeArr.some((item) => item.checked === true));
  }, [friendLoverTypeArr]);

  useEffect(() => {
    // 새로고침 전에 local에 저장된 appealDetailList 초기값으로 세팅
    const friendLoverTypeListOfLocal = localStorage.getItem("friendLoverTypeList") as string;
    const newFriendLoverTypeList = JSON.parse(friendLoverTypeListOfLocal);
    if (newFriendLoverTypeList) {
      setFriendLoverTypeArr(newFriendLoverTypeList);
      const friendLoverType = localStorage.getItem("friendLoverType") as string;
      friendLoverType && setActiveNextBtn(true);
    } else {
      setFriendLoverTypeArr(
        friendLoverTypeList.map((friendLoverType) => {
          friendLoverType.checked = false;
          return friendLoverType;
        }),
      );
    }
  }, []);

  const saveCheckedFriendLoverTypeInLocal = () => {
    // 다음 버튼 누를 때 localStorage에 저장되면 state랑 노상관
    localStorage.setItem("friendLoverTypeList", JSON.stringify(friendLoverTypeArr));
    //friendLoverTypeArr checked가 true인 것 중에 keyword 가져오기
    const checkedKeyword = friendLoverTypeArr.find((item) => item.checked)?.keyword as string;
    localStorage.setItem("friendLoverType", checkedKeyword);
  };

  return (
    <St.FriendLoverType>
      <AdressingFixedHeader
        header="추천사"
        navigatePath="/recommend/appealDetail"
        progressRate={80}
        questionKind="필수질문 3"
        title1="🧡 친구와 어울리는 애인 유형 "
      />

      <SelectOneKeyword keywordList={friendLoverTypeArr} setKeywordList={setFriendLoverTypeArr} />
      <ConsultantTextBtn />
      <MoveNextPageBtn
        nextPage={routePaths.DontGo}
        title="다음"
        disabled={!activeNextBtn}
        handleState={saveCheckedFriendLoverTypeInLocal}
      />
    </St.FriendLoverType>
  );
}

const St = {
  FriendLoverType: styled.main`
    padding: 18rem 2rem 15rem;
  `,
};
