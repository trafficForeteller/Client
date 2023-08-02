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
    setActiveNextBtn(friendLoverTypeArr.filter((item) => item.checked).length === 3);
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
    const checkedKeyword = friendLoverTypeArr.filter((item) => item.checked);
    localStorage.setItem("friendLoverType", JSON.stringify(checkedKeyword));
  };

  return (
    <St.FriendLoverType>
      <AdressingFixedHeader
        currentRequiredPage={3}
        count={friendLoverTypeArr.filter((item) => item.checked).length}
        header="내 친구 자랑"
        navigatePath="/recommend/appealDetail"
        title1="🧡"
        title2="친구와 어울릴 것 같은 애인 유형"
      />

      <SelectOneKeyword questionNum={3} keywordList={friendLoverTypeArr} setKeywordList={setFriendLoverTypeArr} />
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
    width: 100%;
    padding: 21.2rem 2rem 13rem;
  `,
};
