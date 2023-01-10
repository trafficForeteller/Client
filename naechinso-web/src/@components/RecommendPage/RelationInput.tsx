import styled from "styled-components";

export interface RelationInputProps {
  stepModalOpened: boolean;
}

export default function RelationInput(props: RelationInputProps) {
  const { stepModalOpened } = props;
  return (
    <St.RelationInput stepModalOpened={stepModalOpened}>
      : <St.Input placeholder="그러면 어떻게 만났어?" />
    </St.RelationInput>
  );
}

const St = {
  RelationInput: styled.article<{ stepModalOpened: boolean }>`
    width: 33.5rem;
    height: 2.6rem;
    margin: 1.2rem auto 0;
    color: ${({ theme }) => theme.colors.brown};
    ${({ theme }) => theme.fonts.sub3};

    display: flex;
    align-items: center;

    gap: 1.4rem;
    position: relative;
    z-index: ${({ stepModalOpened }) => (stepModalOpened ? "-1" : "")};
  `,
  Input: styled.input`
    width: 100%auto;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3};
    display: flex;
    justify-content: center;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
