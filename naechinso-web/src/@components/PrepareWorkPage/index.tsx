import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { patchMemberJob, postMemberReissue } from "../../apis/member.api";
import { routePaths } from "../../core/routes/path";
import { IJobType } from "../../types/member";
import { FixedHeader, MoveNextPageBtn } from "../@common";

export default function PrepareWorkPage() {
  const [job, setJob] = useState<IJobType>({
    jobName: "준비 중",
    jobPart: "",
    jobLocation: null,
    jobImage: null,
  });
  const [activeBtn, setActiveBtn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/recommender/prepareWork" },
    });

    // 새로고침 시 이전에 local에 저장된 jobInfo 초기값으로 세팅
    const jobInfoOfLocal = localStorage.getItem("jobInfo") as string;
    const jobInfo = JSON.parse(jobInfoOfLocal);
    if (jobInfo) {
      setJob({ ...job, jobPart: jobInfo.jobPart });
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
        handleReissuePatchMemberJob,
      );
  };

  const handleReissuePatchMemberJob = async () => {
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
    <St.PrepareWorkPage>
      <FixedHeader header="추천인 소개" progressRate={60} title1="💼" title2="준비 중인 일을 알려줘!" />
      <St.InputBox>
        <St.Label>분야</St.Label>
        <St.InputWrapper>
          <St.Input placeholder="ex. 디자인, 임용고시 등" value={job.jobPart} onChange={(e) => handleJobPartInput(e)} />
          <St.Ready>준비 중</St.Ready>
        </St.InputWrapper>
      </St.InputBox>
      <MoveNextPageBtn disabled={!activeBtn} title="다음" handleState={patchJobData} />
    </St.PrepareWorkPage>
  );
}

const St = {
  PrepareWorkPage: styled.main`
    padding: 17rem 2rem 0;
  `,
  InputBox: styled.section`
    width: 33.5rem;
    height: 8rem;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 1.6rem auto 0;
    position: relative;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  Label: styled.p`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.body2};
  `,
  InputWrapper: styled.article`
    display: flex;
    align-items: center;
  `,
  Input: styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
    justify-content: center;
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
  Ready: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
    width: 5.5rem;
  `,
};
