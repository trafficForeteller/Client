import { useState } from "react";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import NextPageBtn from "../@common/MoveNextPageBtn";
import PreviousPageBtn from "../@common/MovePreviousPageBtn";
import PhoneNumInput from "../@common/PhoneNumInput";
import Title from "../@common/Title";

export default function PhoneNumberPOage() {
  const [inputActive, setInputActive] = useState(true);

  return (
    <St.PhoneNumberPage>
      <PreviousPageBtn />
      <St.PageTop>
        <Title title={"🏃🏻‍♀️"} />
        <Title title={"먼저 신원인증을 위해 "} />
        <Title title={"너의 휴대폰 번호를 적어줘!"} />
      </St.PageTop>
      <St.InputWrapper>
        <PhoneNumInput
          inputActive={inputActive}
          setInputActive={setInputActive}
          label={"휴대폰 번호"}
          placeholder={""}
        />
      </St.InputWrapper>
      <NextPageBtn nextPage={routePaths.Certified} title={"인증번호 받기"} inputActive={inputActive} />
    </St.PhoneNumberPage>
  );
}

const St = {
  PhoneNumberPage: styled.main``,
  PageTop: styled.hgroup`
    padding: 5.8rem 3.6rem 0;
    margin-bottom: 2.4rem;
  `,
  InputWrapper: styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  `,
};
