import styled from "styled-components";

import { InstallNaechinso } from "../@common";

export default function installAppPage() {
  return (
    <St.installAppPage>
      <InstallNaechinso title="친구의 추천서가 도착했어" />
    </St.installAppPage>
  );
}

const St = {
  installAppPage: styled.main`
    /* width: 100vw; */
  `,
};
