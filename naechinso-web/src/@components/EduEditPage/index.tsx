import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { EditHeader } from "../@common";
import EditImageBox from "../@common/EditImageBox";
import EditInput from "../@common/EditInput";
import EditQuestionBox from "../@common/EditQuestionBox";

export default function EduEditPage() {
  const location = useLocation();
  const eduGetData = location.state;

  const [eduLevel, setEduLevel] = useState(eduGetData.content.eduLevel);
  const [eduName, setEduName] = useState(eduGetData.content.eduName);
  const [eduMajor, setEduMajor] = useState(eduGetData.content.eduMajor);
  const [eduImage, setEduImage] = useState(
    `https://elasticbeanstalk-ap-northeast-2-381146100755.s3.ap-northeast-2.amazonaws.com/${eduGetData.content.eduImage}`,
  );

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // input 값을 관리하는 함수
    setState(e.target.value);
  };

  return (
    <St.EduEditPage>
      <EditHeader />
      <St.EditBox>
        <St.EditWrapper>
          <EditQuestionBox question="🏤 졸업 또는 재학 중인 학교정보를 적어줘!" />
          <EditInput label="학교명" value={eduName} desc={true} onChange={(e) => handleInput(e, setEduName)} />
          <EditInput label="전공" value={eduMajor} onChange={(e) => handleInput(e, setEduMajor)} />
        </St.EditWrapper>
        <St.EditWrapper>
          <EditQuestionBox
            question="✔️ 학교 인증을 해볼까?"
            desc1="내친소는 신뢰 기반의 서비스라 인증이 필요해."
            desc2="학생증, 재학증명서 또는 학교 포털 캡쳐를 첨부해줘!"
          />
          <EditImageBox image={eduImage} setImage={setEduImage} dir={eduGetData.type.toLowerCase()} />
        </St.EditWrapper>
      </St.EditBox>
    </St.EduEditPage>
  );
}

const St = {
  EduEditPage: styled.main``,
  EditBox: styled.section`
    padding: 0.2rem 2rem 14rem;
    background-color: ${({ theme }) => theme.colors.neural};
  `,
  EditWrapper: styled.article``,
};
