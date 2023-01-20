import styled from "styled-components";

import { IcToggleArrow } from "../../asset/icons";

export interface ToggleInputProps {
  label: string;
  placeholder?: string;
  value: string;
  openRelationModal: () => void;
  isModalOpened: boolean;
}

export default function ToggleInput(props: ToggleInputProps) {
  const { label, placeholder, value, openRelationModal, isModalOpened } = props;

  return (
    <St.ToggleInput isModalOpened={isModalOpened} onClick={openRelationModal}>
      <St.Label>{label}</St.Label>
      <St.InputWrapper>
        <St.Input placeholder={placeholder} value={value} readOnly />
        <IcToggleArrow />
      </St.InputWrapper>
    </St.ToggleInput>
  );
}

const St = {
  ToggleInput: styled.section<{ isModalOpened: boolean }>`
    width: 100%;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 1.6rem auto 0;
    position: relative;
    z-index: ${({ isModalOpened }) => (isModalOpened ? "-1" : "")};
  `,
  Label: styled.p`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.body2};
  `,
  InputWrapper: styled.span`
    display: flex;
    justify-content: center;
    cursor: pointer;
  `,
  Input: styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
    justify-content: center;
    cursor: pointer;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
