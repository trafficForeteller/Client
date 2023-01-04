import styled from "styled-components";

export default function Modal() {
  return (
    <St.Modal>
      <St.Title>인증번호 입력 시간이 초과되었어🔐</St.Title>
      <St.Desc>같은 번호로 다시 보내줄테니까 확인하고 다시 입력해줘!</St.Desc>
      <St.Button>다시 받기</St.Button>
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
    width: 25rem;
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
