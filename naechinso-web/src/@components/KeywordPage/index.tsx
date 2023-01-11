import { useEffect, useState } from "react";
import styled from "styled-components";

import { keywordList, keywordProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, MovePreviousPageBtn, ProgressBar, Title } from "../@common";
export default function KeywordPage() {
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [keywordArr, setKeywordArr] = useState(keywordList);
  const [checkedAppeals, setCheckedAppeals] = useState<string[]>([]);

  useEffect(() => {
    if (checkedAppeals.length === 3) setActiveNextBtn(true);
    else setActiveNextBtn(false);
    console.log(checkedAppeals);
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
      <St.Header>
        <MovePreviousPageBtn />
        친구 정보
      </St.Header>
      <ProgressBar progressRate={40} />
      <St.TitleWrapper>
        <Title title="네가 생각하는" />
        <Title title="친구의 매력을 3개 선택해줘" />
      </St.TitleWrapper>

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
  KeywordPage: styled.main``,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 2.4rem;
    position: relative;
    z-index: -1;
  `,
  KeywordListWrapper: styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
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
