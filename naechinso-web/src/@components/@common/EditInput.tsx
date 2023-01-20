import styled from "styled-components";

export interface EditInputProps {
  label: string;
  value: string;
  desc?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isModalOpened?: boolean;
}

export default function EditInput(props: EditInputProps) {
  const { label, value, onChange, desc, isModalOpened } = props;

  return (
    <St.EditInputBox>
      <St.EditInput>
        <St.Label>{label}</St.Label>
        <St.Input value={value} onChange={(e) => onChange(e)} />
      </St.EditInput>
      {desc ? <St.EduNameEx>ex. 연세(X) 연대(X) 연세대학교(O)</St.EduNameEx> : <></>}
    </St.EditInputBox>
  );
}

const St = {
  EditInputBox: styled.span``,
  EditInput: styled.section`
    width: 100%;
    height: 7.2rem;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem 2rem;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  `,
  Label: styled.p`
    ${({ theme }) => theme.fonts.body7};
    color: ${({ theme }) => theme.colors.gray40};
  `,
  Input: styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body8};
    display: flex;
    justify-content: center;
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
  EduNameEx: styled.article`
    margin: 0.6rem 2.1rem 0.9rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption6};
  `,
};
