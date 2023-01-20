import styled from "styled-components";

import { IcToggleArrow } from "../../asset/icons";

export interface EditToggleInputProps {
  label: string;
  value: string;
  openRelationModal: () => void;
  isModalOpened: boolean;
}

export default function EditToggleInput(props: EditToggleInputProps) {
  const { label, value, openRelationModal, isModalOpened } = props;

  return (
    <St.EditToggleInput isModalOpened={isModalOpened} onClick={openRelationModal}>
      <St.Label>{label}</St.Label>
      <St.InputWrapper>
        <St.Input value={value} readOnly />
        <IcToggleArrow />
      </St.InputWrapper>
    </St.EditToggleInput>
  );
}

const St = {
  EditToggleInput: styled.section<{ isModalOpened: boolean }>`
    width: 120px;
    height: 7.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem 2rem;
    position: relative;
  `,
  Label: styled.p`
    ${({ theme }) => theme.fonts.body7};
    color: ${({ theme }) => theme.colors.gray40};
  `,
  InputWrapper: styled.span`
    display: flex;
    justify-content: center;
    cursor: pointer;
  `,
  Input: styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body8};
    display: flex;
    justify-content: center;
    cursor: pointer;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
