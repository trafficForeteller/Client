import styled from "styled-components";

export interface IPostPhoneNumber {
  phoneNumber: string;
}

export interface PhoneNumInputProps {
  label: string;
  placeholder: string;
  activeBtn: boolean;
  setActiveBtn: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNum: string;
  setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
  setPostPhoneNum: React.Dispatch<React.SetStateAction<IPostPhoneNumber>>;
  isModalOpened: boolean;
}

export default function PhoneNumInputBox(props: PhoneNumInputProps) {
  const { label, placeholder, activeBtn, setActiveBtn, phoneNum, setPhoneNum, setPostPhoneNum, isModalOpened } = props;
  const checkPhoneNumLength = (phoneNum: string) => {
    //휴대폰번호 길이 확인해 label글자색, nextBtn 색 변화
    if (phoneNum.length === 9) setActiveBtn(true);
    else setActiveBtn(false);
  };

  const processPhoneNum = (phoneNum: string) => {
    // 입력한 번호의 공백제거 && 010붙여주기
    const postPhoneNum = "010" + phoneNum.replace(/ /g, "");
    setPostPhoneNum && setPostPhoneNum({ phoneNumber: postPhoneNum });
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
    <St.PhoneNumInputBox isModalOpened={isModalOpened}>
      <St.Label activeBtn={activeBtn}>{label}</St.Label>
      <St.InputWrapper>
        <St.FrontPhoneNum>010</St.FrontPhoneNum>
        <St.Input type="text" value={phoneNum} onChange={handlePhoneNum} placeholder={placeholder} maxLength={9} />
      </St.InputWrapper>
    </St.PhoneNumInputBox>
  );
}

const St = {
  PhoneNumInputBox: styled.section<{ isModalOpened: boolean }>`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 0 auto;

    position: relative;
    z-index: ${({ isModalOpened }) => (isModalOpened ? "-1" : "")};
  `,
  Label: styled.p<{ activeBtn: boolean }>`
    color: ${({ theme, activeBtn }) => (activeBtn ? theme.colors.black40 : theme.colors.orange)};
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
    width: 100%;
    margin-left: 0.5rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
