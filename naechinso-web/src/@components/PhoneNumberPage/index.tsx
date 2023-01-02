import styled from "styled-components";

import Title from "../@common/Title";

export default function index() {
  return (
    <St.PhoneNumberPage>
      <Title title={"소개할 친구의 이름이 뭐야?"} />
      <St.LandingTop>
        <IcLandingLogo aria-label="내친소" />
        <St.Blank />
        <Title title={"소개팅은 받고 싶은데"} />
        <Title title={" 소개팅 앱은 싫다면?"} />
      </St.LandingTop>
    </St.PhoneNumberPage>
  );
}

const St = {
  PhoneNumberPage: styled.main``,
};
