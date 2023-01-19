import styled from "styled-components";

export interface EditInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isModalOpened?: boolean;
}

export default function EditInput(props: EditInputProps) {
  const { label, value, onChange, isModalOpened } = props;

  return (
    <St.EditInput>
      <St.Label>{label}</St.Label>
      <St.Input value={value} onChange={(e) => onChange(e)} />
    </St.EditInput>
  );
}

const St = {
  EditInput: styled.section`
    width: 100%;
    height: 7.2rem;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 1.6rem auto 0;
    position: relative;
  `,
  Label: styled.p`
    ${({ theme }) => theme.fonts.body2};
  `,
  Input: styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
    justify-content: center;
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
