import styled from "styled-components";

export interface ShortInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isModalOpened: boolean;
}

export default function ShortInputBox(props: ShortInputProps) {
  const { label, placeholder, value, onChange, isModalOpened } = props;

  return (
    <St.InputBox isModalOpened={isModalOpened}>
      <St.Label>{label}</St.Label>
      <St.Input placeholder={placeholder} value={value} onChange={(e) => onChange(e)} />
    </St.InputBox>
  );
}

const St = {
  InputBox: styled.section<{ isModalOpened: boolean }>`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 0 auto;
    position: relative;
    z-index: ${({ isModalOpened }) => (isModalOpened ? "-1" : "")};
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
