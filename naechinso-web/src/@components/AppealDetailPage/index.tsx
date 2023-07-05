import { useEffect, useState } from "react";
import styled from "styled-components";

import { appealDetailList } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { AdressingFixedHeader, ConsultantTextBtn, MoveNextPageBtn, SelectOneKeyword } from "../@common";

export default function AppealDetailPage() {
  //dontgo에서 "내 친구는 ~한 친구야" 붙여주기
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [appealDetailArr, setAppealDetailArr] = useState(appealDetailList);

  useEffect(() => {
    // checked항목이 하나라도 true면 버튼 활성화
    setActiveNextBtn(appealDetailArr.some((item) => item.checked === true));
  }, [appealDetailArr]);

  useEffect(() => {
    // 새로고침 전에 local에 저장된 appealDetailList 초기값으로 세팅
    const appealDetailListOfLocal = localStorage.getItem("appealDetailList") as string;
    const newAppealDetailList = JSON.parse(appealDetailListOfLocal);
    if (newAppealDetailList) {
      setAppealDetailArr(newAppealDetailList);
      const appealDetail = localStorage.getItem("appealDetail") as string;
      appealDetail && checkKeyword(appealDetail) && setActiveNextBtn(true);
    } else {
      setAppealDetailArr(
        appealDetailList.map((appealDetail) => {
          appealDetail.checked = false;
          return appealDetail;
        }),
      );
    }
  }, []);

  const checkKeyword = (appealDetail: string): boolean => {
    //newAppealDetailList의 객체들 중에  keyword가 변수 appealDetail랑 같은지 확인하는 함수
    // 이전 추천사의 appealDetail과 겹칠수도 있을까봐
    return appealDetailArr.some((item) => item.keyword === appealDetail);
  };

  const saveCheckedAppealDetailInLocal = () => {
    localStorage.setItem("appealDetailList", JSON.stringify(appealDetailArr));
    //appealDetailArr checked가 true인 것 중에 keyword 가져오기
    const checkedKeyword = appealDetailArr.find((item) => item.checked)?.keyword as string;
    localStorage.setItem("appealDetail", checkedKeyword);
  };

  return (
    <St.AppealDetail>
      <AdressingFixedHeader
        header="추천사"
        navigatePath="/recommend/keyword"
        progressRate={60}
        questionKind="필수질문 2"
        title1="🎈 내 친구는 OO한 친구야!"
      />

      <SelectOneKeyword keywordList={appealDetailArr} setKeywordList={setAppealDetailArr} />
      <ConsultantTextBtn />
      <MoveNextPageBtn
        nextPage={routePaths.FriendLoverType}
        title="다음"
        disabled={!activeNextBtn}
        handleState={saveCheckedAppealDetailInLocal}
      />
    </St.AppealDetail>
  );
}

const St = {
  AppealDetail: styled.main`
    padding: 18rem 2rem 13rem;
  `,
};
