import { useState } from "react";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { IPostPhoneNumber } from "../../types/sms";
import { ContactBtn, JoinHeader, MoveNextPageBtn, PhoneNumInput, Title } from "../@common";

export interface PhoneNumberPageProps {
  setPostPhoneNum: React.Dispatch<React.SetStateAction<IPostPhoneNumber>>;
  sendSms: () => Promise<void>;
}

export default function PhoneNumberPage(props: PhoneNumberPageProps) {
  const { setPostPhoneNum, sendSms } = props;
  const [inputActive, setInputActive] = useState(true);

  return (
    <St.PhoneNumberPage>
      <JoinHeader />
      <St.PageTop>
        <Title title="🏃🏻‍♀️" />
        <Title title="먼저 신원인증을 위해 " />
        <Title title="너의 휴대폰 번호를 적어줘!" />
      </St.PageTop>

      <PhoneNumInput
        inputActive={inputActive}
        setInputActive={setInputActive}
        label="휴대폰 번호"
        placeholder=""
        setPostPhoneNum={setPostPhoneNum}
        handleState={sendSms}
      />
      <ContactBtn />

      <MoveNextPageBtn
        nextPage={routePaths.Certified}
        title="인증번호 받기"
        disabled={inputActive}
        handleState={sendSms}
      />
    </St.PhoneNumberPage>
  );
}

const St = {
  PhoneNumberPage: styled.main`
    padding: 5.6rem 2rem 0;
  `,
  PageTop: styled.hgroup`
    margin-bottom: 2.4rem;
  `,
};
