import styled from "styled-components";

import { relationDurationList, relationTypeList, stepItemsProps } from "../../core/recommend/recommend";
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
      {isModalOpened && step === 2 ? (
        <RelationModal
          question="친구와 어떤 관계야?"
          relationArr={relationTypeList}
          closeRelationModal={closeRelationModal}
        />
      ) : (
        <></>
      )}

      {isModalOpened && step === 3 ? (
        <RelationModal
          question="알고 지낸 지는 얼마나 됐어?"
          relationArr={relationDurationList}
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
