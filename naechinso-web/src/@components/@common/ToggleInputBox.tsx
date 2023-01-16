import styled from "styled-components";

import { eduLevelList } from "../../core/member/member";
import ToggleInput from "./ToggleInput";
import ToggleModal from "./ToggleModal";

export interface ToggleInputBoxProps {
  label: string;
  placeholder: string;
  question?: string;
  step: number;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  isSelectionModalOpened: boolean;
  setIsSelectionModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
}

export default function ToggleInputBox(props: ToggleInputBoxProps) {
  const {
    label,
    placeholder,
    question,
    state,
    setState,
    isSelectionModalOpened,
    setIsSelectionModalOpened,
    isModalOpened,
  } = props;

  const closeRelationModal = (target: string) => {
    setIsSelectionModalOpened(false);
    setState(target);
  };

  const openRelationModal = () => {
    setIsSelectionModalOpened(true);
  };

  return (
    <St.ToggleInputBox>
      <ToggleInput
        label={label}
        placeholder={placeholder}
        value={state}
        openRelationModal={openRelationModal}
        isModalOpened={isModalOpened}
      />
      {isSelectionModalOpened ? (
        <ToggleModal question={question} array={eduLevelList} closeRelationModal={closeRelationModal} />
      ) : (
        <></>
      )}
    </St.ToggleInputBox>
  );
}

const St = {
  ToggleInputBox: styled.span``,
};
