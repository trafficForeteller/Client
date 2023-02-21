import { useState } from "react";
import styled from "styled-components";

import { WorkCertified } from "../@common";
export default function SelfEmployedCertifiedPage() {
  const [jobImg, setJobImg] = useState("");

  return (
    <St.SelfEmployedCertifiedPage>
      <WorkCertified
        title1="👩‍🎓"
        title2="가게 인증을 부탁해"
        subTitle1="번거롭겠지만 신뢰를 위해 소속 인증이 꼭 필요해."
        subTitle2="사업자 등록증, 가게 실물 사진 등을 업로드해줘!"
        state={jobImg}
        setState={setJobImg}
        dir="job"
      />
    </St.SelfEmployedCertifiedPage>
  );
}

const St = {
  SelfEmployedCertifiedPage: styled.main``,
};
