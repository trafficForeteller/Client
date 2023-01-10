import React from "react";
import styled from "styled-components";

import { relationDurationList } from "../../core/recommend/recommend";
import RelationModal from "./RelationModal";
import RelationToggle from "./RelationToggle";

export interface RelationTypeDurationProps {
  step: number;
  isDurationModalOpened: boolean;
  relationDuration: string;
  setRelationDuration: React.Dispatch<React.SetStateAction<string>>;
  setIsDurationModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
}

export default function RelationDurationInput(props: RelationTypeDurationProps) {
  const { isDurationModalOpened, relationDuration, setRelationDuration, setIsDurationModalOpened, isModalOpened } =
    props;

  const closeRelationModal = (target: string) => {
    setIsDurationModalOpened(false);
    setRelationDuration(target);
  };

  const openRelationModal = () => {
    setIsDurationModalOpened(true);
  };

  return (
    <St.RelationDurationInput>
      <RelationToggle
        label="관계"
        placeholder="어떤 관계인지 선택해줘"
        defaultValue={relationDuration}
        openRelationModal={openRelationModal}
        isModalOpened={isModalOpened}
      />
      {isDurationModalOpened ? (
        <RelationModal
          question="친구와 어떤 관계야?"
          relationArr={relationDurationList}
          closeRelationModal={closeRelationModal}
        />
      ) : (
        <></>
      )}
    </St.RelationDurationInput>
  );
}

const St = {
  RelationDurationInput: styled.span``,
};
