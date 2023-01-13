import { useEffect, useState } from "react";
import styled from "styled-components";

import { postMemberJoinRecommender } from "../../apis/member.api";
import { IcCheckedMen, IcCheckedWomen, IcSheild, IcUnCheckedMen, IcUnCheckedWomen } from "../../asset/icons";
import { genderTypeList, genderTypeProps } from "../../core/member/member";
import { routePaths } from "../../core/routes/path";
import { FixedHeader, MoveNextPageBtn } from "../@common";
import NameInputBox from "./NameInputBox";

export default function RecommenderInfoPage() {
  const [name, setName] = useState("");
  const [genderTypeArr, setGenderTypeArr] = useState(genderTypeList);
  const [checkedGender, setCheckedGender] = useState("");
  const [postRecommender, setPostRecommender] = useState({
    gender: "",
    name: "",
  });

  useEffect(() => {
    setPostRecommender({ ...postRecommender, name: name, gender: checkedGender });
  }, [name, genderTypeArr]);

  const handlePostRecommender = async () => {
    await postMemberJoinRecommender(postRecommender, localStorage.getItem("accessToken"));
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //  이름을 관리하는 함수
    setName(e.target.value);
  };

  const toggleChecked = (el: genderTypeProps) => {
    // 항목별 체크
    const newGenderTypeList = genderTypeArr.map((gender, index) => {
      if (el.id === index) {
        gender.checked = !gender.checked;
        if (gender.checked) setCheckedGender(gender.string);
        else setCheckedGender("");
      } else gender.checked = false;
      return gender;
    });
    setGenderTypeArr(newGenderTypeList);
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
        <St.GenderWrapper onClick={() => toggleChecked(genderTypeArr[0])} checked={genderTypeArr[0].checked}>
          {genderTypeArr[0].checked ? <IcCheckedMen /> : <IcUnCheckedMen />}
          <St.Gender>{genderTypeArr[0].gender}</St.Gender>
        </St.GenderWrapper>
        <St.GenderWrapper onClick={() => toggleChecked(genderTypeArr[1])} checked={genderTypeArr[1].checked}>
          {genderTypeArr[1].checked ? <IcCheckedWomen /> : <IcUnCheckedWomen />}
          <St.Gender>{genderTypeArr[1].gender}</St.Gender>
        </St.GenderWrapper>
      </St.ChooseGender>

      <MoveNextPageBtn
        nextPage={routePaths.Certified}
        title="다음"
        inputActive={name === "" || checkedGender === ""}
        handleState={handlePostRecommender}
      />
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
  GenderWrapper: styled.button<{ checked: boolean }>`
    background-color: ${({ theme, checked }) => (checked ? theme.colors.brown : theme.colors.neural)};
    border-radius: 16px;

    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: 16rem;
    height: 6.2rem;
    padding: 1.6rem 4.8rem;

    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.gray40)};
    ${({ theme }) => theme.fonts.sub2}
    cursor: pointer;
  `,
  Gender: styled.p``,
  GenderIcon: styled.img`
    width: 2.4rem;
  `,
};
