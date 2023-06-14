import styled from "styled-components";

import { IcAddKeyword } from "../../asset/icons";

export default function AddKeywordBtn() {
  return (
    <St.AddKeywordBtn type="button">
      키워드 추가
      <IcAddKeyword />
    </St.AddKeywordBtn>
  );
}

const St = {
  AddKeywordBtn: styled.button`
    width: 10.51rem;
    height: 3.9rem;
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.caption7};
    border: 1px solid ${({ theme }) => theme.colors.orange};
    border-radius: 10px;

    display: flex;
    gap: 0.4rem;
  `,
};
