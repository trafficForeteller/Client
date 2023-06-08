import { useState } from "react";
import styled from "styled-components";

import { appealDetailProps } from "../../core/recommend/recommend";

interface SelectOneKeywordProps {
  keywordList: appealDetailProps[];
}

export default function SelectOneKeyword(props: SelectOneKeywordProps) {
  const { keywordList } = props;

  const [keywordArr, setKeywordArr] = useState(keywordList);

  const toggleChecked = (el: appealDetailProps) => {
    // 1개만 체크, 다른 거 체크하면 선택된 거 외에 다 취소
    const tempKeywordArr = keywordArr;
    const newKeywordList = tempKeywordArr.map((keyword, index) => {
      if (el.id === index) keyword.checked = !keyword.checked;
      else keyword.checked = false;
      return keyword;
    });
    setKeywordArr(newKeywordList);
  };

  return (
    <St.SelectOneKeyword>
      {keywordArr.map((el) => {
        return (
          <St.KeywordWrapper type="button" key={el.id} onClick={() => toggleChecked(el)} checked={el.checked}>
            {el.keyword}
          </St.KeywordWrapper>
        );
      })}
    </St.SelectOneKeyword>
  );
}

const St = {
  SelectOneKeyword: styled.section`
    margin: 0 auto;
    width: 37.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    overflow-y: scroll;
  `,
  KeywordWrapper: styled.button<{ checked: boolean }>`
    width: auto;
    height: 3.9rem;
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.brown)};
    ${({ theme }) => theme.fonts.caption7};
    background: ${({ theme, checked }) => (checked ? theme.colors.orange : theme.colors.neural)};
    border-radius: 10px;
    transition: all 0.2s ease;

    padding: 1rem 1.2rem;
  `,
};
