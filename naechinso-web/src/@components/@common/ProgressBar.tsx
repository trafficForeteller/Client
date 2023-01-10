import styled from "styled-components";

export interface ProgressBarProps {
  progressRate: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const { progressRate } = props;

  return (
    <St.ProgressBar>
      <St.ProgressRate progressRate={progressRate}></St.ProgressRate>
    </St.ProgressBar>
  );
}

const St = {
  ProgressBar: styled.section`
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.old_gray};
    margin: 0.8rem 0 2.8rem;
    position: relative;
    z-index: -1;
  `,
  ProgressRate: styled.article<{ progressRate: number }>`
    width: ${({ progressRate }) => `${progressRate}`}%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.orange};
  `,
};
