import styled from "styled-components";

export interface EditTitleBoxProps {
  question: string;
  desc1?: string;
  desc2?: string;
}

export default function EditTitleBox(props: EditTitleBoxProps) {
  const { question, desc1, desc2 } = props;

  return (
    <St.EditTitleBox>
      <St.EditQuestion>{question}</St.EditQuestion>
      {desc1 ? <St.EditDesc>{desc1}</St.EditDesc> : <></>}
      {desc2 ? <St.EditDesc>{desc2}</St.EditDesc> : <></>}
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
  EditQuestion: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
  `,
  EditDesc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.caption7};
  `,
};
