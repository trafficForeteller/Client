import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { getCheckPrice, patchRecommendFriendDetail, postRecommendation } from "../../apis/recommend.api";
import { ImgDontGo } from "../../asset/image";
import { keywordProps } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { IGetCheckPrice, IPatchFriendDetail } from "../../types/recommend";
import { AdressingFixedHeader, ConsultantTextBtn, TextAreaBox, WarningModal } from "../@common";
import DontGoTextAreaBox from "./DontGoTextAreaBox";

export default function DontGoPage() {
  const [text, setText] = useState("");
  const [isWarningModalOpened, setIsWarningModalOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("dontGo")) {
      const dontGo = localStorage.getItem("dontGo") as string;
      setText(dontGo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dontGo", text);
    setPatchRecommend({
      ...patchRecommend,
      dontGo: text,
    });
  }, [text]);

  const isButtonDisabled = () => !text || text.length < 15;

  /* 추천사 post하는 코드 시작*/
  const [postRecommend, setPostRecommend] = useState({
    recommendQuestions: [
      {
        recommendQuestion: "",
        recommendAnswer: "",
      },
    ],
  });
  const [patchRecommend, setPatchRecommend] = useState<IPatchFriendDetail>({
    appealDetail: "",
    appeals: [],
    dontGo: "",
    priceType: "",
  });

  useEffect(() => {
    // 한꺼번에 서버에 전송
    const modifiedAppealDetail = `내 친구는 ${localStorage.getItem("appealDetail")} 친구야!`;
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: modifiedAppealDetail || "",
      appeals: JSON.parse(localStorage.getItem("appeals") || "[]"),
      dontGo: localStorage.getItem("dontGo") || "",
    });
  }, []);

  const handleSubmit = () => {
    // 제출하기 선택 시  postRecommend 채우기
    const storedData = JSON.parse(localStorage.getItem("friendLoverType") as string);
    const keywords = storedData.map((item: keywordProps) => item.keyword).join(", ");
    const modifiedFriendLoverType = `내 친구는 ${keywords} 애인이랑 만났음 해!`;

    setPostRecommend({
      recommendQuestions: [
        {
          recommendQuestion: "친구는 어떤 사람이랑 어울릴 것 같아?",
          recommendAnswer: modifiedFriendLoverType,
        },
        {
          recommendQuestion: localStorage.getItem("checkedSelectiveQ") as string,
          recommendAnswer: localStorage.getItem("selectiveRecommend") as string,
        },
      ],
    });
  };

  useEffect(() => {
    if (postRecommend.recommendQuestions.length > 1) handleRegisterRecommender();
  }, [postRecommend]);

  const handleRegisterRecommender = async () => {
    // 추천사 등록하기
    await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPostRecommendation,
      handleFailRequest,
      handleReissuePostRecommendation,
    );
  };

  const handleSuccessPostRecommendation = async () => {
    // 상품을 받을 수 있는 추천사인지 확인하는 함수 실행
    handleGetCheckPrice();
  };

  const handleGetCheckPrice = async () => {
    // 상품을 받을 수 있는 추천사인지 확인
    await getCheckPrice(
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessGetCheckPrice,
      handleFailRequest,
      handleReissueGetCheckPrice,
    );
  };

  const handleSuccessGetCheckPrice = (userData: IGetCheckPrice) => {
    if (userData.isPrice === false) {
      setPatchRecommend({
        ...patchRecommend,
        priceType: "NONE",
      });
    } else if (userData.isPrice === true && userData.isShowRecommend === true) {
      setPatchRecommend({
        ...patchRecommend,
        priceType: "SUNGURI",
      });
    } else if (userData.isPrice === true && userData.isShowRecommend === false) {
      navigate(routePaths.ChooseGift, { state: { patchRecommend } });
    }
  };

  useEffect(() => {
    // patchRecommend 성공 시
    if (patchRecommend.priceType !== "") handlePatchRecommend();
  }, [patchRecommend]);

  const handlePatchRecommend = async () => {
    // keyword, appealDetail, dontGo POST
    await patchRecommendFriendDetail(
      patchRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPatchRecommend,
      handleFailPatchRecommend,
      handleReissuePatchRecommend,
    );
  };

  const handleSuccessPatchRecommend = () => {
    // 추천사 PATCH 성공할 시
    localStorage.setItem("priceType", patchRecommend.priceType);
    navigate(routePaths.Finish);
  };

  const handleFailPatchRecommend = (err: AxiosError) => {
    // keyword, appealDetail, dontG POST 실패할 시
    const errData = err.response && (err.response.data as Error);
    const errorMessage = errData && (errData.message as string);
    console.log(errorMessage);

    if (errorMessage === "비속어가 포함되어 있습니다") setIsWarningModalOpened(true);
    else navigate(routePaths.Error);
  };

  const handleReissuePatchRecommend = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handlePatchRecommend();
  };

  const handleReissueGetCheckPrice = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleGetCheckPrice();
  };

  const handleFailRequest = (errorMessage: string) => {
    //  postRecommendation 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  const handleReissuePostRecommendation = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleRegisterRecommender();
  };
  /* 추천사 post하는 코드 끝*/

  return (
    <>
      <St.DontGo>
        <AdressingFixedHeader
          currentRequiredPage={5}
          header="내 친구 자랑"
          navigatePath="/recommend/selective"
          title1="친구가... 거절당했대..."
          title2="회심의 회유 한 마디는? 💪👊"
        />

        <St.CardWrapper>
          <St.Card src={ImgDontGo} alt="한 마디 발언 미리보기" />
          <St.CardGradient></St.CardGradient>
        </St.CardWrapper>

        <St.TextWrapper>
          <DontGoTextAreaBox
            placeholder="미래의 형수님 한번만 다시 생각해보십쇼. 이 친구가 겉 보기엔 끌리지 않을 수 있어도, 저와 주변 친구들이 그랬듯 제 친구의 매력에 한 번 빠지면 헤어나올 수 없거든요!"
            minLength={14}
            maxLength={100}
            text={text}
            setText={setText}
            height={7.8}
            letterLimit="10자 이상"
            isModalOpened={isWarningModalOpened}
          />
        </St.TextWrapper>

        <ConsultantTextBtn />
        <St.NextStepBtnWrapper>
          <St.NextStepBtn type="button" disabled={isButtonDisabled()} onClick={handleSubmit}>
            완료
          </St.NextStepBtn>
        </St.NextStepBtnWrapper>
      </St.DontGo>
      {isWarningModalOpened && (
        <WarningModal
          title1="상대방의 마음을 돌릴"
          title2="한 마디를 다시 작성해줘🥺"
          desc1="비속어가 포함되어 있는지 확인해줘!"
          buttonTitle="응 수정할게!"
        />
      )}
    </>
  );
}

const St = {
  DontGo: styled.main`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    padding: 20rem 0 0;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 18.6rem;

    background: linear-gradient(180deg, #ffffff 0%, #f6f5f2 20%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;

    position: relative;
  `,
  Card: styled.img`
    width: 37.5rem;
    height: 18.6rem;
  `,
  CardGradient: styled.div`
    width: 100%;
    height: 1.8rem;
    background: linear-gradient(transparent, #ffffff);
    position: absolute;
    bottom: 0;
  `,
  TextWrapper: styled.section`
    padding: 0 2rem;
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
    height: 8rem;
  `,
  NextStepBtn: styled.button`
    bottom: 3.2rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_16};
    width: 34.3rem;
    height: 4.8rem;
    border-radius: 12px;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
