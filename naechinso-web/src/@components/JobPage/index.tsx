import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcSheild } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IJobType } from "../../types/member";
import { FixedHeader, ShortInputBox } from "../@common";

export default function JobPage() {
  const [step, setStep] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
  const navigate = useNavigate();

  const [job, setJob] = useState<IJobType>({
    jobName: "",
    jobPart: "",
    jobLocation: "",
  });

  useEffect(() => {
    // step에 따라 다른 모달 open
    if (step === 3) {
      navigate(`${routePaths.JobCertified}`, { state: job });
    }
  }, [step]);

  useEffect(() => {
    // step에 따른 ActiveButton 활성화
    if (job.jobName.length > 0) setActiveBtn(true);
    else if (step >= 2 && job.jobPart.length > 0) setActiveBtn(true);
    else setActiveBtn(false);
  }, [job]);

  const handleJobInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 직업을 관리하는 함수
    setJob({ ...job, jobName: e.target.value });
  };

  const handleJobGroupInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 직업을 관리하는 함수
    setJob({ ...job, jobPart: e.target.value });
  };

  const handleStep = () => {
    // 친구정보 step을 관리하는 함수
    setStep(step + 1);
    setActiveBtn(false);
  };

  return (
    <St.JobPage>
      <FixedHeader
        header="추천인 소개"
        progressRate={60}
        title1="💼"
        title2="어떤 일을 해?"
        subTitle1="프리랜서는 프리랜서라고 적어주면 돼!"
      />

      <St.SheildBox>
        <IcSheild />
        <St.SheildWrapper>
          <St.SheildDesc>만약 회사명을 밝히고 싶지 않다면 업종으로 적어줘</St.SheildDesc>
          <St.SheildExample>ex. 한국은행 =&gt; 금융공기업 / 당근마켓 =&gt; 중고거래 스타트업</St.SheildExample>
        </St.SheildWrapper>
      </St.SheildBox>

      {step >= 2 ? (
        <ShortInputBox
          label="직무"
          placeholder="무슨 일을 하고있어?"
          value={job.jobPart}
          onChange={handleJobGroupInput}
          step={step}
        />
      ) : (
        <></>
      )}

      <ShortInputBox
        label="직장"
        placeholder="재직중인 회사명을 적어줘"
        value={job.jobName}
        onChange={handleJobInput}
        step={step}
      />

      <St.NextStepBtnWrapper>
        <St.NextStepBtn type="button" disabled={!activeBtn} onClick={handleStep}>
          다음
        </St.NextStepBtn>
      </St.NextStepBtnWrapper>
    </St.JobPage>
  );
}

const St = {
  JobPage: styled.main`
    height: 100%;
    padding-top: 22rem;
  `,
  SheildBox: styled.section`
    width: 32.7rem;
    height: 6.4rem;
    border-radius: 8px;
    margin: 0 auto;
    margin-bottom: 2.4rem;
    padding: 1.2rem 0.5rem;
    background-color: ${({ theme }) => theme.colors.blue40};

    display: flex;
    align-items: center;
    gap: 0.55rem;
  `,
  SheildWrapper: styled.article``,
  SheildDesc: styled.p`
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.fonts.caption4}
  `,
  SheildExample: styled.p`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption3}
  `,
  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
  `,
  NextStepBtn: styled.button`
    position: fixed;

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
