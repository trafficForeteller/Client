import { useState } from "react";
import styled from "styled-components";

import { IcRelationChecked } from "../../asset/icons";
import { relationTypeProps } from "../../core/recommend/recommend";

export interface RelationModalProps {
  question?: string;
  relationArr: relationTypeProps[];
  closeRelationModal: (target: string) => void;
}

export default function RelationModal(props: RelationModalProps) {
  const { question, relationArr, closeRelationModal } = props;
  const [relationList, setRelationList] = useState(relationArr);

  const toggleCheck = (el: relationTypeProps) => {
    // 항목별 체크
    const newRelationList = relationList.map((relation, index) => {
      if (el.id === index) relation.checked = true;
      else relation.checked = false;
      return relation;
    });
    setRelationList(newRelationList);
    closeRelationModal(el.relation);
  };

  return (
    <St.RelationModal id="relationModal">
      {question ? <St.Question>{question}</St.Question> : ""}
      {relationList.map((el) => {
        return (
          <St.Relation type="button" key={el.id} onClick={() => toggleCheck(el)}>
            {el.relation}
            <St.CheckedWrapper>{el.checked ? <IcRelationChecked aria-label="체크" /> : <></>}</St.CheckedWrapper>
          </St.Relation>
        );
      })}
    </St.RelationModal>
  );
}

const St = {
  RelationModal: styled.section`
    width: 100%;
    height: 41rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0 0;
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
