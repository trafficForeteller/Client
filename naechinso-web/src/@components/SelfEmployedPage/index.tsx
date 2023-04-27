import { useEffect, useState } from "react";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { IJobType } from "../../types/member";
import { ConsultantIconBtn, FixedHeader, MoveNextPageBtn, ShortInputBox } from "../@common";

export default function SelfEmployedPage() {
  const [job, setJob] = useState<IJobType>({
    jobName: "자영업자",
    jobPart: "",
    jobLocation: "강남구",
  });
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 jobInfo 초기값으로 세팅
    const jobInfoOfLocal = localStorage.getItem("jobInfo") as string;
    const jobInfo = JSON.parse(jobInfoOfLocal);
    if (jobInfo) {
      setJob({ ...job, jobName: "자영업자", jobPart: jobInfo.jobPart });
      setActiveBtn(true);
    }
  }, []);

  useEffect(() => {
    //  ActiveButton 활성화
    if (job.jobPart.length > 0) setActiveBtn(true);
    else setActiveBtn(false);
  }, [job]);

  const handleJobPartInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 직업을 관리하는 함수
    setJob({ ...job, jobPart: e.target.value });
  };

  const saveJobInfoInLocal = () => {
    // 로컬스토리지에 저장
    localStorage.setItem("jobInfo", JSON.stringify(job));
  };

  return (
    <St.SelfEmployedPage>
      <FixedHeader header="추천인 소개" progressRate={60} title1="💼" title2="어떤 일을 해?" />
      <ShortInputBox
        label="분류"
        placeholder="ex. 프렌치 레스토랑, 꽃집 등"
        value={job.jobPart}
        onChange={handleJobPartInput}
        step={1}
      />

      <ConsultantIconBtn />
      <MoveNextPageBtn
        nextPage={routePaths.SelfEmployedCertified}
        disabled={!activeBtn}
        title="다음"
        handleState={saveJobInfoInLocal}
      />
    </St.SelfEmployedPage>
  );
}

const St = {
  SelfEmployedPage: styled.main`
    padding: 17rem 2rem 0;
  `,
};
