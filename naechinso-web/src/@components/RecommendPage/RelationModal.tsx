import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IcRelationChecked } from "../../asset/icons";
import { relationTypeProps } from "../../core/recommend/recommend";

export interface RelationModalProps {
  question: string;
  relationArr: relationTypeProps[];
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RelationModal(props: RelationModalProps) {
  const { question, relationArr, setIsModalOpened } = props;
  const [relationList, setRelationList] = useState(relationArr);

  useEffect(() => {
    console.log(relationList);
  }, [relationList]);

  const toggleCheck = (id: number) => {
    // 항목별 체크
    const newRelationList = relationList.map((el, index) => {
      if (id === index) el.checked = true;
      else el.checked = false;
      return el;
    });
    setRelationList(newRelationList);
    setIsModalOpened(false);
  };

  return (
    <St.RelationModal>
      <St.Question>{question}</St.Question>
      {relationList.map((el) => {
        return (
          <St.Relation type="button" key={el.id} onClick={() => toggleCheck(el.id)}>
            {el.relation}
            <St.CheckedWrapper>{el.checked ? <IcRelationChecked /> : <></>}</St.CheckedWrapper>
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
