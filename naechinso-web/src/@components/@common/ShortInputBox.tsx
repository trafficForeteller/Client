import styled from "styled-components";

export interface ShortInputProps {
  label: string;
  placeholder: string;
}

export default function ShortInputBox(props: ShortInputProps) {
  const { label, placeholder } = props;

  return (
    <St.InputBox>
      <St.Label>{label}</St.Label>
      <St.Input placeholder={placeholder} />
    </St.InputBox>
  );
}

const St = {
  InputBox: styled.section`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 0 auto;
  `,
  Label: styled.p`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body2};
  `,
  Input: styled.input`
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
