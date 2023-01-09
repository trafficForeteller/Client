import styled from "styled-components";

export interface ToggleRelationModalProps {
  label: string;
  placeholder: string;
  value?: string;
  //   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ToggleRelationModal(props: ToggleRelationModalProps) {
  const { label, placeholder, value } = props;

  return (
    <St.ToggleModal>
      <St.Label>{label}</St.Label>
      <St.Input placeholder={placeholder} value={value} />
    </St.ToggleModal>
  );
}

const St = {
  ToggleModal: styled.section`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 0 auto 1.6rem;
  `,
  Label: styled.p`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body2};
  `,
  Input: styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
    justify-content: center;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
