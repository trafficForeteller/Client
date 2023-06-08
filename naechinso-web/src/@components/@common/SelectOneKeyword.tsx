import styled from "styled-components";

import { keywordProps } from "../../core/recommend/recommend";

interface SelectOneKeywordProps {
  setKeywordList: React.Dispatch<React.SetStateAction<keywordProps[]>>;
  keywordList: keywordProps[];
}

export default function SelectOneKeyword(props: SelectOneKeywordProps) {
  // 키워드 리스트를 보여주는 역할만 하는 common component

  const { setKeywordList, keywordList } = props;
  // 체크되면 바로 localStorage에 저장

  const toggleChecked = (el: keywordProps) => {
    // 1개만 체크, 다른 거 체크하면 선택된 거 외에 다 취소
    const tempKeywordArr = keywordList;
    const newKeywordList = tempKeywordArr.map((keyword, index) => {
      if (el.id === index) {
        keyword.checked = !keyword.checked;
      } else keyword.checked = false;
      return keyword;
    });
    setKeywordList(newKeywordList);
  };

  return (
    <St.SelectOneKeyword>
      {keywordList.map((el) => {
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
    cursor: pointer;
    padding: 1rem 1.2rem;
  `,
};
