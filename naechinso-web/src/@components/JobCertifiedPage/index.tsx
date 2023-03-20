import { useState } from "react";
import styled from "styled-components";

import { WorkCertified } from "../@common";

export default function JobCertifiedPage() {
  const [jobImg, setJobImg] = useState("");

  return (
    <St.JobCertifiedPage>
      <WorkCertified
        title1="👔"
        title2="회사 인증을 부탁해"
        subTitle1="번거롭겠지만 신뢰를 위해 소속 인증이 꼭 필요해."
        subTitle2="사원증 / 명함 / 사업자 등록증 사진을 업로드해줘!"
        state={jobImg}
        setState={setJobImg}
        dir="job"
      />
    </St.JobCertifiedPage>
  );
}

const St = {
  JobCertifiedPage: styled.main``,
};
