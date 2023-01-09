import styled from "styled-components";

export interface IPostPhoneNumber {
  phoneNumber: string;
}

export interface PhoneNumInputProps {
  label: string;
  placeholder: string;
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNum: string;
  setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
  setPostPhoneNum: React.Dispatch<React.SetStateAction<IPostPhoneNumber>>;
}

export default function PhoneNumInputBox(props: PhoneNumInputProps) {
  const { label, placeholder, inputActive, setInputActive, phoneNum, setPhoneNum, setPostPhoneNum } = props;
  const checkPhoneNumLength = (phoneNum: string) => {
    //휴대폰번호 길이 확인해 label글자색, nextBtn 색 변화
    if (phoneNum.length === 9) setInputActive(false);
    else setInputActive(true);
  };

  const processPhoneNum = (phoneNum: string) => {
    // 입력한 번호의 공백제거 && 010붙여주기
    const postPhoneNum = "010" + phoneNum.replace(/ /g, "");
    setPostPhoneNum({ phoneNumber: postPhoneNum });
  };

  const autoHyphen = (phoneNum: string) => {
    // 전화번호 정규식
    setPhoneNum(phoneNum.replace(/[^0-9]/g, "").replace(/^(\d{3,4})(\d{4})$/g, "$1 $2"));
    checkPhoneNumLength(phoneNum);
    processPhoneNum(phoneNum);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    //휴대폰번호 handle 함수
    autoHyphen(e.target.value);
  };

  return (
    <St.PhoneNumInputBox>
      <St.Label inputActive={inputActive}>{label}</St.Label>
      <St.InputWrapper>
        <St.FrontPhoneNum>010</St.FrontPhoneNum>
        <St.Input type="text" value={phoneNum} onChange={handlePhoneNum} placeholder={placeholder} maxLength={9} />
      </St.InputWrapper>
    </St.PhoneNumInputBox>
  );
}

const St = {
  PhoneNumInputBox: styled.section`
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
  InputWrapper: styled.article`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  FrontPhoneNum: styled.span``,
  Input: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
    justify-content: center;
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
