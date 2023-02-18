import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMagicRecommendFriendInfo, postRecommendFriendInfo } from "../../apis/recommend.api";
import { relationDurationList, relationTypeList, relationTypeProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { IPostFriendInfo } from "../../types/recommend";
import { ShortInputBox, Title } from "../@common";
import FriendInfoHeader from "./FriendInfoHeader";
import PhoneNumInputBox from "./PhoneNumInput";
import RelationTypeInput from "./RecommendTypeInput";
import RelationDurationInput from "./RelationDurationInput";

export default function FriendInfoPage() {
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

  const [postFriendInfo, setPostFriendInfo] = useState<IPostFriendInfo>({
    phone: "",
    name: "",
    meet: "",
    period: "",
  });
  const [postMagicFriendInfo, setPostMagicFriendInfo] = useState<IPostFriendInfo>({
    name: "",
    meet: "",
    period: "",
  });

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 friendInfo 초기값으로 세팅
    const friendInfoOfLocal = localStorage.getItem("friendInfo") as string;
    const friendInfo = JSON.parse(friendInfoOfLocal);

    if (friendInfo) {
      setName(friendInfo.name);
      setRelationDuration(friendInfo.period);
      friendInfo.phone && setPhoneNum(friendInfo.phone.replace("010", "").replace(/^(\d{3,4})(\d{4})$/g, "$1 $2"));
      const meetOfLocal = friendInfo.meet as string;
      if (
        meetOfLocal === "친족" ||
        meetOfLocal === "초/중/고 친구" ||
        meetOfLocal === "대학교 친구" ||
        meetOfLocal === "회사친구"
      ) {
        setRelationType(meetOfLocal);
      } else {
        setRelationType("기타");
        setRelationEtc(meetOfLocal);
      }

      if (localStorage.getItem("member-uuid")) {
        setStep(3);
        setPostMagicFriendInfo(friendInfo);
      } else {
        // friendInfo.phone 여부 확인해 step과 postPhoneNum에 다른 값 넣어주기
        setStep(4);
        const postPhoneNum =
          "010" +
          friendInfo.phone
            .replace("010", "")
            .replace(/^(\d{3,4})(\d{4})$/g, "$1 $2")
            .replace(/ /g, "");
        setPostPhoneNum && setPostPhoneNum({ phoneNumber: postPhoneNum });
        setPostFriendInfo(friendInfo);
      }
      setActiveBtn(true);
    } else {
      resetListChecked(relationTypeList);
      resetListChecked(relationDurationList);
    }
  }, []);

  const resetListChecked = (list: relationTypeProps[]) => {
    // list checked가 모두 되지 않은 상태로 수정하기
    list.map((el) => {
      el.checked = false;
      return el;
    });
    return list;
  };

  useEffect(() => {
    checkIsModalOpened();
  }, [isTypeModalOpened, isDurationModalOpened]);

  useEffect(() => {
    // step에 따라 다른 모달 open
    window.scrollTo(0, 0);
    if (step === 2) setIsTypeModalOpened(true);
    else if (step === 3) setIsDurationModalOpened(true);
    else if (step === 4 && localStorage.getItem("member-uuid")) {
      navigate(`${routePaths.Keyword}`);
      handleMagicFriendInfo();
    } else if (step === 5) {
      navigate(`${routePaths.Keyword}`);
      handleFriendInfo();
    }
  }, [step]);

  const saveFriendInfoInLocal = (friendInfo: IPostFriendInfo) => {
    // 로컬스토리지에 저장
    localStorage.setItem("friendInfo", JSON.stringify(friendInfo));
  };

  const handleMagicFriendInfo = async () => {
    // 매직링크 가진 친구의 기본정보 POST
    const userData = await postMagicRecommendFriendInfo(
      postMagicFriendInfo,
      localStorage.getItem("accessToken"),
      localStorage.getItem("member-uuid"),
    );
    userData && localStorage.setItem("uuid", userData["uuid"]);
    saveFriendInfoInLocal(postMagicFriendInfo);
  };

  const handleFriendInfo = async () => {
    // 친구의 기본정보 POST
    const userData = await postRecommendFriendInfo(postFriendInfo, localStorage.getItem("accessToken"));
    userData && localStorage.setItem("uuid", userData["uuid"]);
    saveFriendInfoInLocal(postFriendInfo);
  };

  useEffect(() => {
    // step에 따른 ActiveButton 활성화
    if (step === 1 && name.length >= 2) setActiveBtn(true);
    else if (step === 2 && name.length >= 2 && relationType) setActiveBtn(true);
    else if (step === 3 && name.length >= 2 && relationType && relationDuration) setActiveBtn(true);
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
    setPostMagicFriendInfo({
      ...postMagicFriendInfo,
      name: name,
      meet: postRelationType,
      period: relationDuration,
    });
    setStep(step + 1);
    setActiveBtn(false);
  };
  return (
    <St.FriendInfoPage isModalOpened={isModalOpened}>
      <FriendInfoHeader />
      <St.TitleWrapper>
        <Title title="어떤 친구를 소개해줄거야?" />
        <Title title="너무 궁금해!👀" />
      </St.TitleWrapper>

      {localStorage.getItem("member-uuid") === null && step >= 4 ? (
        <PhoneNumInputBox
          label="친구의 휴대폰 번호"
          placeholder="0000 0000"
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          isModalOpened={isModalOpened}
          setPostPhoneNum={setPostPhoneNum}
          handleStep={handleStep}
        />
      ) : (
        <></>
      )}

      {step >= 3 ? (
        <RelationDurationInput
          label="알고 지낸 기간"
          placeholder="알고 지낸 기간을 선택해줘"
          question="친구와 어떤 관계야?"
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
        onChange={handleNameInput}
        isModalOpened={isModalOpened}
        step={step}
        handleStep={handleStep}
      />
      <St.Blank></St.Blank>
      <St.NextStepBtnWrapper>
        <St.NextStepBtn type="button" disabled={!activeBtn} onClick={handleStep} isModalOpened={isModalOpened}>
          다음
        </St.NextStepBtn>
      </St.NextStepBtnWrapper>
    </St.FriendInfoPage>
  );
}

const St = {
  FriendInfoPage: styled.main<{ isModalOpened: boolean }>`
    background-color: rgba(${({ isModalOpened }) => (isModalOpened ? "0, 0, 0, 0.64" : "")});
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 9rem 2rem;
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 2.4rem;
    position: relative;
    z-index: -1;
  `,
  Blank: styled.div`
    height: 13rem;
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
    ${({ theme }) => theme.fonts.sub3};
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
