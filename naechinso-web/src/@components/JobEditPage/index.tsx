import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { EditHeader, EditImageBox, EditInput, EditTitleBox } from "../@common";
export default function JobEditPage() {
  const location = useLocation();
  const jobGetData = location.state;

  const [jobName, setJobName] = useState(jobGetData.content.jobName);
  const [jobPart, setJobPart] = useState(jobGetData.content.jobPart);
  const [jobImage, setJobImage] = useState(
    `https://elasticbeanstalk-ap-northeast-2-381146100755.s3.ap-northeast-2.amazonaws.com/${jobGetData.content.jobImage}`,
  );

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // input 값을 관리하는 함수
    setState(e.target.value);
  };

  return (
    <St.JobEditPage>
      <EditHeader />
      <St.EditBox>
        <St.EditWrapper>
          <EditTitleBox question="💼 재직 중인 회사정보를 적어줘!" desc1="프리랜서는 프리랜서라고 적어주면 돼" />
          <EditInput label="직장" value={jobName} desc={true} onChange={(e) => handleInput(e, setJobName)} />
          <EditInput label="직무" value={jobPart} onChange={(e) => handleInput(e, setJobPart)} />
        </St.EditWrapper>
        <St.EditWrapper>
          <EditTitleBox
            question="✔️ 회사 인증을 해볼까?"
            desc1="내친소는 신뢰 기반의 서비스라 인증이 필요해."
            desc2="사원증, 명함 또는 사업자등록증을 첨부해줘!"
          />
          <EditImageBox image={jobImage} setImage={setJobImage} dir={jobGetData.type.toLowerCase()} />
        </St.EditWrapper>
      </St.EditBox>
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
