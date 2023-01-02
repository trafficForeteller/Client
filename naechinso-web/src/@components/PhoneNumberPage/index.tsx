import styled from "styled-components";

import PreviousPageBtn from "../@common/MovePreviousPageBtn";
import ShortInputBox from "../@common/ShortInputBox";
import Title from "../@common/Title";

export default function index() {
  return (
    <St.PhoneNumberPage>
      <PreviousPageBtn />
      <St.PageTop>
        <Title title={"🏃🏻‍♀️"} />
        <Title title={"먼저 신원인증을 위해 "} />
        <Title title={"너의 휴대폰 번호를 적어줘!"} />
      </St.PageTop>
      <St.InputWrapper>
        <ShortInputBox label={"휴대폰 번호"} placeholder={"휴대폰 번호를 입력해줘"} />
      </St.InputWrapper>
    </St.PhoneNumberPage>
  );
}

const St = {
  PhoneNumberPage: styled.main`
    position: relative;
  `,
  PageTop: styled.hgroup`
    padding: 5.8rem 3.6rem 0;
  `,
  InputWrapper: styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  `,
};
