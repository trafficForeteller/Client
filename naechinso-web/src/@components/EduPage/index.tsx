import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { patchMemberEdu, postMemberReissue } from "../../apis/member.api";
import { routePaths } from "../../core/routes/path";
import { IPatchEdu } from "../../types/member";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import { ConsultantTextBtn, FixedHeader, ShortInputBox, ToggleInputBox } from "../@common";

export default function EduPage() {
  const [eduLevel, setEduLevel] = useState("");
  const [eduName, setEduName] = useState("");
  const [eduMajor, setEduMajor] = useState("");
  const [isSelectionModalOpened, setIsSelectionModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const navigate = useNavigate();

  const [edu, setEdu] = useState<IPatchEdu>({
    eduImage: null,
    eduName: "",
    eduLevel: "",
    eduMajor: "",
  });

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 eduInfo 초기값으로 세팅
    const eduInfoOfLocal = localStorage.getItem("eduInfo") as string;
    const eduInfo = JSON.parse(eduInfoOfLocal);
    if (eduInfo) {
      setEduName(eduInfo.eduName);
      setEduMajor(eduInfo.eduMajor);
      setEduLevel(eduInfo.eduLevel);
      setEdu({ ...edu, eduName: eduInfo.eduName, eduLevel: eduInfo.eduLevel, eduMajor: eduInfo.eduMajor });
      setActiveBtn(true);
    }
  }, []);

  const patchCertifiedData = async () => {
    await patchMemberEdu(
      edu,
      localStorage.getItem("accessToken"),
      handleSuccessRequest,
      handleFailRequest,
      handleReissuePatchCertifiedData,
    );
  };

  const handleSuccessRequest = () => {
    navigate(routePaths.RecommendLanding);
  };

  const handleFailRequest = (errorMessage: string) => {
    // 서버 요청 실패 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  const handleReissuePatchCertifiedData = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    patchCertifiedData();
  };

  useEffect(() => {
    // step에 따른 ActiveButton 활성화
    setEdu({
      ...edu,
      eduName: eduName,
      eduLevel: eduLevel,
      eduMajor: eduMajor,
    });
    if (eduLevel.length >= 2 && eduName.length >= 2 && eduMajor.length >= 2) setActiveBtn(true);
    else setActiveBtn(false);
  }, [eduLevel, eduName, eduMajor]);

  useEffect(() => {
    checkIsModalOpened();
  }, [isSelectionModalOpened]);

  const checkIsModalOpened = () => {
    if (isSelectionModalOpened) return setIsModalOpened(true);
    else return setIsModalOpened(false);
  };

  const handleNameInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // 친구 이름을 관리하는 함수
    setState(e.target.value);
  };

  const handleEduData = () => {
    // 친구정보 step을 관리하는 함수
    if (eduLevel.length >= 2 && eduName.length >= 2 && eduMajor.length >= 2) {
      saveEduInfoInLocal();
      patchCertifiedData();
    }
  };

  const saveEduInfoInLocal = () => {
    // 로컬스토리지에 저장
    localStorage.setItem("eduInfo", JSON.stringify(edu));
  };

  return (
    <St.EduPage isModalOpened={isModalOpened}>
      <FixedHeader header="자기 소개" title1="🏫" title2="학교는 어디 다녀?" isModalOpened={isModalOpened} />

      <St.EduWrapper>
        <ToggleInputBox
          label="학위"
          placeholder="학위"
          state={eduLevel}
          setState={setEduLevel}
          isSelectionModalOpened={isSelectionModalOpened}
          setIsSelectionModalOpened={setIsSelectionModalOpened}
          isModalOpened={isModalOpened}
        />
        <St.SchoolWrapper>
          <ShortInputBox
            label="학교명"
            placeholder="학교 이름"
            value={eduName}
            onChange={(e) => handleNameInput(e, setEduName)}
            isModalOpened={isModalOpened}
          />
          <St.EduNameEx>ex. 연세(X) 연대(X) 연세대학교(O)</St.EduNameEx>
        </St.SchoolWrapper>
      </St.EduWrapper>
      <ShortInputBox
        label="전공"
        placeholder="전공을 적어줘"
        value={eduMajor}
        onChange={(e) => handleNameInput(e, setEduMajor)}
        isModalOpened={isModalOpened}
      />
      <St.EduNameEx>고졸은 전공에 ‘없음’이라고 적어줘도 돼</St.EduNameEx>
      <ConsultantTextBtn />
      <St.NextStepBtnWrapper>
        <St.NextStepBtn
          type="button"
          disabled={!activeBtn}
          onClick={handleEduData}
          isModalOpened={isModalOpened}
          className={GTM_CLASS_NAME.recommenderSuccessEdu}>
          다음
        </St.NextStepBtn>
      </St.NextStepBtnWrapper>
    </St.EduPage>
  );
}

const St = {
  EduPage: styled.main<{ isModalOpened: boolean }>`
    background-color: rgba(${({ isModalOpened }) => (isModalOpened ? "0, 0, 0, 0.64" : "")});
    padding: 15rem 2rem 0;
    height: 100%;
    z-index: 2;

    overflow: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};
  `,
  EduWrapper: styled.section`
    display: flex;
    gap: 1.2rem;
  `,
  SchoolWrapper: styled.span``,
  EduNameEx: styled.p`
    margin-top: 0.8rem;
    position: relative;
    z-index: -1;
    width: 100%;
    color: ${({ theme }) => theme.colors.brown};
    ${({ theme }) => theme.fonts.caption6};
  `,
  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    height: 11rem;
  `,
  NextStepBtn: styled.button<{ isModalOpened: boolean }>`
    visibility: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};

    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_16};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
