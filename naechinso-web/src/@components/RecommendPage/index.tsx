import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postRecommendFriendInfo } from "../../apis/recommend.api";
import { MovePreviousPageBtn, ShortInputBox, Title } from "../@common";
import ProgressBar from "../@common/ProgressBar";
import PhoneNumInputBox from "./PhoneNumInput";
import RelationDurationInput from "./RecommendDurationInput";
import RecommendLandingSplash from "./RecommendLandingSplash";
import RelationTypeInput from "./RecommendTypeInput";

export default function RecommendPage() {
  const [alert, setAlert] = useState(true);
  const [progressRate, setProgressRate] = useState(20);
  const [step, setStep] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
  const navigate = useNavigate();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isTypeModalOpened, setIsTypeModalOpened] = useState(false);
  const [isDurationModalOpened, setIsDurationModalOpened] = useState(false);

  const [name, setName] = useState("");
  const [relationType, setRelationType] = useState("");
  const [relationEtc, setRelationEtc] = useState("");
  const [postRelationType, setPostRelationType] = useState("");
  const [relationDuration, setRelationDuration] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [postPhoneNum, setPostPhoneNum] = useState({ phoneNumber: "" });

  const [postFriendInfo, setPostFriendInfo] = useState({
    phone: "",
    name: "",
    meet: "",
    period: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });

  useEffect(() => {
    checkIsModalOpened();
  }, [isTypeModalOpened, isDurationModalOpened]);

  useEffect(() => {
    // step에 따라 다른 모달 open
    if (step === 2) setIsTypeModalOpened(true);
    else if (step === 3) setIsDurationModalOpened(true);
    else if (step === 5) {
      navigate("/recommend/keyword", { state: { setProgressRate: setProgressRate } });
      handleFriendInfo();
    }
  }, [step]);

  const handleFriendInfo = async () => {
    // 친구의 기본정보 POST
    const userData = await postRecommendFriendInfo(postFriendInfo, localStorage.getItem("accessToken"));
    userData && localStorage.setItem("uuid", userData["uuid"]);
  };

  useEffect(() => {
    // step에 따른 ActiveButton 활성화
    if (name.length >= 2) setActiveBtn(true);
    else if (step >= 2 && postRelationType) setActiveBtn(true);
    else if (step >= 3 && relationDuration) setActiveBtn(true);
    else setActiveBtn(false);
  }, [name, relationType, relationDuration]);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 친구 이름을 관리하는 함수
    setName(e.target.value);
  };

  const checkIsModalOpened = () => {
    if (isTypeModalOpened || isDurationModalOpened) return setIsModalOpened(true);
    else return setIsModalOpened(false);
  };

  const handleStep = () => {
    // 친구정보 step을 관리하는 함수
    setPostFriendInfo({
      ...postFriendInfo,
      name: name,
      meet: postRelationType,
      period: relationDuration,
      phone: postPhoneNum.phoneNumber,
    });
    setStep(step + 1);
    setActiveBtn(false);
  };

  return (
    <>
      {alert ? (
        <RecommendLandingSplash />
      ) : (
        <St.RecommendPage isModalOpened={isModalOpened}>
          <St.Header>
            <MovePreviousPageBtn />
            친구 정보
          </St.Header>
          <ProgressBar progressRate={progressRate} />
          <St.TitleWrapper>
            <Title title="어떤 친구를 소개해줄거야?" />
            <Title title="너무 궁금해!👀" />
          </St.TitleWrapper>

          {step >= 4 ? (
            <PhoneNumInputBox
              label="친구의 휴대폰 번호"
              placeholder="0000 0000"
              phoneNum={phoneNum}
              setPhoneNum={setPhoneNum}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              isModalOpened={isModalOpened}
              setPostPhoneNum={setPostPhoneNum}
            />
          ) : (
            <></>
          )}

          {step >= 3 ? (
            <RelationDurationInput
              step={step}
              relationDuration={relationDuration}
              isDurationModalOpened={isDurationModalOpened}
              setRelationDuration={setRelationDuration}
              setIsDurationModalOpened={setIsDurationModalOpened}
              isModalOpened={isModalOpened}
            />
          ) : (
            <></>
          )}

          {step >= 2 ? (
            <RelationTypeInput
              step={step}
              relationType={relationType}
              isTypeModalOpened={isTypeModalOpened}
              setIsTypeModalOpened={setIsTypeModalOpened}
              setRelationType={setRelationType}
              isModalOpened={isModalOpened}
              relationEtc={relationEtc}
              setRelationEtc={setRelationEtc}
              setPostRelationType={setPostRelationType}
            />
          ) : (
            <></>
          )}

          <ShortInputBox
            label="친구 이름"
            placeholder="실명을 적어줘. 이름 가운데는 *처리돼"
            value={name}
            onChange={(e) => handleNameInput(e)}
            isModalOpened={isModalOpened}
            step={step}
          />

          <St.NextStepBtnWrapper>
            <St.NextStepBtn type="button" disabled={!activeBtn} onClick={handleStep} isModalOpened={isModalOpened}>
              다음
            </St.NextStepBtn>
          </St.NextStepBtnWrapper>
        </St.RecommendPage>
      )}
    </>
  );
}

const St = {
  RecommendPage: styled.main<{ isModalOpened: boolean }>`
    background-color: rgba(${({ isModalOpened }) => (isModalOpened ? "0, 0, 0, 0.64" : "")});
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  TitleWrapper: styled.hgroup`
    margin-left: 2.4rem;
    margin-bottom: 2.4rem;
    position: relative;
    z-index: -1;
  `,

  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
  `,
  NextStepBtn: styled.button<{ isModalOpened: boolean }>`
    position: absolute;
    visibility: ${({ isModalOpened }) => (isModalOpened ? "hidden" : "")};

    bottom: 3.5rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
  `,
};
