import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { patchMemberJob, postMemberReissue } from "../../apis/member.api";
import { routePaths } from "../../core/routes/path";
import { IPatchJob } from "../../types/member";
import { ConsultantIconBtn, EditHeader, EditImageBox, EditInput, EditTitleBox, MoveNextPageBtn } from "../@common";

export default function JobEditPage() {
  const location = useLocation();
  const jobGetData = location.state;

  const [jobName, setJobName] = useState(jobGetData.content.jobName);
  const [jobPart, setJobPart] = useState(jobGetData.content.jobPart);
  const [jobImage, setJobImage] = useState(jobGetData.content.jobImage);
  const navigate = useNavigate();

  const [patchJob, setPatchJob] = useState<IPatchJob>({
    jobName: jobName,
    jobPart: jobPart,
    jobImage: jobImage,
    jobLocation: "강남",
  });

  useEffect(() => {
    if (jobGetData.content.jobImage.startsWith("https://elasticbeanstalk")) setJobImage(jobImage);
    else
      setJobImage(
        `https://elasticbeanstalk-ap-northeast-2-381146100755.s3.ap-northeast-2.amazonaws.com/${jobGetData.content.jobImage}`,
      );
  }, []);

  useEffect(() => {
    setPatchJob({
      ...patchJob,
      jobName: jobName,
      jobPart: jobPart,
      jobImage: jobImage,
    });
  }, [jobName, jobPart, jobImage]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // input 값을 관리하는 함수
    setState(e.target.value);
  };

  const patchEditJobData = async () => {
    await patchMemberJob(
      patchJob,
      localStorage.getItem("accessToken"),
      handleSuccessRequest,
      handleFailRequest,
      handleReissuePatchEditJobData,
    );
  };

  const handleReissuePatchEditJobData = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    patchEditJobData();
  };

  const handleSuccessRequest = () => {
    navigate(routePaths.Pending);
  };

  const handleFailRequest = (errorMessage: string) => {
    // 서버 요청 실패 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  return (
    <St.JobEditPage>
      <EditHeader />
      <St.EditBox>
        <St.EditWrapper>
          <EditTitleBox
            question="💼 재직 중인 회사정보를 적어줘!"
            desc1="프리랜서는 프리랜서라고 적어주면 돼"
            isModalOpened={false}
          />
          <EditInput
            isModalOpened={false}
            label="직장"
            value={jobName}
            desc={true}
            onChange={(e) => handleInput(e, setJobName)}
          />
          <EditInput isModalOpened={false} label="직무" value={jobPart} onChange={(e) => handleInput(e, setJobPart)} />
        </St.EditWrapper>
        <St.EditWrapper>
          <EditTitleBox
            question="✔️ 회사 인증을 해볼까?"
            desc1="내친소는 신뢰 기반의 서비스라 인증이 필요해."
            desc2="사원증, 명함 또는 사업자등록증을 첨부해줘!"
            isModalOpened={false}
          />
          <EditImageBox image={jobImage} setImage={setJobImage} dir={jobGetData.type.toLowerCase()} />
        </St.EditWrapper>
      </St.EditBox>

      <ConsultantIconBtn />
      <MoveNextPageBtn title="수정 완료" disabled={false} handleState={patchEditJobData} />
    </St.JobEditPage>
  );
}

const St = {
  JobEditPage: styled.main``,
  EduEditPage: styled.main``,
  EditBox: styled.section`
    padding: 4rem 2rem 14rem;
    background-color: ${({ theme }) => theme.colors.neural};
  `,
  EditWrapper: styled.article``,
};
