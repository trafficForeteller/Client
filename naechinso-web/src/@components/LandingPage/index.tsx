import styled from "styled-components";

import { IcLandingLogo } from "../../asset/icons";
import { Landing } from "../../asset/image";
import NextPageBtn from "../@common/NextPageBtn";
import Title from "../@common/Title";

export default function LandingPage() {
  return (
    <St.LandingPage>
      <IcLandingLogo aria-label="내친소" />
      <Title title={"어떤 친구인지 너무 기대돼🥰"} />
      <St.Blank />
      <Title title={"내친소는 친구의 추천사가 있는 사람만 이용이 가능하거든"} />
      <St.LandingImgWrapper>
        <St.LandingImg src={Landing} alt={"랜딩페이지 아이콘"} />
      </St.LandingImgWrapper>

      {/* <NextPageBtn nextPage={} title={"추천사 쓰러가기"} /> */}
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    //position: relative;
    padding-top: 5.2rem;
  `,
  Blank: styled.div`
    height: 2rem;
  `,
  LandingImg: styled.img`
    height: 35rem;
    margin-top: 6.3rem;
  `,
  LandingImgWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
  `,
};
