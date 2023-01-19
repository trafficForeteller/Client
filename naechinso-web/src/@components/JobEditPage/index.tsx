import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { EditHeader } from "../@common";

export default function JobEditPage() {
  const location = useLocation();
  const jobGetData = location.state;

  return (
    <St.JobEditPage>
      <EditHeader />
    </St.JobEditPage>
  );
}

const St = {
  JobEditPage: styled.main``,
};
