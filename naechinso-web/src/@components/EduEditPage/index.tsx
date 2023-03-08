import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { patchMemberEdu, postMemberReissue } from "../../apis/member.api";
import { routePaths } from "../../core/routes/path";
import { IPatchEdu } from "../../types/member";
import { EditHeader, EditImageBox, EditInput, EditTitleBox, EditToggleInputBox, MoveNextPageBtn } from "../@common";

export default function EduEditPage() {
  const location = useLocation();
  const eduGetData = location.state;
  const [isSelectionModalOpened, setIsSelectionModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [eduLevel, setEduLevel] = useState(eduGetData.content.eduLevel);
  const [eduName, setEduName] = useState(eduGetData.content.eduName);
  const [eduMajor, setEduMajor] = useState(eduGetData.content.eduMajor);
  const [eduImage, setEduImage] = useState(eduGetData.content.eduImage);
  const navigate = useNavigate();

  const [patchEdu, setPatchEdu] = useState<IPatchEdu>({
    eduName: eduName,
    eduLevel: eduLevel,
    eduMajor: eduMajor,
    eduImage: eduImage,
  });

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/edit/edu" },
    });

    if (eduGetData.content.eduImage.startsWith("https://elasticbeanstalk")) setEduImage(eduImage);
    else
      setEduImage(
        `https://elasticbeanstalk-ap-northeast-2-381146100755.s3.ap-northeast-2.amazonaws.com/${eduGetData.content.eduImage}`,
      );
  }, []);

  useEffect(() => {
    setPatchEdu({
      ...patchEdu,
      eduName: eduName,
      eduLevel: eduLevel,
      eduMajor: eduMajor,
      eduImage: eduImage,
    });
  }, [eduName, eduLevel, eduMajor, eduImage]);

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

  const patchEditEduData = async () => {
    await patchMemberEdu(
      patchEdu,
      localStorage.getItem("accessToken"),
      handleSuccessRequest,
      handleFailRequest,
      handleReissuePatchCertifiedData,
    );
  };

  const handleReissuePatchCertifiedData = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    patchEditEduData();
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

      <MoveNextPageBtn title="수정 완료" disabled={false} handleState={patchEditEduData} />
    </St.EduEditPage>
  );
}

const St = {
  EduEditPage: styled.main<{ isModalOpened: boolean }>`
    background-color: rgba(${({ isModalOpened }) => (isModalOpened ? "0, 0, 0, 0.64" : "")});
    overflow: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};
    height: 100%;
    width: 100%;
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
