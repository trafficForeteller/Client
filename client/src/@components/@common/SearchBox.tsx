import styled from "styled-components";

import { IcSearch } from "../../asset/icons";

export default function SearchBox() {
  return (
    <St.SearchBox>
      <IcSearch />
      <St.SearchInput placeholder="기록할 책을 찾아보세요." />
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
