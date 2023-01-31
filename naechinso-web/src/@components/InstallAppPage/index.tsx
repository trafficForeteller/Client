import styled from "styled-components";

import { InstallNaechinso } from "../@common";

export default function installAppPage() {
  return (
    <St.installAppPage>
      <InstallNaechinso title="내친소 시작하러 가볼까?" />
    </St.installAppPage>
  );
}

const St = {
  installAppPage: styled.main`
    /* width: 100vw; */
  `,
};
