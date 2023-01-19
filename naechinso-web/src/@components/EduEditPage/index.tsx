import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { EditHeader } from "../@common";

export default function EduEditPage() {
  const location = useLocation();
  const eduGetData = location.state;

  return (
    <St.EduEditPage>
      <EditHeader />
    </St.EduEditPage>
  );
}

const St = {
  EduEditPage: styled.main``,
};
