import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { postCheckRoulette } from "../../apis/recommend.api";
import { ImgConsultantNaechinso, ImgRoulette, ImgRoulettePicker } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { IGiftInfo, IPostCheckRoulette, IRouletteGauge } from "../../types/recommend";
import RouletteModal from "./RouletteModal";

interface RouletteProps {
  setRouletteGauge: React.Dispatch<React.SetStateAction<IRouletteGauge[]>>;
}

export default function Roulette(props: RouletteProps) {
  const { setRouletteGauge } = props;
  const [rotating, setRotating] = useState(false);
  const [isModalOpen, setISModalOpen] = useState(false);
  const [giftInfo, setGiftInfo] = useState<IGiftInfo>({ name: "", src: "" });
  const navigate = useNavigate();
  const recommendNumber = +(localStorage.getItem("recommendedNum") as string) || 0;

  const handleClick = () => {
    setRotating(true);
    handlePostCheckRoulette();
    setTimeout(() => {
      setRotating(false);
      setISModalOpen(true);
    }, 3000);
  };

  const closeModal = () => {
    setISModalOpen(false);
  };

  const handlePostCheckRoulette = async () => {
    await postCheckRoulette(
      localStorage.getItem("roulette-uuid") as string,
      handleSuccessPostCheckRoulette,
      handleFailPostCheckRoulette,
    );
  };

  const handleSuccessPostCheckRoulette = (userData: IPostCheckRoulette) => {
    // 추천인 상품 확정하기
    if (userData.price.startsWith("SUNGURI")) {
      if (userData.price.includes("20")) setGiftInfo({ name: "썬구리 20개", src: ImgConsultantNaechinso });
      else if (userData.price.includes("30")) setGiftInfo({ name: "썬구리 30개", src: ImgConsultantNaechinso });
      else if (userData.price.includes("50")) setGiftInfo({ name: "썬구리 50개", src: ImgConsultantNaechinso });
    } else if (userData.price.startsWith("BANANA_MILK"))
      setGiftInfo({ name: "바나나우유", src: ImgConsultantNaechinso });
    else if (userData.price.startsWith("PERERO")) setGiftInfo({ name: "페레로로쉐", src: ImgConsultantNaechinso });
    else if (userData.price.startsWith("STARBUCKS"))
      setGiftInfo({ name: "스타벅스 아이스 아메리카노", src: ImgConsultantNaechinso });
    else if (userData.price.startsWith("MEGACOFFEE"))
      setGiftInfo({ name: "메가커피 아이스 아메리카노", src: ImgConsultantNaechinso });

    //post recommendReceiverList에 따른 추천한 사람 수정
    userData.recommendReceiverList.forEach((receiver, idx) => {
      setRouletteGauge((prevGauge) => {
        return prevGauge.map((gauge) => {
          if (gauge.id === idx) return { ...gauge, name: receiver.name, status: receiver.status };
          return gauge;
        });
      });
    });
  };

  const handleFailPostCheckRoulette = (errorMessage: string) => {
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  return (
    <>
      {isModalOpen && <RouletteModal closeModal={closeModal} giftInfo={giftInfo} />}
      <St.Roulette>
        <St.RouletteBoard src={ImgRoulette} alt="룰렛 원판" rotating={rotating} />
        <St.RoulettePicker src={ImgRoulettePicker} alt="룰렛 피커" />
        <St.RouletteReadyBtn disabled={recommendNumber > 2 ? false : true} onClick={handleClick}>
          <St.RouletteBtnTitle recommendNumber={recommendNumber}>
            {recommendNumber > 2 ? "시-작!🤪" : "시작못함😥"}
          </St.RouletteBtnTitle>
          <St.RouletteRecommendNumberWrapper recommendNumber={recommendNumber}>
            <St.RouletteRecommendNumber recommendNumber={recommendNumber}>{recommendNumber}</St.RouletteRecommendNumber>
            <St.RouletteReommendFullNumber recommendNumber={recommendNumber}>/3명</St.RouletteReommendFullNumber>
          </St.RouletteRecommendNumberWrapper>
        </St.RouletteReadyBtn>
      </St.Roulette>
    </>
  );
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const St = {
  Roulette: styled.section`
    width: 100%;
    position: relative;
    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 2;
  `,
  RouletteBoard: styled.img<{ rotating: boolean }>`
    width: 32rem;
    ${({ rotating }) =>
      rotating &&
      css`
        animation: ${rotateAnimation} 3s ease-in-out infinite;
      `}
  `,
  RoulettePicker: styled.img`
    width: 2.8rem;
    height: 4rem;
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    top: -8px;
  `,
  RouletteReadyBtn: styled.button`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 10rem;
    height: 10rem;
  `,
  RouletteBtnTitle: styled.h2<{ recommendNumber: number }>`
    color: ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.colors.white : "rgba(255, 255, 255, 0.6)")};
    ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.fonts.body1 : theme.fonts.body8)};
    margin-bottom: 0.3rem;
  `,
  RouletteRecommendNumberWrapper: styled.div<{ recommendNumber: number }>`
    display: flex;
    align-items: flex-start;
    padding: 0.2rem 0.6rem;
    border-radius: 11px;
    width: fit-content;
    height: 1.8rem;

    background: ${({ theme, recommendNumber }) =>
      recommendNumber > 2 ? theme.colors.white : "rgba(255, 255, 255, 0.2)"};
  `,
  RouletteRecommendNumber: styled.p<{ recommendNumber: number }>`
    color: ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.colors.orange : "rgba(255, 255, 255, 0.4)")};
    ${({ theme }) => theme.fonts.caption2};
  `,
  RouletteReommendFullNumber: styled.b<{ recommendNumber: number }>`
    color: ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.colors.orange : theme.colors.white)};
    ${({ theme }) => theme.fonts.caption2};
  `,
};
