import styled from "styled-components";

export interface EditQuestionBoxProps {
  question: string;
  desc1?: string;
  desc2?: string;
}

export default function EditQuestionBox(props: EditQuestionBoxProps) {
  const { question, desc1, desc2 } = props;

  return (
    <St.EditQuestionBox>
      <St.EditQuestion>{question}</St.EditQuestion>
      {desc1 ? <St.EditDesc>{desc1}</St.EditDesc> : <></>}
      {desc2 ? <St.EditDesc>{desc2}</St.EditDesc> : <></>}
    </St.EditQuestionBox>
  );
}

const St = {
  EditQuestionBox: styled.hgroup`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-top: 3.6rem;
    padding-bottom: 1.4rem;
  `,
  EditQuestion: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
  `,
  EditDesc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.caption7};
  `,
};
