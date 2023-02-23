import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { patchMemberJob, postMemberReissue } from "../../apis/member.api";
import { routePaths } from "../../core/routes/path";
import { IJobType } from "../../types/member";
import { FixedHeader, MoveNextPageBtn, ShortInputBox } from "../@common";

export default function FreelancePage() {
  const [job, setJob] = useState<IJobType>({
    jobName: "프리랜서",
    jobPart: "",
    jobLocation: null,
    jobImage: null,
  });
  const [activeBtn, setActiveBtn] = useState(false);
  const navigate = useNavigate();

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

  const patchJobData = async () => {
    if (job.jobPart !== "")
      await patchMemberJob(
        job,
        localStorage.getItem("accessToken"),
        handleSuccessRequest,
        handleFailRequest,
        handleReissuePatchCertifiedData,
      );
  };

  const handleReissuePatchCertifiedData = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    patchJobData();
  };

  const handleSuccessRequest = () => {
    navigate(routePaths.RecommendLanding);
  };

  const handleFailRequest = (errorMessage: string) => {
    // 서버 요청 실패 시
    console.log(errorMessage);
    navigate(routePaths.Error);
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
      <MoveNextPageBtn disabled={!activeBtn} title="다음" handleState={patchJobData} />
    </St.FreelancePage>
  );
}

const St = {
  FreelancePage: styled.main`
    padding: 17rem 2rem 0;
  `,
};
