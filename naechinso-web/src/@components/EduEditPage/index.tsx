import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { EditHeader, EditImageBox, EditInput, EditTitleBox, EditToggleInputBox, MoveNextPageBtn } from "../@common";
export default function EduEditPage() {
  const location = useLocation();
  const eduGetData = location.state;
  const [isSelectionModalOpened, setIsSelectionModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [eduLevel, setEduLevel] = useState(eduGetData.content.eduLevel);
  const [eduName, setEduName] = useState(eduGetData.content.eduName);
  const [eduMajor, setEduMajor] = useState(eduGetData.content.eduMajor);
  const [eduImage, setEduImage] = useState(
    `https://elasticbeanstalk-ap-northeast-2-381146100755.s3.ap-northeast-2.amazonaws.com/${eduGetData.content.eduImage}`,
  );

  useEffect(() => {
    checkIsModalOpened();
  }, [isSelectionModalOpened]);

  const checkIsModalOpened = () => {
    if (isSelectionModalOpened) return setIsModalOpened(true);
    else return setIsModalOpened(false);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // input 값을 관리하는 함수
    setState(e.target.value);
  };

  return (
    <St.EduEditPage isModalOpened={isModalOpened}>
      <EditHeader />
      <St.EditBox isModalOpened={isModalOpened}>
        <St.EditWrapper>
          <EditTitleBox question="🏤 졸업 또는 재학 중인 학교정보를 적어줘!" isModalOpened={isModalOpened} />
          <St.EditInputWrapper>
            <EditToggleInputBox
              label="학위"
              state={eduLevel}
              setState={setEduLevel}
              isSelectionModalOpened={isSelectionModalOpened}
              setIsSelectionModalOpened={setIsSelectionModalOpened}
              isModalOpened={isModalOpened}
            />
            <EditInput
              label="학교명"
              value={eduName}
              desc={true}
              isModalOpened={isModalOpened}
              onChange={(e) => handleInput(e, setEduName)}
            />
          </St.EditInputWrapper>

          <EditInput
            label="전공"
            value={eduMajor}
            isModalOpened={isModalOpened}
            onChange={(e) => handleInput(e, setEduMajor)}
          />
        </St.EditWrapper>
        <St.EditWrapper>
          <EditTitleBox
            question="✔️ 학교 인증을 해볼까?"
            desc1="내친소는 신뢰 기반의 서비스라 인증이 필요해."
            desc2="학생증, 재학증명서 또는 학교 포털 캡쳐를 첨부해줘!"
            isModalOpened={isModalOpened}
          />
          <EditImageBox image={eduImage} setImage={setEduImage} dir={eduGetData.type.toLowerCase()} />
        </St.EditWrapper>
      </St.EditBox>

      <MoveNextPageBtn nextPage={routePaths.Pending} title="수정 완료" inputActive={false} />
    </St.EduEditPage>
  );
}

const St = {
  EduEditPage: styled.main<{ isModalOpened: boolean }>`
    background-color: rgba(${({ isModalOpened }) => (isModalOpened ? "0, 0, 0, 0.64" : "")});
    overflow: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};
    height: 100%;
  `,

  EditBox: styled.section<{ isModalOpened: boolean }>`
    padding: 0.2rem 2rem 14rem;
    background-color: ${({ theme, isModalOpened }) => (isModalOpened ? "" : theme.colors.neural)};
  `,
  EditWrapper: styled.article``,
  EditInputWrapper: styled.article`
    display: flex;
    gap: 1rem;
  `,
};
