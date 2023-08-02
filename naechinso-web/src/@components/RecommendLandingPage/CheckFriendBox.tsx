import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { getRecommend, postMagicRecommendFriendInfo } from "../../apis/recommend.api";
import { ImgAnonymousIcon } from "../../asset/image";
import { appealDetailList, friendLoverTypeList, keywordList } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { IGetReommend, IPostFriendInfo, IPostRecommendElement, IUuid } from "../../types/recommend";

export default function CheckFriendBox() {
  const memberName = localStorage.getItem("memberName") || "김수한무";
  const memberPhoneNum = localStorage.getItem("memberPhoneNum") || "01012345678";
  const navigate = useNavigate();
  const postMagicFriendInfo = { name: memberName };

  const formatPhoneNumber = (phoneNumber: string): string => phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1 $2 $3");

  const WrongMemberData = () => {
    localStorage.removeItem("memberName");
    localStorage.removeItem("memberPhoneNum");
    navigate(routePaths.FriendInfo);
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

  const saveFriendInfoInLocal = (friendInfo: IPostFriendInfo) => {
    // 로컬스토리지에 저장
    localStorage.setItem("friendInfo", JSON.stringify(friendInfo));
  };

  const handleSuccessPostFriendInfo = async (userData: IUuid) => {
    // 친구의 기본정보 POST 성공할 시
    localStorage.setItem("uuid", userData["uuid"]);
    saveFriendInfoInLocal(postMagicFriendInfo);
    await getRecommend(
      localStorage.getItem("accessToken"),
      userData["uuid"],
      handleSuccessGetRecommend,
      handleFailGetRecommend,
    );
  };

  const handleFailPostFriendInfo = (errorMessage: string) => {
    // 친구의 기본정보 POST 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  const handleReissuePostFriendInfo = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleMagicFriendInfo();
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
    localStorage.removeItem("memberName");
    localStorage.removeItem("memberPhoneNum");

    navigate(routePaths.Keyword);
  };

  const isValidAppealDetail = (appealDetailToServer: string) => {
    //서버에서 받아온 appealDetail이 내 친구는으로 시작하는지, 친구야!로 끝나는 지 확인
    return appealDetailToServer.startsWith("내 친구는") && appealDetailToServer.endsWith("친구야!");
  };

  const processAppealDetail = (appealDetailToServer: string) => {
    // 서버에서 받아온 appealDetail이 appealDetailList에 있다면 로컬에 추가
    const keyword = appealDetailToServer.slice("내 친구는 ".length, -" 친구야!".length);
    const updatedList = [...appealDetailList];
    const matchedTypeIndex = updatedList.findIndex((item) => item.keyword === keyword);
    updatedList.forEach((item) => {
      if (item.keyword !== keyword) {
        item.checked = false;
      }
    });

    if (matchedTypeIndex !== -1) {
      updatedList[matchedTypeIndex].checked = true;
    } else updatedList.push({ id: updatedList.length, keyword: keyword, checked: true });

    localStorage.setItem("appealDetailList", JSON.stringify(updatedList));
    localStorage.setItem("appealDetail", keyword);
  };

  const isValidRecommendAnswer = (recommendAnswer: string) => {
    // recommendAnswer이 내 친구는 으로 시작하고, 애인이랑 만났음 해!로 끝나는지 확인
    return recommendAnswer.startsWith("내 친구는") && recommendAnswer.endsWith(" 애인이랑 만났음 해!");
  };

  const processRecommendAnswer = (recommendAnswer: string) => {
    // recommendAnser에서 키워드 부분을 자르고, 해당 객체의 checked를 true로 바꾸고, 그 아이템의 keyword를 찾아 로컬에 list와 keyword 넣기
    const keyword = recommendAnswer.slice("내 친구는 ".length, -" 애인이랑 만났음 해!".length);
    const keywordArr = keyword.split(", ").map((str) => str.trim());
    let updatedList = [...friendLoverTypeList];

    keywordArr.forEach((str) => {
      const matchedItem = updatedList.find((item) => item.keyword === str);
      if (matchedItem) {
        matchedItem.checked = true;
      } else {
        updatedList = [...updatedList, { id: updatedList.length, keyword: str, checked: true }];
      }
    });
    const checkedItems = updatedList.filter((item) => item.checked);

    localStorage.setItem("friendLoverTypeList", JSON.stringify(updatedList));
    localStorage.setItem("friendLoverType", JSON.stringify(checkedItems));
  };

  const processSelectiveRecommend = (questionToServer: IPostRecommendElement[]) => {
    const filteredQuestions = questionToServer.filter(
      (question) => question.recommendQuestion !== "친구는 어떤 사람이랑 어울릴 것 같아?",
    );
    const question = filteredQuestions.length > 0 && filteredQuestions[filteredQuestions.length - 1];
    if (question) {
      localStorage.setItem("checkedSelectiveQ", question.recommendQuestion);
      localStorage.setItem("selectiveRecommend", question.recommendAnswer);
    }
  };

  return (
    <St.CheckFriendBox>
      <St.CommentWrapper>
        <St.Comment>자랑할 친구가</St.Comment>
        <St.Comment>이 친구가 맞는지 확인해줘!</St.Comment>
      </St.CommentWrapper>
      <St.FriendBox>
        <St.FriendIcon src={ImgAnonymousIcon} alt="익명의 얼굴" />
        <St.FriendWrapper>
          <St.FriendName>{memberName}</St.FriendName>
          <St.FriendPhoneNum>{formatPhoneNumber(memberPhoneNum)}</St.FriendPhoneNum>
        </St.FriendWrapper>
      </St.FriendBox>
      <St.ButtonWrapper>
        <St.WrongButton type="button" onClick={WrongMemberData}>
          아니야
        </St.WrongButton>
        <St.RightButton type="button" onClick={handleMagicFriendInfo}>
          이 친구가 맞아!
        </St.RightButton>
      </St.ButtonWrapper>
    </St.CheckFriendBox>
  );
}

const St = {
  CheckFriendBox: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    bottom: 3.2rem;
    right: 0;
    left: 0;
  `,
  CommentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Comment: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold_20};
  `,
  FriendBox: styled.article`
    width: 24.8rem;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    padding: 3.6rem 4rem;
    margin: 1.6rem 0 5rem;

    display: flex;
    gap: 1.2rem;
    align-items: center;
  `,
  FriendIcon: styled.img`
    width: 4.8rem;
    height: 4.8rem;
  `,
  FriendWrapper: styled.span`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,
  FriendName: styled.p`
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fonts.bold_18};
  `,
  FriendPhoneNum: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.reg_14};
  `,
  ButtonWrapper: styled.article`
    width: 100%;
    padding: 0 2.4rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  `,
  WrongButton: styled.button`
    width: 12rem;
    height: 4.8rem;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.orange};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.bold_16};
  `,
  RightButton: styled.button`
    width: 100%;
    height: 4.8rem;
    border-radius: 12px;

    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_16};
  `,
};
