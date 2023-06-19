import { useState } from "react";
import styled from "styled-components";

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

export default function RouletteGauge() {
  const [recommendMember, setRecommendMember] = useState([
    { id: 0, friendName: "김지수", joinStatus: true },
    { id: 1, friendName: "코딱지", joinStatus: false },
    { id: 2, friendName: null, joinStatus: false },
  ]);

  return (
    <St.RouletteGauge>
      <St.DescWrapper>
        <St.Naechinso src={ImgRouletteGaugeNaechinso} alt="내친소" />
        <St.Desc>
          <St.HighLightOrange>친구가 가입</St.HighLightOrange>하면
          <St.HighLightOrange> 100% 당첨룰렛 추첨권</St.HighLightOrange>을 문자로 보내줄게!
        </St.Desc>
      </St.DescWrapper>
      <St.RouletteGaugeBox>
        {recommendMember.map((member) => {
          return (
            <St.RouletteGaugeWrapper key={member.id}>
              <St.RouletteGaugeSvg
                idx={member.id}
                alt="추천사 게이지"
                src={
                  member.id === 2 && member.friendName === null
                    ? ImgNullLastGauge
                    : member.id === 2 && member.joinStatus === false
                    ? ImgYetLastGauge
                    : member.id === 2 && member.joinStatus === true
                    ? ImgFullLastGauge
                    : member.friendName === null
                    ? ImgNullGauge
                    : member.joinStatus === false
                    ? ImgYetGauge
                    : ImgFullGauge
                }
              />
              <St.RecommendMemberWrapper>
                {member.friendName === null ? ( // 추천한 친구가 없을 때
                  <IcNullRecommendMember />
                ) : (
                  // 추천한 친구가 있을 때
                  <>
                    <IcRecommendMember />
                    <St.RecommendMemberName>{member.friendName}</St.RecommendMemberName>
                    <St.RecommendMemberJoinStatus joinStatus={member.joinStatus}>
                      {member.joinStatus ? "완료" : "가입 전"}
                    </St.RecommendMemberJoinStatus>
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
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }
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
  `,
  HighLightOrange: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body8};
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
  RecommendMemberJoinStatus: styled.p<{ joinStatus: boolean }>`
    color: ${({ theme, joinStatus }) => (joinStatus ? theme.colors.orange : theme.colors.gray50)};
    ${({ theme }) => theme.fonts.caption9};
  `,
};
