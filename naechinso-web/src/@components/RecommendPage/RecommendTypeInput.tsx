import React, { useEffect } from "react";
import styled from "styled-components";

import { relationTypeList } from "../../core/recommend/recommend";
import RelationInput from "./RelationInput";
import RelationModal from "./RelationModal";
import RelationToggle from "./RelationToggle";

export interface RelationTypeInputProps {
  step: number;
  relationType: string;
  setRelationType: React.Dispatch<React.SetStateAction<string>>;
  isTypeModalOpened: boolean;
  setIsTypeModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
  relationEtc: string;
  setRelationEtc: React.Dispatch<React.SetStateAction<string>>;
  setPostRelationType: React.Dispatch<React.SetStateAction<string>>;
}

export default function RelationTypeInput(props: RelationTypeInputProps) {
  const {
    isTypeModalOpened,
    relationType,
    setRelationType,
    setIsTypeModalOpened,
    isModalOpened,
    relationEtc,
    setRelationEtc,
    setPostRelationType,
  } = props;

  useEffect(() => {
    handlePostRelationType();
  }, [relationType, relationEtc]);

  const handlePostRelationType = () => {
    if (relationType === "기타") relationEtc && setPostRelationType(relationEtc);
    else {
      relationType && setPostRelationType(relationType);
      setRelationEtc("");
    }
  };

  const closeRelationModal = (target: string) => {
    setIsTypeModalOpened(false);
    setRelationType(target);
  };

  const openRelationModal = () => {
    setIsTypeModalOpened(true);
  };

  return (
    <St.RelationTypeInput>
      <RelationToggle
        label="관계"
        placeholder="어떤 관계인지 선택해줘"
        value={relationType}
        openRelationModal={openRelationModal}
        isModalOpened={isModalOpened}
      />
      {relationType === "기타" ? (
        <RelationInput isModalOpened={isModalOpened} relationEtc={relationEtc} setRelationEtc={setRelationEtc} />
      ) : (
        <></>
      )}
      {isTypeModalOpened ? (
        <RelationModal
          question="친구와 어떤 관계야?"
          relationArr={relationTypeList}
          closeRelationModal={closeRelationModal}
        />
      ) : (
        <></>
      )}
    </St.RelationTypeInput>
  );
}

const St = {
  RelationTypeInput: styled.span``,
};
