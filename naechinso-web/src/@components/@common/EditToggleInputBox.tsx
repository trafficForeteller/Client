import styled from "styled-components";

import { eduLevelList } from "../../core/member/member";
import EditToggleInput from "./EditToggleInput";
import EditToggleModal from "./EditToggleModal";

export interface EditToggleInputBoxProps {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  isSelectionModalOpened: boolean;
  setIsSelectionModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
}

export default function EditToggleInputBox(props: EditToggleInputBoxProps) {
  const { label, state, setState, isSelectionModalOpened, setIsSelectionModalOpened, isModalOpened } = props;

  const closeRelationModal = (target: string) => {
    setIsSelectionModalOpened(false);
    setState(target);
  };

  const openRelationModal = () => {
    setIsSelectionModalOpened(true);
  };

  return (
    <St.EditToggleInputBox>
      <EditToggleInput
        label={label}
        value={state}
        openRelationModal={openRelationModal}
        isModalOpened={isModalOpened}
      />
      {isSelectionModalOpened ? (
        <EditToggleModal array={eduLevelList} closeRelationModal={closeRelationModal} />
      ) : (
        <></>
      )}
    </St.EditToggleInputBox>
  );
}

const St = {
  EditToggleInputBox: styled.span``,
};
