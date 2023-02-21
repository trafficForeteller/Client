import { useState } from "react";
import styled from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";
import { ProgressBar } from "../@common";
import WarningModal from "./WarningModal";

export interface FriendInfoHeaderProps {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FriendInfoHeader(props: FriendInfoHeaderProps) {
  const { setIsModalOpened } = props;
  const [isWarningModalOpened, setIsWarningModalOpened] = useState(false);

  function movePreviousPage() {
    //이전페이지로 이동
    setIsModalOpened(true);
    setIsWarningModalOpened(true);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <St.BasicHeader>
        <St.Header>
          <St.Button onClick={movePreviousPage} type="button">
            <IcPreviousBtn />
          </St.Button>
          친구 정보
        </St.Header>
        <ProgressBar progressRate={20} />
      </St.BasicHeader>
      {isWarningModalOpened && <WarningModal />}
    </>
  );
}

const St = {
  BasicHeader: styled.article``,
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
