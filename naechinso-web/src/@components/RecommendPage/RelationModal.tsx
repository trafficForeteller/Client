import styled from "styled-components";

import { IcRelationChecked } from "../../asset/icons";
import { relationTypeProps } from "../../core/recommend/recommend";

export interface RelationModalProps {
  question: string;
  relationArr: relationTypeProps[];
}

export default function RelationModal(props: RelationModalProps) {
  const { question, relationArr } = props;
  return (
    <St.RelationModal>
      <St.Question>{question}</St.Question>
      {relationArr.map((el) => {
        console.log(el.checked);
        return (
          <St.Relation type="button" key={el.id}>
            {el.relation}
            {`${el.checked}` ? <IcRelationChecked /> : <></>}
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
    margin: 0 2.4rem;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  Relation: styled.button`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 2.4rem;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3};

    display: flex;
    justify-content: space-between;
  `,
};
