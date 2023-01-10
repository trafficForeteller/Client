import { useState } from "react";
import styled from "styled-components";

import { relationDurationList, relationTypeList, stepItemList, stepItemsProps } from "../../core/recommend/recommend";
import RelationInput from "./RelationInput";
import RelationModal from "./RelationModal";
import RelationToggle from "./RelationToggle";

export interface RelationTypeProps {
  step: number;
  defaultValue: string;
  isModalOpened: boolean;
  openRelationModal: () => void;
  closeRelationModal: (target: string) => void;
  relationType: string;
  stepItemList: stepItemsProps;
}

export default function RelationType(props: RelationTypeProps) {
  const { step, defaultValue, isModalOpened, openRelationModal, closeRelationModal, relationType, stepItemList } =
    props;

  return (
    <St.RelationType>
      <RelationToggle
        step={step}
        label={stepItemList.label}
        placeholder={stepItemList.placeholder}
        defaultValue={defaultValue}
        isModalOpened={isModalOpened}
        openRelationModal={openRelationModal}
      />
      {relationType === "기타" ? <RelationInput isModalOpened={isModalOpened} /> : <></>}
      {isModalOpened ? (
        <RelationModal
          question={stepItemList.question}
          relationArr={stepItemList.relationArr}
          closeRelationModal={closeRelationModal}
        />
      ) : (
        <></>
      )}
    </St.RelationType>
  );
}

const St = {
  RelationType: styled.span``,
};
