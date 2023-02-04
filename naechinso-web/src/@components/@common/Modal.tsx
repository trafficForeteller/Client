import { useEffect } from "react";
import styled from "styled-components";

export interface ModalProps {
  title: string;
  desc: string;
  button: string;
  closeModal: () => void;
  resendAuthNum?: () => void;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  setInputBorder?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: ModalProps) {
  const { title, desc, button, resendAuthNum, closeModal, setCount, setInputBorder } = props;

  useEffect(() => {
    if (setInputBorder && setCount) setCount(-1);
  }, []);

  const handleModal = () => {
    if (resendAuthNum) {
      resendAuthNum();
      closeModal();
    } else if (setInputBorder) {
      setInputBorder(true);
      closeModal();
    }
  };

  return (
    <St.Modal>
      <St.Title>{title}</St.Title>
      <St.Desc>{desc}</St.Desc>
      <St.Button type="button" onClick={handleModal}>
        {button}
      </St.Button>
    </St.Modal>
  );
}

const St = {
  Modal: styled.section`
    width: 100%;
    height: 29rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0 0;
    word-break: keep-all;
    text-align: center;
    padding: 0 2rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
    z-index: 3;
    position: relative;
    top: 3.2rem;
    width: 30rem;
    margin: 0 auto;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.black40};
    ${({ theme }) => theme.fonts.sub3};
    z-index: 3;
    position: relative;
    top: 4.4rem;
    width: 26rem;
    margin: 0 auto;
  `,
  Button: styled.button`
    position: relative;
    top: 8rem;

    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
