import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";

export default function MovePreviousPageBtn() {
  const navigate = useNavigate();

  const movePreviousPage = () => {
    //이전페이지로 이동
    window.scrollTo(0, 0);
    navigate(-1);
  };

  return (
    <St.Button onClick={movePreviousPage} type="button">
      <IcPreviousBtn />
    </St.Button>
  );
}

const St = {
  Button: styled.button`
    position: absolute;
    top: 1em;
    left: 1.6rem;
    z-index: 8;
    cursor: pointer;
  `,
};
