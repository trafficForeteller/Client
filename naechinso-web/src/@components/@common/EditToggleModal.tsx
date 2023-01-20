import { useState } from "react";
import styled from "styled-components";

import { IcRelationChecked } from "../../asset/icons";
import { eduLevelrops } from "../../core/member/member";

export interface EditToggleModalProps {
  array: eduLevelrops[];
  closeRelationModal: (target: string) => void;
}

export default function EditToggleModal(props: EditToggleModalProps) {
  const { array, closeRelationModal } = props;
  const [relationList, setRelationList] = useState(array);

  const toggleCheck = (el: eduLevelrops) => {
    // 항목별 체크
    const newRelationList = relationList.map((relation, index) => {
      if (el.id === index) relation.checked = true;
      else relation.checked = false;
      return relation;
    });
    setRelationList(newRelationList);
    closeRelationModal(el.eduLevel);
  };

  return (
    <St.EditToggleModal>
      {array.map((el) => {
        return (
          <St.Relation type="button" key={el.id} onClick={() => toggleCheck(el)}>
            {el.eduLevel}
            <St.CheckedWrapper>{el.checked ? <IcRelationChecked /> : <></>}</St.CheckedWrapper>
          </St.Relation>
        );
      })}
    </St.EditToggleModal>
  );
}

const St = {
  EditToggleModal: styled.section`
    width: 100%;
    height: 29rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0 0;
    padding-top: 3.2rem;
    z-index: 10;
  `,
  Question: styled.h2`
    display: flex;
    align-items: center;
    margin: 3.2rem 2.4rem 1.2rem;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  Relation: styled.button`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3};
    cursor: pointer;
  `,
  CheckedWrapper: styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
