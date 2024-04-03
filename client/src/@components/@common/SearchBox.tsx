import styled from "styled-components";

import { IcSearch } from "../../asset/icons";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const { value, onChange, onSearch } = props;

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      onSearch(); // 엔터 키가 눌렸을 때 검색 함수를 호출합니다.
    }
  };

  return (
    <St.SearchBox>
      <St.SearchButton onClick={onSearch} type="button">
        <IcSearch />
      </St.SearchButton>

      <St.SearchInput
        type="text"
        placeholder="기록할 책을 찾아보세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </St.SearchBox>
  );
}

const St = {
  SearchBox: styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple4};
    border-radius: 12px;
    margin: 1.7rem 1.6rem;
    padding: 1.2rem 1.6rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;
  `,
  SearchButton: styled.button``,
  SearchInput: styled.input`
    width: 100%;
    height: 2rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.reg14};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
    }
  `,
};
