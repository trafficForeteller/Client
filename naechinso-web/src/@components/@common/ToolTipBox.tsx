import styled from "styled-components";

interface ToolTipBoxProps {
  text: string;
}

export default function ToolTipBox(props: ToolTipBoxProps) {
  const { text } = props;

  return <St.ToolTipBox>{text}</St.ToolTipBox>;
}

const St = {
  ToolTipBox: styled.article`
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
    bottom: 26.4rem;
  `,
};
