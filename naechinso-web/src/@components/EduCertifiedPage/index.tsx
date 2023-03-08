import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import styled from "styled-components";

import { WorkCertified } from "../@common";

export default function EduCertifiedPage() {
  const [eduImg, setEduImg] = useState("");

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/recommender/edu/certified" },
    });
  }, []);

  return (
    <St.EduCertifiedPage>
      <WorkCertified
        title1="👩‍🎓"
        title2="학교 인증을 부탁해"
        subTitle1="번거롭겠지만 신뢰를 위해 소속 인증이 꼭 필요해."
        subTitle2="학생증, 재학증명서 또는 학교 포털 캡쳐를 첨부해줘!"
        state={eduImg}
        setState={setEduImg}
        dir="edu"
      />
    </St.EduCertifiedPage>
  );
}

const St = {
  EduCertifiedPage: styled.main``,
};
