import { useState } from "react";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import NextPageBtn from "../@common/MoveNextPageBtn";
import PreviousPageBtn from "../@common/MovePreviousPageBtn";
import PhoneNumInputBox from "../@common/PhoneNumInputBox";
import Title from "../@common/Title";

export default function CertifiedPage() {
  const [inputActive, setInputActive] = useState(true);

  return (
    <St.AutorizePage>
      <PreviousPageBtn />
      <St.PageTop>
        <Title title={"📩"} />
        <Title title={"방금 보낸 "} />
        <Title title={"인증번호를 적어줘!"} />
      </St.PageTop>
      <St.InputWrapper>
        <PhoneNumInputBox
          inputActive={inputActive}
          setInputActive={setInputActive}
          label={"인증 번호"}
          placeholder={"인증번호를 입력해줘"}
        />
      </St.InputWrapper>
      <NextPageBtn nextPage={routePaths.InstallApp} title={"완료"} inputActive={inputActive} />
    </St.AutorizePage>
  );
}

const St = {
  AutorizePage: styled.main``,
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
