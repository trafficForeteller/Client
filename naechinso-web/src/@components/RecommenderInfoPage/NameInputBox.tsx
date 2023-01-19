import styled from "styled-components";

export interface ShortInputProps {
  name: string;
  handleNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NameInputBox(props: ShortInputProps) {
  const { name, handleNameInput } = props;

  return (
    <St.NameInputBox>
      <St.Label>이름</St.Label>
      <St.Input placeholder="실명을 적어줘" onChange={(e) => handleNameInput(e)} value={name} />
    </St.NameInputBox>
  );
}

const St = {
  NameInputBox: styled.section`
    width: 100%;
    height: 8rem;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 0 auto;
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
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
