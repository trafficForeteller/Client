import styled from "styled-components";

import { IcToggleArrow } from "../../asset/icons";

export interface RelationToggleProps {
  label: string;
  placeholder: string;
  defaultValue: string;
  openRelationModal: () => void;
  isModalOpened: boolean;
}

export default function RelationToggle(props: RelationToggleProps) {
  const { label, placeholder, defaultValue, openRelationModal, isModalOpened } = props;

  return (
    <St.RelationToggle isModalOpened={isModalOpened} onClick={openRelationModal}>
      <St.Label>{label}</St.Label>
      <St.InputWrapper>
        <St.Input placeholder={placeholder} defaultValue={defaultValue} />
        <IcToggleArrow />
      </St.InputWrapper>
    </St.RelationToggle>
  );
}

const St = {
  RelationToggle: styled.section<{ isModalOpened: boolean }>`
    width: 33.5rem;
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
