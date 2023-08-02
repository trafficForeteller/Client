import styled from "styled-components";

import { keywordProps } from "../../core/recommend/recommend";
import AddKeywordBtn from "./AddKeywordBtn";

interface SelectOneKeywordProps {
  setKeywordList: React.Dispatch<React.SetStateAction<keywordProps[]>>;
  keywordList: keywordProps[];
  questionNum: number;
}

export default function SelectOneKeyword(props: SelectOneKeywordProps) {
  // 키워드 리스트를 보여주는 역할만 하는 common component

  const { setKeywordList, keywordList, questionNum } = props;
  // 체크되면 바로 localStorage에 저장

  const toggleChecked = (el: keywordProps) => {
    const newKeywordList = keywordList.map((keyword, index) => {
      if (el.id === index) {
        // 선택했는데 arr의 길이가 3이고 checked가 false이면 아무것도 안바뀌게 하기
        keyword.checked =
          questionNum === 3 && keywordList.filter((item) => item.checked).length === 3 && keyword.checked === false
            ? keyword.checked
            : !keyword.checked;
      } else {
        // questionNum이 2인 경우에는 한 개만 선택하도록 처리
        // questionNum이 3인 경우에는 세 개까지 선택 가능하도록 처리
        keyword.checked = questionNum === 2 ? false : keyword.checked;
      }
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
      <AddKeywordBtn keywordArr={keywordList} setKeywordArr={setKeywordList} questionNum={questionNum} />
    </St.SelectOneKeyword>
  );
}

const St = {
  SelectOneKeyword: styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    //    overflow-y: scroll;
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
