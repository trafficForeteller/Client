/* eslint-disable */ 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { getRecommend, postMagicRecommendFriendInfo, postRecommendFriendInfo } from "../../apis/recommend.api";
import {
  appealDetailList,
  friendLoverTypeList,
  keywordList,
  relationDurationList,
  relationTypeList,
  relationTypeProps,
} from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { IGetReommend, IPostFriendInfo, IPostRecommendElement, IUuid } from "../../types/recommend";
import { ConsultantIconBtn, ShortInputBox } from "../@common";
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
  const memberName = localStorage.getItem("memberName");

  const [postFriendInfo, setPostFriendInfo] = useState<IPostFriendInfo>({
    phone: "",
    name: "",
    meet: "",
    period: "",
  });
  const [postMagicFriendInfo, setPostMagicFriendInfo] = useState<IPostFriendInfo>({
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
        meetOfLocal === "회사 친구"
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
      if (memberName) {
        setStep(2);
      }
    }
  }, []);

  useEffect(() => {
    // step에 따른 ActiveButton 활성화
    if (memberName) {
      if (step === 2 && relationType) setActiveBtn(true);
      else if (step === 3 && relationType && relationDuration) setActiveBtn(true);
    } else {
      if (step === 1 && name.length >= 2) setActiveBtn(true);
      else if (step === 2 && name.length >= 2 && relationType) setActiveBtn(true);
      else if (step === 3 && name.length >= 2 && relationType && relationDuration) setActiveBtn(true);
    }
  }, [name, relationType, relationDuration]);

  useEffect(() => {
    checkIsModalOpened();
  }, [isTypeModalOpened, isDurationModalOpened]);

  useEffect(() => {
    // step에 따라 다른 모달 open
    window.scrollTo(0, 0);
    if (step === 2) setIsTypeModalOpened(true);
    else if (step === 3) setIsDurationModalOpened(true);
    else if (step === 4 && memberName) {
      handleMagicFriendInfo();
    } else if (step === 5) {
      handleFriendInfo();
    }
  }, [step]);

  const resetListChecked = (list: relationTypeProps[]) => {
    // list checked가 모두 되지 않은 상태로 수정하기
    list.map((el) => {
      el.checked = false;
      return el;
    });
    return list;
  };

  const saveFriendInfoInLocal = (friendInfo: IPostFriendInfo) => {
    // 로컬스토리지에 저장
    localStorage.setItem("friendInfo", JSON.stringify(friendInfo));
  };

  const handleMagicFriendInfo = async () => {
    // 매직링크 가진 친구의 기본정보 POST
    await postMagicRecommendFriendInfo(
      postMagicFriendInfo,
      localStorage.getItem("accessToken"),
      localStorage.getItem("member-uuid"),
      handleSuccessPostFriendInfo,
      handleFailPostFriendInfo,
      handleReissuePostFriendInfo,
    );
  };

  const handleFriendInfo = async () => {
    // 친구의 기본정보 POST
    await postRecommendFriendInfo(
      postFriendInfo,
      localStorage.getItem("accessToken"),
      handleSuccessPostFriendInfo,
      handleFailPostFriendInfo,
      handleReissuePostFriendInfo,
    );
  };

  const handleReissuePostFriendInfo = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    if (step === 4 && localStorage.getItem("member-uuid")) {
      handleMagicFriendInfo();
    } else if (step === 5) {
      handleFriendInfo();
    }
  };

  const handleSuccessPostFriendInfo = async (userData: IUuid) => {
    // 친구의 기본정보 POST 성공할 시
    localStorage.setItem("uuid", userData["uuid"]);
    if (localStorage.getItem("member-uuid") === null) saveFriendInfoInLocal(postFriendInfo);
    else saveFriendInfoInLocal(postMagicFriendInfo);
    await getRecommend(
      localStorage.getItem("accessToken"),
      userData["uuid"],
      handleSuccessGetRecommend,
      handleFailGetRecommend,
    );
  };

  const handleSuccessGetRecommend = (userData: IGetReommend) => {
    // 추천사 이전에 작성한 거 성공할 시 userData를 localStorage에 넣어주기
    localStorage.setItem("dontGo", userData.dontGo);
    localStorage.setItem("appeals", JSON.stringify(userData.appeals));
    if (isValidAppealDetail(userData.appealDetail)) processAppealDetail(userData.appealDetail);

    const friendLoverTypeQuestion = userData.customQuestion.filter(
      (item) => item.recommendQuestion === "친구는 어떤 사람이랑 어울릴 것 같아?",
    );
    if (friendLoverTypeQuestion.length > 0) {
      const lastQuestion = friendLoverTypeQuestion[friendLoverTypeQuestion.length - 1];
      if (isValidRecommendAnswer(lastQuestion.recommendAnswer)) processRecommendAnswer(lastQuestion.recommendAnswer);
    }

    processSelectiveRecommend(userData.customQuestion);

    const tempKeywordList = keywordList;
    const newKeywordList = tempKeywordList.map((keyword) => {
      // keywordList에서 일치하는 keyword를 찾음
      const matchingKeyword = userData.appeals.includes(keyword.keyword);
      // 일치하는 keyword가 있으면 checked 값을 true로 변경하여 반환
      if (matchingKeyword) return { ...keyword, checked: true };
      // 일치하는 keyword가 없으면 원래 값을 그대로 반환
      return keyword;
    });
    localStorage.setItem("keywordList", JSON.stringify(newKeywordList));

    const newCheckedKeywordList = newKeywordList.filter((newKeyword) => newKeyword.checked === true);

    localStorage.setItem("checkedKeywordList", JSON.stringify(newCheckedKeywordList));

    navigate(routePaths.Keyword);
  };

  const isValidAppealDetail = (appealDetailToServer: string) => {
    //서버에서 받아온 appealDetail이 내 친구는으로 시작하는지, 친구야!로 끝나는 지 확인
    return appealDetailToServer.startsWith("내 친구는") && appealDetailToServer.endsWith("친구야!");
  };
  const processAppealDetail = (appealDetailToServer: string) => {
    // 서버에서 받아온 appealDetail이 appealDetailList에 있다면 로컬에 추가
    const keyword = appealDetailToServer.slice("내 친구는 ".length, -" 친구야!".length);
    const updatedList = appealDetailList.map((item) => (item.keyword === keyword ? { ...item, checked: true } : item));

    localStorage.setItem("appealDetailList", JSON.stringify(updatedList));
    localStorage.setItem("appeatlDetail", keyword);
  };

  const isValidRecommendAnswer = (recommendAnswer: string) => {
    // recommendAnswer이 내 친구는 으로 시작하고, 애인이랑 만났음 해!로 끝나는지 확인
    return recommendAnswer.startsWith("내 친구는") && recommendAnswer.endsWith(" 애인이랑 만났음 해!");
  };
  const processRecommendAnswer = (recommendAnswer: string) => {
    // recommendAnser에서 키워드 부분을 자르고, 해당 객체의 checked를 true로 바꾸고, 그 아이템의 keyword를 찾아 로컬에 list와 keyword 넣기
    const keyword = recommendAnswer.slice("내 친구는 ".length, -" 애인이랑 만났음 해!".length);
    const updatedList = friendLoverTypeList.map((item) =>
      item.keyword === keyword ? { ...item, checked: true } : item,
    );
    const matchedType = updatedList.find((item) => item.keyword === keyword);
    if (matchedType) {
      localStorage.setItem("friendLoverTypeList", JSON.stringify(updatedList));
      localStorage.setItem("friendLoverType", matchedType.keyword);
    }
  };

  const processSelectiveRecommend = (questionToServer: IPostRecommendElement[]) => {
    const filteredQuestions = questionToServer.filter(
      (item) =>
        item.recommendQuestion.startsWith("🧚") ||
        item.recommendQuestion.startsWith("🖐🏻") ||
        item.recommendQuestion.startsWith("🎁"),
    );
    const question =
      filteredQuestions.length === 1
        ? filteredQuestions[0]
        : filteredQuestions.length > 1
          ? filteredQuestions[filteredQuestions.length - 1]
          : questionToServer[questionToServer.length - 1];
    if (question) {
      localStorage.setItem("checkedSelectiveQ", question.recommendQuestion);
      localStorage.setItem("selectiveRecommend", question.recommendAnswer);
    }
  };

  const handleFailGetRecommend = () => {
    // 추천사 이전에 작성한 거 실패할 시 localStorage 삭제
    localStorage.removeItem("firstRecommend");
    localStorage.removeItem("secondRecommend");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("dontGo");
    localStorage.removeItem("appeals");
    localStorage.removeItem("keywordList");
    localStorage.removeItem("checkedQ1");
    localStorage.removeItem("questionList");
    localStorage.removeItem("priceType");
    localStorage.removeItem("checkedKeywordList");
    localStorage.removeItem("checkedSelectiveQ");
    localStorage.removeItem("selectiveRecommend");
    localStorage.removeItem("friendLoverType");
    localStorage.removeItem("friendLoverTypeList");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("appealDetailList");

    navigate(routePaths.Keyword);
  };

  const handleFailPostFriendInfo = (errorMessage: string) => {
    // 친구의 기본정보 POST 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

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
      <FriendInfoHeader  />
      <St.Title>
        {memberName !== null ? (
          <>
            🤭
            <br />
            너는 {memberName}(이)랑은
            <br /> 어떤 사이야?
          </>
        ) : (
          <>
            어떤 친구를 소개해줄거야? <br />
            너무 궁금해!👀
          </>
        )}
      </St.Title>

      {localStorage.getItem("member-uuid") === null && step >= 4 ? (
        <PhoneNumInputBox
          label="내 친구의 휴대폰 번호"
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

      {!memberName && (
        <ShortInputBox
          label="내 친구 이름"
          placeholder="친구 이름을 실명으로 적어줘"
          value={name}
          onChange={handleNameInput}
          isModalOpened={isModalOpened}
          step={step}
          handleStep={handleStep}
        />
      )}
      <St.Blank></St.Blank>

      <ConsultantIconBtn />
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
  Title: styled.h1`
    margin-bottom: 2.4rem;
    position: relative;
    z-index: -1;

    ${({ theme }) => theme.fonts.head1};
    color: ${({ theme }) => theme.colors.black};
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
