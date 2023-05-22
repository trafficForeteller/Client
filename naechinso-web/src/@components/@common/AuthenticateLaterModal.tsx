import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgWarningNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";

export interface AuthenticateLaterModalProps {
  title1: string;
  highlight: string;
  desc1: string;
  desc2?: string;
  buttonTitle: string;
  setIsAuthenticateLaterModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthenticateLaterModal(props: AuthenticateLaterModalProps) {
  const { title1, highlight, desc1, desc2, buttonTitle, setIsAuthenticateLaterModalOpened } = props;
  const navigate = useNavigate();

  const sendAuthAddress = () => {
    console.log("first");
  };

  const closeModal = () => {
    setIsAuthenticateLaterModalOpened(false);
  };

  return (
    <St.AuthenticateLaterModal>
      <St.Naechinso src={ImgWarningNaechinso} alt="내친소" />
      <St.TitleWrapper>
        <St.Title>{title1}</St.Title>
      </St.TitleWrapper>
      <St.DescWrapper>
        <St.Desc>
          <St.Hightlight>{highlight}</St.Hightlight>
          {desc1}
        </St.Desc>
        <St.Desc>{desc2}</St.Desc>
      </St.DescWrapper>

      <St.ButtonWrapper>
        <St.AuthLaterBtn onClick={sendAuthAddress} type="button">
          나중에 하기
        </St.AuthLaterBtn>
        <St.CloseModalBtn onClick={closeModal} type="button">
          {buttonTitle}
        </St.CloseModalBtn>
      </St.ButtonWrapper>
    </St.AuthenticateLaterModal>
  );
}

const St = {
  AuthenticateLaterModal: styled.section`
    padding: 5.6rem 2rem 1.8rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    width: 31.1rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Naechinso: styled.img`
    width: 8.6rem;
    height: 8.6rem;

    position: absolute;
    top: -20%;
    left: 50%;
    transform: translate(-50%, 0);
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  DescWrapper: styled.article`
    margin: 0.6rem 0 3.6rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.sub3};
  `,
  Hightlight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.sub4};
  `,
  ButtonWrapper: styled.article`
    display: flex;
    gap: 1rem;
    width: 100%;
  `,
  AuthLaterBtn: styled.button`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body3};
    height: 4.4rem;
    padding: 1.2rem 1.6rem;
    width: 50%;
  `,
  CloseModalBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body3};
    height: 4.4rem;
    border-radius: 12px;
    padding: 1.2rem 1.6rem;
    width: 50%;
  `,
};
