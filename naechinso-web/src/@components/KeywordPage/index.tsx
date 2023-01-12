import { useEffect, useState } from "react";
import styled from "styled-components";

import { keywordList, keywordProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn } from "../@common";
import FixedHeader from "../@common/FixedHeader";
export default function KeywordPage() {
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [keywordArr, setKeywordArr] = useState(keywordList);
  const [checkedAppeals, setCheckedAppeals] = useState<string[]>([]);

  useEffect(() => {
    if (checkedAppeals.length === 3) setActiveNextBtn(true);
    else setActiveNextBtn(false);
  }, [checkedAppeals]);

  const toggleChecked = (el: keywordProps) => {
    // 항목별 체크 && 3개 이상 시 체크 불가
    const newKeywordList = keywordArr.map((keyword, index) => {
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

  return (
    <St.KeywordPage>
      <FixedHeader
        header="친구 정보"
        progressRate={40}
        title1="네가 생각하는"
        title2="친구의 매력을 딱 3개만 골라봐!"
      />

      <St.KeywordListWrapper>
        {keywordArr.map((el) => {
          return (
            <St.KeywordWrapper type="button" key={el.id} onClick={() => toggleChecked(el)} checked={el.checked}>
              {el.keyword}
            </St.KeywordWrapper>
          );
        })}
      </St.KeywordListWrapper>

      <MoveNextPageBtn nextPage={routePaths.SubjectiveDesc} title="다음" inputActive={!activeNextBtn} />
    </St.KeywordPage>
  );
}

const St = {
  KeywordPage: styled.main`
    padding-bottom: 10rem;
  `,
  KeywordListWrapper: styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 19rem;
  `,
  KeywordWrapper: styled.button<{ checked: boolean }>`
    width: 16rem;
    height: 5.8rem;
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.brown)};
    ${({ theme }) => theme.fonts.sub3};
    background: ${({ theme, checked }) => (checked ? theme.colors.brown : theme.colors.neural)};
    border-radius: 16px;
  `,
};
