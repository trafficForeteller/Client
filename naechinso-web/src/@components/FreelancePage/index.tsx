import { useEffect, useState } from "react";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { IJobType } from "../../types/member";
import { FixedHeader, MoveNextPageBtn, ShortInputBox } from "../@common";

export default function FreelancePage() {
  const [job, setJob] = useState<IJobType>({
    jobName: "프리랜서",
    jobPart: "",
    jobLocation: "강남구",
  });
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 jobInfo 초기값으로 세팅
    const jobInfoOfLocal = localStorage.getItem("jobInfo") as string;
    const jobInfo = JSON.parse(jobInfoOfLocal);
    if (jobInfo) {
      setJob({ ...job, jobName: "프리랜서", jobPart: jobInfo.jobPart });
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

  return (
    <St.FreelancePage>
      <FixedHeader header="추천인 소개" progressRate={60} title1="💼" title2="어떤 영역에서 활동하고 있어?" />
      <ShortInputBox
        label="활동 영역"
        placeholder="ex. 디자인, 작곡 등"
        value={job.jobPart}
        onChange={handleJobPartInput}
        step={1}
      />
      <MoveNextPageBtn nextPage={routePaths.RecommendLanding} disabled={!activeBtn} title="다음" />
    </St.FreelancePage>
  );
}

// 프리랜서 페이지는 인증이 없으므로 인증사진없이 post해줘야 함

const St = {
  FreelancePage: styled.main`
    padding: 18rem 2rem 0;
  `,
};
