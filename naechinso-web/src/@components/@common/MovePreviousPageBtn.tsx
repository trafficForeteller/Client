import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";

export default function PreviousPageBtn() {
  const navigate = useNavigate();

  function movePreviousPage() {
    //이전페이지로 이동
    navigate(-1);
  }

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
  `,
};
