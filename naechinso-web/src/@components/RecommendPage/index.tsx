import { useEffect, useState } from "react";
import styled from "styled-components";

import { stepItemList } from "../../core/recommend/recommend";
import { MovePreviousPageBtn, ShortInputBox, Title } from "../@common";
import ProgressBar from "../@common/ProgressBar";
import RelationType from "./RelationType";

export default function RecommendPage() {
  const [progressRate, setProgressRate] = useState(20);
  const [step, setStep] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [name, setName] = useState("");
  const [relationType, setRelationType] = useState("");
  const [relationDuration, setRelationDuration] = useState("");

  useEffect(() => {
    if (step === 2 || step === 3) setIsModalOpened(true);
  }, [step]);

  useEffect(() => {
    console.log(relationType);
    if (step >= 2 && relationType) setActiveBtn(true);
  }, [relationType]);

  useEffect(() => {
    if (name.length >= 2) setActiveBtn(true);
    else setActiveBtn(false);
  }, [name]);

  const closeRelationModal = (target: string) => {
    setIsModalOpened(false);
    if (target && step === 2) setRelationType(target);
    else if (target && step === 3) setRelationDuration(target);
  };
  const openRelationModal = () => {
    setIsModalOpened(true);
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 친구 이름을 관리하는 함수
    setName(e.target.value);
  };

  const handleStep = () => {
    // 친구정보 step을 관리하는 함수
    setStep(step + 1);
    setActiveBtn(false);
  };

  return (
    <St.RecommendPage isModalOpened={isModalOpened}>
      <St.Header>
        <MovePreviousPageBtn />
        친구 정보
      </St.Header>
      <ProgressBar progressRate={progressRate} />
      <St.TitleWrapper>
        <Title title="어떤 친구를 소개해줄거야?" />
        <Title title="너무 궁금해!👀" />
      </St.TitleWrapper>

      {step >= 3 ? (
        <RelationType
          step={step}
          stepItemList={stepItemList[1]}
          defaultValue={relationDuration}
          isModalOpened={isModalOpened}
          openRelationModal={openRelationModal}
          closeRelationModal={closeRelationModal}
          relationType={relationType}
        />
      ) : (
        <></>
      )}

      {step >= 2 ? (
        <RelationType
          step={step}
          stepItemList={stepItemList[0]}
          defaultValue={relationType}
          isModalOpened={isModalOpened}
          openRelationModal={openRelationModal}
          closeRelationModal={closeRelationModal}
          relationType={relationType}
        />
      ) : (
        <></>
      )}

      <ShortInputBox
        label="친구 이름"
        placeholder="실명을 적어줘. 이름 가운데는 *처리돼"
        value={name}
        onChange={(e) => handleNameInput(e)}
        isModalOpened={isModalOpened}
        step={step}
      />

      <St.NextStepBtnWrapper>
        <St.NextStepBtn type="button" disabled={!activeBtn} onClick={handleStep} isModalOpened={isModalOpened}>
          다음
        </St.NextStepBtn>
      </St.NextStepBtnWrapper>
    </St.RecommendPage>
  );
}

const St = {
  RecommendPage: styled.main<{ isModalOpened: boolean }>`
    background-color: rgba(${({ isModalOpened }) => (isModalOpened ? "0, 0, 0, 0.64" : "")});
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,
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
    position: relative;
    z-index: -1;
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
