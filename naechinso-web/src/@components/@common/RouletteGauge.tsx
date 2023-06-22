import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getCheckRoulette } from "../../apis/recommend.api";
import { IcNullRecommendMember, IcRecommendMember } from "../../asset/icons";
import {
  ImgFullGauge,
  ImgFullLastGauge,
  ImgNullGauge,
  ImgNullLastGauge,
  ImgRouletteGaugeNaechinso,
  ImgYetGauge,
  ImgYetLastGauge,
} from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { IGetCheckRoulette } from "../../types/recommend";

export default function RouletteGauge() {
  const navigate = useNavigate();
  const [rouletteGauge, setRouletteGauge] = useState([
    { id: 0, name: "", status: "" },
    { id: 1, name: "", status: "" },
    { id: 2, name: "", status: "" },
  ]);

  useEffect(() => {
    if (location.pathname.startsWith("/roulette")) {
      const memberUuid = location.pathname.substring(10);
      memberUuid.length === 36 && localStorage.setItem("roulette-uuid", memberUuid);
    }
    handleGetCheckRoulette(localStorage.getItem("roulette-uuid") as string);
  }, []);

  useEffect(() => {
    console.log(rouletteGauge);
  }, [rouletteGauge]);

  const handleGetCheckRoulette = async (uuid: string) => {
    await getCheckRoulette(uuid, handleSuccessGetCheckRoulette, handleFailGetCheckRoulette);
  };

  const handleSuccessGetCheckRoulette = (userData: IGetCheckRoulette) => {
    // 몇 명 추천했는지 룰렛에 넘기기
    const recommendedNum = userData.recommendReceiverList.length;
    localStorage.setItem("recommendedNum", recommendedNum.toString());
    // 추천한 수에 따라 게이지 바꿔주기
    userData.recommendReceiverList.forEach((receiver, idx) => {
      setRouletteGauge((prevGauge) => {
        return prevGauge.map((gauge) => {
          if (gauge.id === idx) return { ...gauge, name: receiver.name, status: receiver.status };
          return gauge;
        });
      });
    });
  };

  const handleFailGetCheckRoulette = (errorMessage: string) => {
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  return (
    <St.RouletteGauge>
      <St.DescWrapper>
        <St.Naechinso src={ImgRouletteGaugeNaechinso} alt="내친소" />
        <St.Desc>
          <St.HighLightOrange>친구가 가입</St.HighLightOrange>하면
          <St.HighLightOrange> 100% 당첨룰렛</St.HighLightOrange> 추첨권을 문자로 보내줄게!
        </St.Desc>
      </St.DescWrapper>
      <St.RouletteGaugeBox>
        {rouletteGauge.map((member, idx) => {
          return (
            <St.RouletteGaugeWrapper key={idx}>
              {/* 게이지 이미지 변경 */}
              <St.RouletteGaugeSvg
                idx={idx}
                alt="추천사 게이지"
                src={
                  idx === 2 && member.status === "NONE"
                    ? ImgYetLastGauge
                    : idx === 2 && member.status === "ACCEPT"
                    ? ImgFullLastGauge
                    : idx === 2
                    ? ImgNullLastGauge
                    : member.status === "NONE"
                    ? ImgYetGauge
                    : member.status === "NONE"
                    ? ImgFullGauge
                    : ImgNullGauge
                }
              />
              <St.RecommendMemberWrapper>
                {member.name === null ? ( // 추천한 친구가 없을 때
                  <IcNullRecommendMember />
                ) : (
                  // 추천한 친구가 있을 때
                  <>
                    <IcRecommendMember />
                    <St.RecommendMemberName>{member.name}</St.RecommendMemberName>
                    <St.RecommendMemberstatus status={member.status}>
                      {member.status ? "완료" : "가입 전"}
                    </St.RecommendMemberstatus>
                  </>
                )}
              </St.RecommendMemberWrapper>
            </St.RouletteGaugeWrapper>
          );
        })}
      </St.RouletteGaugeBox>
    </St.RouletteGauge>
  );
}

const St = {
  RouletteGauge: styled.section`
    z-index: 2;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(12px);

    width: 33.5rem;
    height: 11rem;
    padding: 1.6rem 1.6rem 1.5rem;
  `,
  DescWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `,
  Naechinso: styled.img`
    width: 2rem;
    height: 2rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray20};
    ${({ theme }) => theme.fonts.body9};
    letter-spacing: -0.01em;
  `,
  HighLightOrange: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body9};
    letter-spacing: -0.01em;
  `,
  RouletteGaugeBox: styled.ul`
    display: flex;
    align-items: center;
    gap: 0.4rem;
  `,
  RouletteGaugeWrapper: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5.4rem;
  `,
  RouletteGaugeSvg: styled.img<{ idx: number }>`
    width: ${({ idx }) => (idx === 2 ? "10.2rem" : "9.6rem")};
    padding-top: ${({ idx }) => (idx === 2 ? "" : "1rem")};
  `,
  RecommendMemberWrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 0.7rem 0.8rem;
    background-color: ${({ theme }) => theme.colors.gray80};
    border-radius: 8px;
    position: relative;
    height: 2.8rem;
    width: fit-content;

    &::before {
      content: "";
      position: absolute;
      top: -15px;
      left: 8px;
      /* margin-top: -10px; */
      border-style: solid;
      border-width: 8px 8px 8px 8px;
      border-color: transparent transparent transparent ${({ theme }) => theme.colors.gray80};
      -ms-transform: rotate(-90deg); /* IE 9 */
      -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
      transform: rotate(-90deg);
    }
  `,
  RecommendMemberName: styled.b`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.caption9};
    margin-left: 0.4rem;
    margin-right: 0.2rem;
  `,
  RecommendMemberstatus: styled.p<{ status: string }>`
    color: ${({ theme, status }) => (status === "ACCEPT" ? theme.colors.orange : theme.colors.gray50)};
    ${({ theme }) => theme.fonts.caption9};
  `,
};
