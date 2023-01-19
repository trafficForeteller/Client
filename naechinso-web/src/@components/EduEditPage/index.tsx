import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { EditHeader } from "../@common";
import EditQuestionBox from "../@common/EditQuestionBox";

export default function EduEditPage() {
  const location = useLocation();
  const eduGetData = location.state;

  const [eduLevel, setEduLevel] = useState(eduGetData.content.eduLevel);
  const [eduName, setEduName] = useState(eduGetData.content.eduName);
  const [eduMajor, setEduMajor] = useState(eduGetData.content.eduMajor);

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
          <EditQuestionBox question="💼 재직 중인 회사정보를 적어줘!" desc1="프리랜서는 프리랜서라고 적어주면 돼" />
        </St.EditWrapper>
        <St.EditWrapper>
          <EditQuestionBox
            question="✔️ 회사 인증을 해볼까?"
            desc1="내친소는 신뢰 기반의 서비스라 인증이 필요해."
            desc2="사원증, 명함 또는 사업자등록증을 첨부해줘!"
          />
        </St.EditWrapper>
      </St.EditBox>
    </St.EduEditPage>
  );
}

const St = {
  EduEditPage: styled.main``,
  EditBox: styled.section`
    padding: 4rem 2rem 0;
    background-color: ${({ theme }) => theme.colors.neural};
  `,
  EditWrapper: styled.article``,
};
