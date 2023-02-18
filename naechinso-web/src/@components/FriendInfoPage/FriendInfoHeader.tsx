import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";
import { ProgressBar } from "../@common";

export default function FriendInfoHeader() {
  const navigate = useNavigate();

  function movePreviousPage() {
    //이전페이지로 이동
    alert("이 페이지를 나가면 추천사는 제출되지 않아🥺 모든 문항을 완성해줘!");
    window.scrollTo(0, 0);
    navigate(-1);
  }

  return (
    <St.BasicHeader>
      <St.Header>
        <St.Button onClick={movePreviousPage} type="button">
          <IcPreviousBtn />
        </St.Button>
        친구 정보
      </St.Header>
      <ProgressBar progressRate={20} />
    </St.BasicHeader>
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
