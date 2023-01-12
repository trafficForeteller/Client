import { useState } from "react";
import styled from "styled-components";

import { IcSheild } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IPostPhoneNumber } from "../../types/sms";
import { JoinHeader, MoveNextPageBtn, PhoneNumInput, Title } from "../@common";

export interface PhoneNumberPageProps {
  setPostPhoneNum: React.Dispatch<React.SetStateAction<IPostPhoneNumber>>;
  sendSms: () => Promise<void>;
}

export default function PhoneNumberPage(props: PhoneNumberPageProps) {
  const { setPostPhoneNum, sendSms } = props;

  const [inputActive, setInputActive] = useState(true);
  const [phoneNum, setPhoneNum] = useState("");

  return (
    <St.PhoneNumberPage>
      <JoinHeader />
      <St.PageTop>
        <Title title="🏃🏻‍♀️" />
        <Title title="먼저 신원인증을 위해 " />
        <Title title="너의 휴대폰 번호를 적어줘!" />
      </St.PageTop>
      <St.InputWrapper>
        <PhoneNumInput
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          inputActive={inputActive}
          setInputActive={setInputActive}
          label="휴대폰 번호"
          placeholder={""}
          setPostPhoneNum={setPostPhoneNum}
        />
        <St.SheildWrapper>
          <IcSheild />
          <St.SheildDescWrapper>
            <St.SheildDesc>∙ 외부에 공개되지 않으니 안심해!</St.SheildDesc>
            <St.SheildDesc>∙ 네 친구가 내친소에서 연애를 하면 소정의 선물을 보내줄게!🎁</St.SheildDesc>
          </St.SheildDescWrapper>
        </St.SheildWrapper>
      </St.InputWrapper>

      <MoveNextPageBtn
        nextPage={routePaths.Certified}
        title="인증번호 받기"
        inputActive={inputActive}
        sendSms={sendSms}
      />
    </St.PhoneNumberPage>
  );
}

const St = {
  PhoneNumberPage: styled.main``,
  PageTop: styled.hgroup`
    padding: 0 2.4rem;
    margin-bottom: 2.4rem;
  `,
  InputWrapper: styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  `,
  SheildWrapper: styled.article`
    width: 34.5rem;
    height: 4.8rem;
    border-radius: 8px;
    margin: 1.5rem auto;
    padding: 0.4rem 1.6rem 0.4rem 0.55rem;
    background-color: ${({ theme }) => theme.colors.blue40};

    display: flex;
    align-items: center;
    gap: 0.55rem;
  `,
  SheildDescWrapper: styled.span``,
  SheildDesc: styled.p`
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.fonts.caption3}
  `,
};
