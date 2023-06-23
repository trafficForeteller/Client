import { useState } from "react";
import styled from "styled-components";

import { IcAddKeyword } from "../../asset/icons";
import { keywordProps } from "../../core/recommend/recommend";
import AddKeywordModal from "./AddKeywordModal";

interface AddKeywordBtnProps {
  keywordArr: keywordProps[];
  setKeywordArr: React.Dispatch<React.SetStateAction<keywordProps[]>>;
}

export default function AddKeywordBtn(props: AddKeywordBtnProps) {
  const { keywordArr, setKeywordArr } = props;
  const [isOpenKeywordModal, setIsOpenKeywordModal] = useState(false);

  const openModal = () => setIsOpenKeywordModal(true);
  const closeModal = () => setIsOpenKeywordModal(false);

  return (
    <>
      <St.AddKeywordBtn type="button" onClick={openModal}>
        키워드 추가
        <IcAddKeyword />
      </St.AddKeywordBtn>
      {isOpenKeywordModal && (
        <AddKeywordModal
          closeModal={closeModal}
          isOpenKeywordModal={isOpenKeywordModal}
          keywordArr={keywordArr}
          setKeywordArr={setKeywordArr}
        />
      )}
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
