import { useEffect } from "react";
import styled from "styled-components";

export interface ModalProps {
  title: string;
  desc: string;
  button: string;
  closeModal: () => void;
  resendAuthNum?: () => void;
  setCorrectAuthNum?: React.Dispatch<React.SetStateAction<boolean>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setInputBorder?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Modal(props: ModalProps) {
  const { title, desc, button, resendAuthNum, closeModal, setCorrectAuthNum, setCount, setInputBorder } = props;

  useEffect(() => {
    setCount(-1);
  }, []);

  const handleModal = () => {
    if (resendAuthNum) {
      resendAuthNum();
      closeModal();
    } else if (setCorrectAuthNum && setInputBorder) {
      setCorrectAuthNum(false);
      setInputBorder(true);
      closeModal();
    }
  };

  return (
    <St.Modal>
      <St.Title>{title}</St.Title>
      <St.Desc>{desc}</St.Desc>
      <St.Button onClick={handleModal} type="button">
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
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0 0;
    word-break: keep-all;
    text-align: center;
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
  `,
};
