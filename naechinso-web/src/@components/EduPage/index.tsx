import { useEffect, useState } from "react";
import styled from "styled-components";

import { IEduType } from "../../types/member";
import { FixedHeader, ShortInputBox } from "../@common";
import ToggleInputBox from "../@common/ToggleInputBox";

export default function EduPage() {
  const [step, setStep] = useState(1);
  const [postEdu, setPostEdu] = useState<IEduType>({
    eduName: "",
    eduLevel: "",
    eduMajor: "",
  });
  const [eduLevel, setEduLevel] = useState("");

  const [isSelectionModalOpened, setIsSelectionModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    // step에 따른 ActiveButton 활성화
    if (eduLevel.length >= 2) setActiveBtn(true);
    // else if (step >= 2 && postRelationType) setActiveBtn(true);
    // else if (step >= 3 && relationDuration) setActiveBtn(true);
    else setActiveBtn(false);
  }, [eduLevel]);
  useEffect(() => {
    checkIsModalOpened();
  }, [isSelectionModalOpened]);

  const checkIsModalOpened = () => {
    if (isSelectionModalOpened) return setIsModalOpened(true);
    else return setIsModalOpened(false);
  };

  const handleStep = () => {
    // 친구정보 step을 관리하는 함수
    setStep(step + 1);
    setActiveBtn(false);
  };

  return (
    <St.EduPage isModalOpened={isModalOpened}>
      <FixedHeader header="추천인 소개" progressRate={60} title1="🏫" title2="학교는 어디 다녀?" />

      <ToggleInputBox
        label="학위"
        placeholder="학위를 선택해줘"
        step={step}
        state={eduLevel}
        setState={setEduLevel}
        isSelectionModalOpened={isSelectionModalOpened}
        setIsSelectionModalOpened={setIsSelectionModalOpened}
        isModalOpened={isModalOpened}
      />

      <St.NextStepBtnWrapper>
        <St.NextStepBtn type="button" disabled={!activeBtn} onClick={handleStep} isModalOpened={isModalOpened}>
          다음
        </St.NextStepBtn>
      </St.NextStepBtnWrapper>
    </St.EduPage>
  );
}

const St = {
  EduPage: styled.main<{ isModalOpened: boolean }>`
    background-color: rgba(${({ isModalOpened }) => (isModalOpened ? "0, 0, 0, 0.64" : "")});
    padding-top: 17rem;
    height: 100%;
    z-index: 1;
  `,
  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
  `,
  NextStepBtn: styled.button<{ isModalOpened: boolean }>`
    position: absolute;
    visibility: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};

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
