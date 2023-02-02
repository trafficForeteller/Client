import styled from "styled-components";

export interface ShortInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isModalOpened?: boolean;
  step: number;
}

export default function ShortInputBox(props: ShortInputProps) {
  const { label, placeholder, value, onChange, isModalOpened, step } = props;

  return (
    <>
      {isModalOpened ? (
        <St.InputBoxWithModal isModalOpened={isModalOpened}>
          <St.Label step={step}>{label}</St.Label>
          <St.Input placeholder={placeholder} value={value} onChange={(e) => onChange(e)} />
        </St.InputBoxWithModal>
      ) : (
        <St.InputBox>
          <St.Label step={step}>{label}</St.Label>
          <St.Input placeholder={placeholder} value={value} onChange={(e) => onChange(e)} />
        </St.InputBox>
      )}
    </>
  );
}

const St = {
  InputBoxWithModal: styled.section<{ isModalOpened: boolean | null }>`
    width: 33.5rem;
    height: 8rem;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 1.6rem auto 0;
    position: relative;
    z-index: ${({ isModalOpened }) => (isModalOpened ? "-1" : "")};
  `,
  InputBox: styled.section`
    width: 33.5rem;
    height: 8rem;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 1.6rem auto 0;
    position: relative;
  `,
  Label: styled.p<{ step: number }>`
    color: ${({ theme, step }) => (step === 1 ? theme.colors.orange : theme.colors.gray40)};
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
