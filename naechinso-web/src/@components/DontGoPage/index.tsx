import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { getCheckPrice, patchRecommendFriendDetail } from "../../apis/recommend.api";
import { IcDontGo } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IGetCheckPrice, IPatchFriendDetail } from "../../types/recommend";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import { FixedHeader, TextAreaBox, WarningModal } from "../@common";

export default function DontGoPage() {
  const [text, setText] = useState("");
  const [textCheck, setTextCheck] = useState(false);
  const [patchRecommend, setPatchRecommend] = useState<IPatchFriendDetail>({
    appealDetail: "",
    appeals: [],
    dontGo: "",
    priceType: "",
  });
  const [isWarningModalOpened, setIsWarningModalOpened] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("dontGo")) {
      const dontGo = localStorage.getItem("dontGo") as string;
      setText(dontGo);
      setTextCheck(true);
    }
  }, []);

  useEffect(() => {
    handleTextCheck();
    localStorage.setItem("dontGo", text);
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: localStorage.getItem("appealDetail") || "",
      appeals: JSON.parse(localStorage.getItem("appeals") || "[]"),
      dontGo: localStorage.getItem("dontGo") || "",
    });
  }, [text]);

  useEffect(() => {
    if (patchRecommend.priceType !== "") handlePatchRecommend();
  }, [patchRecommend]);

  const handleGetCheckPrice = async () => {
    // 상품을 받을 수 있는 추천사인지 확인
    await getCheckPrice(
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessGetCheckPrice,
      handleFailGetCheckPrice,
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

  const handleFailGetCheckPrice = (errorMessage: string) => {
    console.log(errorMessage);
    navigate(routePaths.Error);
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

  const handlePatchRecommend = async () => {
    // keyword, appealDetail, dontGo POST 성공할 시
    await patchRecommendFriendDetail(
      patchRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPatchRecommend,
      handleFailPatchRecommend,
      handleReissuePatchRecommend,
    );
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

  const handleFailPatchRecommend = (err: AxiosError) => {
    // keyword, appealDetail, dontG POST 실패할 시
    const errData = err.response && (err.response.data as Error);
    const errorMessage = errData && (errData.message as string);
    console.log(errorMessage);

    if (errorMessage === "비속어가 포함되어 있습니다") {
      setIsWarningModalOpened(true);
      navigate(routePaths.DontGo);
    } else navigate(routePaths.Error);
  };

  const handleSuccessPatchRecommend = () => {
    // 추천사 PATCH 성공할 시
    localStorage.setItem("priceType", patchRecommend.priceType);
    navigate(routePaths.Finish);
  };

  const handleTextCheck = () => {
    if (text.length > 19) setTextCheck(true);
    else setTextCheck(false);
  };

  return (
    <>
      <St.DontGo isWarningModalOpened={isWarningModalOpened}>
        <FixedHeader
          header="추천사"
          progressRate={100}
          title1="마지막이야!"
          title2="친구를 거절한 상대방의"
          title3="마음을 돌릴 한마디?"
          isModalOpened={isWarningModalOpened}
        />
        <St.CardWrapper>
          <IcDontGo aria-label="한 마디 발언 미리보기" />
        </St.CardWrapper>
        <St.TextWrapper>
          <TextAreaBox
            placeholder="미래의 형수님 한번만 다시 생각해보십쇼. 이 친구가 겉 보기엔 끌리지 않을 수 있어도, 저와 주변 친구들이 그랬듯 제 친구의 매력에 한 번 빠지면 헤어나올 수 없거든요!"
            minLength={19}
            maxLength={100}
            text={text}
            setText={setText}
            height={7.8}
            letterLimit="20자 이상 100자 이내"
            isModalOpened={isWarningModalOpened}
          />
        </St.TextWrapper>
        <St.NextStepBtnWrapper>
          <St.NextStepBtn
            type="button"
            disabled={!textCheck}
            onClick={handleGetCheckPrice}
            isWarningModalOpened={isWarningModalOpened}
            className={GTM_CLASS_NAME.recommendSuccess}>
            완료
          </St.NextStepBtn>
        </St.NextStepBtnWrapper>
        {isWarningModalOpened && (
          <WarningModal
            title1="상대방의 마음을 돌릴"
            title2="한 마디를 다시 작성해줘🥺"
            desc="비속어가 포함되어 있는지 확인해줘!"
            buttonTitle="응 수정할게!"
            setIsWarningModalOpened={setIsWarningModalOpened}
          />
        )}
      </St.DontGo>
    </>
  );
}

const St = {
  DontGo: styled.main<{ isWarningModalOpened: boolean }>`
    background-color: rgba(${({ isWarningModalOpened }) => (isWarningModalOpened ? "0, 0, 0, 0.64" : "")});
    padding-top: 18rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 18.6rem;
    position: absolute;
    top: 21rem;
    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 10%);
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  `,
  TextWrapper: styled.section`
    margin-top: 23rem;
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
    height: 11rem;
  `,
  NextStepBtn: styled.button<{ isWarningModalOpened: boolean }>`
    visibility: ${({ isWarningModalOpened }) => (isWarningModalOpened ? "hidden" : "")};

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
