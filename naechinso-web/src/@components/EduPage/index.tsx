import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { IEduType } from "../../types/member";
import { FixedHeader, ShortInputBox, ToggleInputBox } from "../@common";
export default function EduPage() {
  const [step, setStep] = useState(1);
  const [eduLevel, setEduLevel] = useState("");
  const [eduName, setEduName] = useState("");
  const [eduMajor, setEduMajor] = useState("");
  const [isSelectionModalOpened, setIsSelectionModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const navigate = useNavigate();

  const [edu, setEdu] = useState<IEduType>({
    eduName: "",
    eduLevel: "",
    eduMajor: "",
  });

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 eduInfo 초기값으로 세팅
    const eduInfoOfLocal = localStorage.getItem("eduInfo") as string;
    const eduInfo = JSON.parse(eduInfoOfLocal);
    if (eduInfo) {
      setStep(3);
      setEduName(eduInfo.eduName);
      setEduMajor(eduInfo.eduMajor);
      setEduLevel(eduInfo.eduLevel);
      setEdu({ eduName: eduInfo.eduName, eduLevel: eduInfo.eduLevel, eduMajor: eduInfo.eduMajor });
      setActiveBtn(true);
    }
  }, []);

  useEffect(() => {
    // step 4일 때 페이지 이동
    window.scrollTo(0, 0);
    if (step === 4) {
      saveEduInfoInLocal();
      navigate(`${routePaths.EduCertified}`);
    }
  }, [step]);

  useEffect(() => {
    // step에 따른 ActiveButton 활성화
    if (step === 1 && eduLevel.length >= 2) setActiveBtn(true);
    else if (step === 2 && eduLevel.length >= 2 && eduName.length >= 2) setActiveBtn(true);
    else if (step === 3 && eduLevel.length >= 2 && eduName.length >= 2 && eduMajor.length >= 2) setActiveBtn(true);
    else setActiveBtn(false);
  }, [eduLevel, eduName, eduMajor]);

  useEffect(() => {
    checkIsModalOpened();
  }, [isSelectionModalOpened]);

  const checkIsModalOpened = () => {
    if (isSelectionModalOpened) return setIsModalOpened(true);
    else return setIsModalOpened(false);
  };

  const handleNameInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // 친구 이름을 관리하는 함수
    setState(e.target.value);
  };

  const handleStep = () => {
    // 친구정보 step을 관리하는 함수
    setEdu({
      ...edu,
      eduName: eduName,
      eduLevel: eduLevel,
      eduMajor: eduMajor,
    });
    setStep(step + 1);
    setActiveBtn(false);
  };

  const saveEduInfoInLocal = () => {
    // 로컬스토리지에 저장
    localStorage.setItem("eduInfo", JSON.stringify(edu));
  };

  return (
    <St.EduPage isModalOpened={isModalOpened}>
      <FixedHeader
        header="추천인 소개"
        progressRate={60}
        title1="🏫"
        title2="학교는 어디 다녀?"
        isModalOpened={isModalOpened}
      />

      {step >= 3 ? (
        <>
          <ShortInputBox
            label="전공"
            placeholder="전공을 적어줘"
            value={eduMajor}
            onChange={(e) => handleNameInput(e, setEduMajor)}
            isModalOpened={isModalOpened}
            step={step}
          />
        </>
      ) : (
        <></>
      )}

      {step >= 2 ? (
        <>
          <ShortInputBox
            label="학교명"
            placeholder="학교 이름을 적어줘"
            value={eduName}
            onChange={(e) => handleNameInput(e, setEduName)}
            isModalOpened={isModalOpened}
            step={step}
          />
          <St.EduNameEx>ex. 연세(X) 연대(X) 연세대학교(O)</St.EduNameEx>
        </>
      ) : (
        <></>
      )}

      <ToggleInputBox
        label="학위"
        placeholder="학위를 선택해줘"
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
    padding: 17rem 2rem 0;
    height: 100%;
    z-index: 2;

    overflow: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};
  `,
  EduNameEx: styled.article`
    margin: 0.6rem 2.1rem 0.9rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption6};
  `,
  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    height: 11rem;
  `,
  NextStepBtn: styled.button<{ isModalOpened: boolean }>`
    visibility: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};

    bottom: 3.5rem;
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
