import React from "react";
import styled from "styled-components";

import { relationDurationList } from "../../core/recommend/recommend";
import RelationModal from "./RelationModal";
import RelationToggle from "./RelationToggle";

export interface RelationTypeDurationProps {
  label: string;
  placeholder: string;
  question?: string;
  step: number;
  isDurationModalOpened: boolean;
  relationDuration: string;
  setRelationDuration: React.Dispatch<React.SetStateAction<string>>;
  setIsDurationModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
}

export default function RelationDurationInput(props: RelationTypeDurationProps) {
  const {
    label,
    placeholder,
    question,
    isDurationModalOpened,
    relationDuration,
    setRelationDuration,
    setIsDurationModalOpened,
    isModalOpened,
  } = props;

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
        label={label}
        placeholder={placeholder}
        value={relationDuration}
        openRelationModal={openRelationModal}
        isModalOpened={isModalOpened}
      />
      {isDurationModalOpened ? (
        <RelationModal question={question} relationArr={relationDurationList} closeRelationModal={closeRelationModal} />
      ) : (
        <></>
      )}
    </St.RelationDurationInput>
  );
}

const St = {
  RelationDurationInput: styled.span``,
};
