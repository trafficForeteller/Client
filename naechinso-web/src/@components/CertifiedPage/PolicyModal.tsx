import { useState } from "react";
import styled from "styled-components";

import { IcAllChecked, IcAllUnChecked } from "../../asset/icons";

export default function PolicyModal() {
  const [allChecked, setAllChecked] = useState(false);

  return (
    <St.Modal>
      <St.Title>내친소 이용 약관 동의</St.Title>
      <St.AllCheckWrapper type="button" onClick={() => setAllChecked(!allChecked)}>
        <St.IcAllCheckWrapper>{allChecked ? <IcAllChecked /> : <IcAllUnChecked />}</St.IcAllCheckWrapper>

        <St.AllCheck>내친소 이용약관에 모두 동의하기</St.AllCheck>
      </St.AllCheckWrapper>
    </St.Modal>
  );
}

const St = {
  Modal: styled.section`
    width: 100%;
    height: 44rem;
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
  AllCheckWrapper: styled.button`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-left: 2.4rem;
  `,
  IcAllCheckWrapper: styled.span`
    width: 2.4rem;
    z-index: 3;
    position: relative;
    top: 4.4rem;
  `,
  AllCheck: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    z-index: 3;
    position: relative;
    top: 4.4rem;
    width: 26rem;
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
