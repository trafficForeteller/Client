import { useEffect, useState } from "react";
import styled from "styled-components";

import { MovePreviousPageBtn, ShortInputBox, Title } from "../@common";
import ProgressBar from "../@common/ProgressBar";

export default function RecommendPage() {
  const [progressRate, setProgressRate] = useState(20);
  const [step, setStep] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.length >= 2) setActiveBtn(true);
    else setActiveBtn(false);
  }, [name]);

  const handleStep = () => {
    setStep(step + 1);
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <St.RecommendPage>
      <St.Header>
        <MovePreviousPageBtn />
        친구 정보
      </St.Header>
      <ProgressBar progressRate={progressRate} />
      <St.TitleWrapper>
        <Title title="어떤 친구를 소개해줄거야?" />
        <Title title="너무 궁금해!👀" />
      </St.TitleWrapper>
      {step === 1 ? (
        <>
          <ShortInputBox
            label="친구 이름"
            placeholder="실명을 적어줘. 이름 가운데는 *처리돼"
            value={name}
            onChange={(e) => handleNameInput(e)}
          />
        </>
      ) : (
        <></>
      )}
      <St.NextStepBtnWrapper>
        <St.NextStepBtn type="button" disabled={!activeBtn} onClick={handleStep}>
          다음
        </St.NextStepBtn>
      </St.NextStepBtnWrapper>
    </St.RecommendPage>
  );
}

const St = {
  RecommendPage: styled.main``,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  TitleWrapper: styled.hgroup`
    margin-left: 2.4rem;
    margin-bottom: 2.4rem;
  `,
  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
  `,
  NextStepBtn: styled.button`
    position: absolute;
    bottom: 3.5rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
  `,
};
