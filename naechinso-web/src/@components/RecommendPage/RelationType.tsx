import styled from "styled-components";

import { relationTypeList } from "../../core/recommend/recommend";
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
}

export default function RelationType(props: RelationTypeProps) {
  const { step, defaultValue, isModalOpened, openRelationModal, closeRelationModal, relationType } = props;

  return (
    <St.RelationType>
      <RelationToggle
        step={step}
        label="관계"
        placeholder="어떤 관계인지 선택해줘"
        defaultValue={defaultValue}
        isModalOpened={isModalOpened}
        openRelationModal={openRelationModal}
      />
      {relationType === "기타" ? <RelationInput isModalOpened={isModalOpened} /> : <></>}
      {isModalOpened ? (
        <RelationModal
          question="친구와 어떤 관계야?"
          relationArr={relationTypeList}
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
