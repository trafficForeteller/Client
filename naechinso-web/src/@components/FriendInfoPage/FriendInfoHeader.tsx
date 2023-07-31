import { useState } from "react";
import styled from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";
import { WarningModal } from "../@common";

export default function FriendInfoHeader() {
  const [isWarningModalOpened, setIsWarningModalOpened] = useState(false);

  const movePreviousPage = () => {
    //이전페이지로 이동
    setIsWarningModalOpened(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <St.Header>
        <St.Button onClick={movePreviousPage} type="button">
          <IcPreviousBtn aria-label="이전 페이지로 이동" />
        </St.Button>
        친구 정보
      </St.Header>
      {isWarningModalOpened && (
        <WarningModal
          title1="이 페이지를 나가면"
          title2="추천사는 제출되지 않아🥺"
          desc1="모든 문항을 완성해줘!"
          buttonTitle="응 확인했어!"
        />
      )}
    </>
  );
}

const St = {
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};

    position: absolute;
    width: 100%;
    height: 5.6rem;
    top: 0;
    left: 0;
  `,
  Button: styled.button`
    position: absolute;
    top: 1em;
    left: 1.6rem;
    z-index: 8;
    cursor: pointer;
  `,
};
