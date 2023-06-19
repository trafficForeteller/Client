import { Helmet } from "react-helmet-async";

import { InstallNaechinso } from "../@common";

export default function InstallAppPage() {
  return (
    <main>
      <Helmet>
        <meta name="title" content="내친소, 내친구를 소개합니다" />
        <meta name="description" content="평판좋고 신뢰받는 친구를 소개받고 싶을 땐? 내친소로 와🤗" />
        <meta property="og:title" content="내친소, 내친구를 소개합니다" />
        <meta property="og:description" content="평판좋고 신뢰받는 친구를 소개받고 싶을 땐? 내친소로 와🤗" />
        <meta property="og:url" content="https://recommend.naechinso.com/naechinso-app" />
        <meta property="og:url" content="https://naechinso.page.link/dynamic" />
      </Helmet>
      <InstallNaechinso title="내친소 시작하러 가볼까?" />
    </main>
  );
}
