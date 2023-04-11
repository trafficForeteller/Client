import styled from "styled-components";

interface ToolTipBoxProps {
  text: string;
  bottom: number;
}

export default function ToolTipBox(props: ToolTipBoxProps) {
  const { text, bottom } = props;

  return <St.ToolTipBox bottom={bottom}>{text}</St.ToolTipBox>;
}

const St = {
  ToolTipBox: styled.article<{ bottom: number }>`
    width: fit-content;
    padding: 1.3rem 2.1rem;
    height: 5rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body2};

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: ${({ bottom }) => bottom}rem;
  `,
};
