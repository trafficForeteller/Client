import React from "react";
import styled from "styled-components";

import { IcFindPathArrow } from "../../asset/icons";

interface PathInputProps {
  pathDirection: string;
}

export default function PathInputBox(props: PathInputProps) {
  const { pathDirection } = props;

  return (
    <St.PathInputBox>
      <St.Title>{pathDirection}</St.Title>
      <St.Input placeholder={`${pathDirection}지를 입력하세요.`} />
      {pathDirection === "도착" ? <IcFindPathArrow /> : <></>}
    </St.PathInputBox>
  );
}

const St = {
  PathInputBox: styled.article`
    display: flex;
    align-items: center;

    width: 100%;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.reg1};
  `,
  Input: styled.input`
    padding: 1.6rem 1.77rem;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    border-radius: 0.8rem;
    margin: 0 1.6rem 0 2.6rem;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray1};
      ${({ theme }) => theme.fonts.reg1};
    }
  `,
};
