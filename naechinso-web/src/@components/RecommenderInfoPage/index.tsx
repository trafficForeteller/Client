import { useState } from "react";
import styled from "styled-components";

import { IcSheild } from "../../asset/icons";
import { MovePreviousPageBtn, ProgressBar, SubTitle, Title } from "../@common";
import NameInputBox from "./NameInputBox";

export default function RecommenderInfoPage() {
  const [name, setName] = useState("");

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //  이름을 관리하는 함수
    setName(e.target.value);
  };

  return (
    <St.RecommenderInfo>
      <St.Header>
        <MovePreviousPageBtn />
        추천인 소개
      </St.Header>
      <ProgressBar progressRate={55} />
      <St.TitleWrapper>
        <Title title="😆" />
        <Title title="간단히 너를 소개해줘!" />
      </St.TitleWrapper>
      <SubTitle subTitle="네 정보를 밝히며 친구를 추천하면" />
      <SubTitle subTitle="이 친구에게 엄청난 신뢰가 더해질거야✌️" />

      <St.SheildWrapper>
        <IcSheild />
        <St.SheildDesc>이름 가운데는 *처리 되니 안심해! (ex. 김*민, 박*)</St.SheildDesc>
      </St.SheildWrapper>

      <NameInputBox name={name} handleNameInput={handleNameInput} />
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
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 0.6rem;
    position: relative;
    z-index: -1;

    display: flex;
    flex-direction: column;
  `,

  SheildWrapper: styled.article`
    width: 32.7rem;
    height: 3.6rem;
    border-radius: 8px;
    margin: 2.4rem auto;
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
};
