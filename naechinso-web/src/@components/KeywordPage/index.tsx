import { useEffect, useState } from "react";
import styled from "styled-components";

import { keywordList, keywordProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { AddKeywordBtn, AdressingFixedHeader, ConsultantTextBtn, MoveNextPageBtn } from "../@common";

export default function KeywordPage() {
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [keywordArr, setKeywordArr] = useState(keywordList);
  const [checkedAppeals, setCheckedAppeals] = useState<string[]>([]);

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 keywordList 초기값으로 세팅
    const keywordListOfLocal = localStorage.getItem("keywordList") as string;
    const newKeywordList = JSON.parse(keywordListOfLocal);
    if (newKeywordList) {
      setKeywordArr(newKeywordList);
      const appealsOfLocal = localStorage.getItem("appeals") as string;
      const appeals = JSON.parse(appealsOfLocal);
      if (appeals) {
        setCheckedAppeals(appeals);
        setActiveNextBtn(true);
      }
    } else {
      setKeywordArr(
        keywordList.map((keyword) => {
          keyword.checked = false;
          return keyword;
        }),
      );
    }
  }, []);

  useEffect(() => {
    if (checkedAppeals.length === 3) setActiveNextBtn(true);
    else setActiveNextBtn(false);
  }, [checkedAppeals]);

  const toggleChecked = (el: keywordProps) => {
    // 항목별 체크 && 3개 이상 시 체크 불가
    const tempKeywordArr = keywordArr;
    const newKeywordList = tempKeywordArr.map((keyword, index) => {
      if (el.id === index) {
        if (checkedAppeals.length < 3) keyword.checked = !keyword.checked;
        else if (el.checked) keyword.checked = !keyword.checked;
      }
      return keyword;
    });
    setKeywordArr(newKeywordList);
    countCheckedNum(el);
  };

  const countCheckedNum = (el: keywordProps) => {
    // 체크된 tag 배열에 담기
    if (el.checked) setCheckedAppeals([...checkedAppeals, el.keyword]);
    else setCheckedAppeals(checkedAppeals.filter((appeal) => appeal !== el.keyword));
  };

  const saveCheckedAppealsInLocal = () => {
    localStorage.setItem("appeals", JSON.stringify(checkedAppeals));
    localStorage.setItem("keywordList", JSON.stringify(keywordArr));
    localStorage.setItem(
      "checkedKeywordList",
      JSON.stringify(keywordArr.filter((newKeyword) => newKeyword.checked === true)),
    );
  };

  return (
    <St.KeywordPage>
      <AdressingFixedHeader
        header="추천사"
        navigatePath="/recommend/friendInfo"
        progressRate={40}
        questionKind="필수질문 1"
        title1="😘 친구의 매력 3개만 알려줘!"
      />

      <St.KeywordListWrapper>
        {keywordArr.map((el) => {
          return (
            <St.KeywordWrapper type="button" key={el.id} onClick={() => toggleChecked(el)} checked={el.checked}>
              {el.keyword}
            </St.KeywordWrapper>
          );
        })}
        <AddKeywordBtn />
      </St.KeywordListWrapper>
      <ConsultantTextBtn />

      <MoveNextPageBtn
        nextPage={routePaths.AppealDetail}
        title="다음"
        disabled={!activeNextBtn}
        handleState={saveCheckedAppealsInLocal}
      />
      <St.StepWrapper>
        <St.CurrentStep>1/</St.CurrentStep>
        <St.TotalStep>4</St.TotalStep>
      </St.StepWrapper>
    </St.KeywordPage>
  );
}

const St = {
  KeywordPage: styled.main`
    width: 100%;
    padding-bottom: 15rem;
  `,
  KeywordListWrapper: styled.section`
    margin: 0 auto;
    width: 37.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 19rem;
    overflow-y: scroll;
    padding-bottom: 1rem;
  `,
  KeywordWrapper: styled.button<{ checked: boolean }>`
    width: 10.51rem;
    height: 3.9rem;
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.brown)};
    ${({ theme }) => theme.fonts.caption7};
    background: ${({ theme, checked }) => (checked ? theme.colors.orange : theme.colors.neural)};
    border-radius: 10px;
    transition: all 0.2s ease;
  `,
  StepWrapper: styled.article`
    position: fixed;
    right: 4rem;
    bottom: 7rem;

    display: flex;
  `,
  CurrentStep: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
  `,
  TotalStep: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    opacity: 0.4;
  `,
};
