import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { InstallNaechinso } from "../@common";

export default function InstallAppPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (Mobile()) navigate("https://naechinso.page.link/dynamic");
    console.log(Mobile());
  }, []);

  const Mobile = () => {
    return /Mobi/i.test(window.navigator.userAgent);
  };

  return (
    <St.installAppPage>
      <InstallNaechinso title="내친소 시작하러 가볼까?" />
    </St.installAppPage>
  );
}

const St = {
  installAppPage: styled.main``,
};
