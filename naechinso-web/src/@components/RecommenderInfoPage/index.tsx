import { useState } from "react";
import styled from "styled-components";

import { IcMen, IcSheild, IcWomen } from "../../asset/icons";
import { genderTypeList } from "../../core/recommend/member";
import { FixedHeader } from "../@common";
import NameInputBox from "./NameInputBox";

export default function RecommenderInfoPage() {
  const [name, setName] = useState("");
  const [genderTypeArr, setGenderTypeArr] = useState(genderTypeList);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //  이름을 관리하는 함수
    setName(e.target.value);
  };

  return (
    <St.RecommenderInfo>
      <FixedHeader
        header="추천인 소개"
        progressRate={20}
        title1="😆"
        title2="간단히 너를 소개해줘!"
        subTitle1="네 정보를 밝히며 친구를 추천하면"
        subTitle2="이 친구에게 엄청난 신뢰가 더해질거야✌️"
      />

      <St.SheildWrapper>
        <IcSheild />
        <St.SheildDesc>이름 가운데는 *처리 되니 안심해! (ex. 김*민, 박*)</St.SheildDesc>
      </St.SheildWrapper>
      <NameInputBox name={name} handleNameInput={handleNameInput} />

      <St.ChooseGender>
        <St.GenderWrapper>
          <St.GenderIcon src={IcMen} alt="남자" />
          <St.Gender>남자</St.Gender>
        </St.GenderWrapper>
        <St.GenderWrapper>
          <St.GenderIcon src={IcWomen} alt="여자" />
          <St.Gender>여자</St.Gender>
        </St.GenderWrapper>
      </St.ChooseGender>
    </St.RecommenderInfo>
  );
}

const St = {
  RecommenderInfo: styled.main`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,

  SheildWrapper: styled.article`
    width: 32.7rem;
    height: 3.6rem;
    border-radius: 8px;
    margin: 24rem auto 2.4rem;
    padding: 0.8rem 2rem 0.8rem 1rem;
    background-color: ${({ theme }) => theme.colors.blue40};

    display: flex;
    align-items: center;
    gap: 0.55rem;
  `,
  SheildDesc: styled.p`
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.fonts.caption4}
  `,
  ChooseGender: styled.section`
    display: flex;
    gap: 1.5rem;
    margin: 1.6rem auto 0;
    width: fit-content;
  `,
  GenderWrapper: styled.article`
    background-color: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;

    display: flex;
    gap: 0.4rem;
    width: 16rem;
    height: 6.2rem;
    padding: 1.6rem 4.8rem;

    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.sub2}
    cursor: pointer;
  `,
  Gender: styled.p``,
  GenderIcon: styled.img`
    width: 2.4rem;
  `,
};
