import { useEffect, useState } from "react";
import styled from "styled-components";

import { postMemberJoinRecommender } from "../../apis/member.api";
import { IcCheckedMen, IcCheckedWomen, IcUnCheckedMen, IcUnCheckedWomen } from "../../asset/icons";
import { genderTypeList, genderTypeProps } from "../../core/member/member";
import { routePaths } from "../../core/routes/path";
import { FixedHeader, MoveNextPageBtn, SheildBox } from "../@common";
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
    // 새로고침 시 이전에 local에 저장된 postRecommender 초기값으로 세팅
    const postRecommenderOfLocal = localStorage.getItem("postRecommender") as string;
    const postRecommender = JSON.parse(postRecommenderOfLocal);
    if (postRecommender) {
      setName(postRecommender.name);
      setCheckedGender(postRecommender.gender);

      const genderTypeListofLocal = localStorage.getItem("genderTypeList") as string;
      const genderTypeList = JSON.parse(genderTypeListofLocal);
      setGenderTypeArr(genderTypeList);
    }
  }, []);

  useEffect(() => {
    setPostRecommender({ ...postRecommender, name: name, gender: checkedGender });
  }, [name, genderTypeArr]);

  const handlePostRecommender = async () => {
    saveRecommenderInfoInLocal();
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

  const saveRecommenderInfoInLocal = () => {
    localStorage.setItem("postRecommender", JSON.stringify(postRecommender));
    localStorage.setItem("genderTypeList", JSON.stringify(genderTypeArr));
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

      <SheildBox desc="이름 가운데는 *처리 되니 안심해! (ex. 김*민, 박*)" />
      <NameInputBox name={name} handleNameInput={handleNameInput} />

      <St.ChooseGender>
        <St.GenderWrapper
          type="button"
          onClick={() => toggleChecked(genderTypeArr[0])}
          checked={genderTypeArr[0].checked}>
          {genderTypeArr[0].checked ? <IcCheckedMen /> : <IcUnCheckedMen />}
          <St.Gender>{genderTypeArr[0].gender}</St.Gender>
        </St.GenderWrapper>
        <St.GenderWrapper
          type="button"
          onClick={() => toggleChecked(genderTypeArr[1])}
          checked={genderTypeArr[1].checked}>
          {genderTypeArr[1].checked ? <IcCheckedWomen /> : <IcUnCheckedWomen />}
          <St.Gender>{genderTypeArr[1].gender}</St.Gender>
        </St.GenderWrapper>
      </St.ChooseGender>

      <MoveNextPageBtn
        nextPage={routePaths.ChooseWork}
        title="다음"
        inputActive={name === "" || checkedGender === ""}
        handleState={handlePostRecommender}
      />
    </St.RecommenderInfo>
  );
}

const St = {
  RecommenderInfo: styled.main`
    padding: 23rem 2rem 0;
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
    justify-content: center;
    gap: 0.4rem;
    width: 16rem;
    height: 6.2rem;

    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.gray40)};
    ${({ theme }) => theme.fonts.sub2}
    cursor: pointer;
  `,
  Gender: styled.p``,
  GenderIcon: styled.img`
    width: 2.4rem;
  `,
};
