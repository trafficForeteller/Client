import { useState } from "react";
import styled from "styled-components";

import { keywordList, keywordProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, MovePreviousPageBtn, Title } from "../@common";
import ProgressBar from "../@common/ProgressBar";

export default function KeywordPage() {
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [keywordArr, setKeywordArr] = useState(keywordList);

  const toggleCheck = (el: keywordProps) => {
    // 항목별 체크
    const newKeywordList = keywordArr.map((keyword, index) => {
      if (el.id === index) keyword.checked = true;
      else keyword.checked = false;
      return keyword;
    });
    setKeywordArr(newKeywordList);
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
            <St.KeywordWrapper type="button" key={el.id} onClick={() => toggleCheck(el)} checked={el.checked}>
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
    margin-left: 2.4rem;
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
