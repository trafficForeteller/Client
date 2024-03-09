import React from "react";
import styled from "styled-components";

import { IcFindPathArrow } from "../../asset/icons";

interface PathInputProps {
  pathDirection: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStationInfo?: () => void;
}

export default function PathInputBox(props: PathInputProps) {
  const { pathDirection, value, onChange, handleStationInfo } = props;

  return (
    <St.PathInputBox>
      <St.Title>{pathDirection}</St.Title>
      <St.Input placeholder={`${pathDirection}지를 입력하세요.`} maxLength={20} value={value} onChange={onChange} />
      {pathDirection === "도착" ? (
        //이 버튼 누르면 출발지와 도착지 정보 서버에 전송
        <St.FindPathBtn onClick={handleStationInfo}>
          <IcFindPathArrow />
        </St.FindPathBtn>
      ) : (
        <></>
      )}
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

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.reg1};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray1};
      /* ${({ theme }) => theme.fonts.reg1}; */
    }
  `,
  FindPathBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
