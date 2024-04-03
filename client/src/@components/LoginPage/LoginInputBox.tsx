import styled from "styled-components";

interface LoginInputBoxProps {
  inputName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function IdInputBox(props: LoginInputBoxProps) {
  const { inputName, value, onChange } = props;

  return (
    <St.LoginInputBox>
      <St.LoginInput placeholder={`${inputName}`} maxLength={20} value={value} onChange={onChange} />
    </St.LoginInputBox>
  );
}

const St = {
  LoginInputBox: styled.section`
    width: 100%;
  `,
  LoginInput: styled.input`
    width: 100%;
    height: 4.8rem;
    padding: 1.4rem 1.6rem;

    border: 1px solid ${({ theme }) => theme.colors.gray1};
    border-radius: 1.2rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.reg14};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      /* ${({ theme }) => theme.fonts.reg1}; */
    }
  `,
};
