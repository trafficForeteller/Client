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
        subTitle1="번거롭겠지만 신뢰를 위해 소속 인증이 필요해."
        subTitle2="사진 등 회사를 인증할 수 있는 자료를 업로드해줘!"
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
