import { useState } from "react";
import styled from "styled-components";

import { IcAddKeyword } from "../../asset/icons";
import AddKeywordModal from "./AddKeywordModal";

export default function AddKeywordBtn() {
  const [isOpenKeywordModal, setIsOpenKeywordModal] = useState(false);

  const openModal = () => setIsOpenKeywordModal(true);
  const closeModal = () => setIsOpenKeywordModal(false);

  return (
    <>
      <St.AddKeywordBtn type="button" onClick={openModal}>
        키워드 추가
        <IcAddKeyword />
      </St.AddKeywordBtn>
      {isOpenKeywordModal && <AddKeywordModal closeModal={closeModal} isOpenKeywordModal={isOpenKeywordModal} />}
    </>
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
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  `,
};
