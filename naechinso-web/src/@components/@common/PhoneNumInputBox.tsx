import { useState } from "react";
import styled from "styled-components";

export interface PhoneNumInputProps {
  label: string;
  placeholder: string;
}

export default function PhoneNumInputBox(props: PhoneNumInputProps) {
  const { label, placeholder } = props;
  const [phoneNum, setPhoneNum] = useState("");
  const [inputActive, setInputActive] = useState(true);

  const checkPhoneNumLength = (phoneNum: string) => {
    if (phoneNum.length === 13) setInputActive(false);
    else setInputActive(true);
  };

  const autoHyphen = (phoneNum: string) => {
    setPhoneNum(
      phoneNum
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1 $2 $3")
        // eslint-disable-next-line
        .replace(/(\-{1,2})$/g, ""),
    );
    checkPhoneNumLength(phoneNum);
    console.log(inputActive);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    autoHyphen(e.target.value);
  };

  return (
    <St.PhoneNumInputBox>
      <St.Label inputActive={inputActive}>{label}</St.Label>
      <St.Input type="text" value={phoneNum} onChange={handlePhoneNum} placeholder={placeholder} maxLength={13} />
    </St.PhoneNumInputBox>
  );
}

const St = {
  PhoneNumInputBox: styled.article`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
  `,
  Label: styled.p<{ inputActive: boolean }>`
    color: ${({ theme, inputActive }) => (inputActive ? theme.colors.orange : theme.colors.black40)};
    ${({ theme }) => theme.fonts.body2};
  `,
  Input: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
