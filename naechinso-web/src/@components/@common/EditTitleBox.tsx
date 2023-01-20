import styled from "styled-components";

export interface EditTitleBoxProps {
  question: string;
  desc1?: string;
  desc2?: string;
  isModalOpened: boolean;
}

export default function EditTitleBox(props: EditTitleBoxProps) {
  const { question, desc1, desc2, isModalOpened } = props;

  return (
    <St.EditTitleBox>
      <St.EditQuestion isModalOpened={isModalOpened}>{question}</St.EditQuestion>
      {desc1 ? <St.EditDesc isModalOpened={isModalOpened}>{desc1}</St.EditDesc> : <></>}
      {desc2 ? <St.EditDesc isModalOpened={isModalOpened}>{desc2}</St.EditDesc> : <></>}
    </St.EditTitleBox>
  );
}

const St = {
  EditTitleBox: styled.hgroup`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-top: 3.6rem;
    padding-bottom: 1.4rem;
  `,
  EditQuestion: styled.h2<{ isModalOpened: boolean }>`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
    z-index: ${({ isModalOpened }) => (isModalOpened ? "-1" : "")};
  `,
  EditDesc: styled.p<{ isModalOpened: boolean }>`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.caption7};
    z-index: ${({ isModalOpened }) => (isModalOpened ? "-1" : "")};
  `,
};
