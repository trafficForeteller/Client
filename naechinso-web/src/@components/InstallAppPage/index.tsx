import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Helmet } from "react-helmet-async";

import { InstallNaechinso } from "../@common";

export default function InstallAppPage() {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/naechinso-app" },
    });
  }, []);

  return (
    <main>
      <Helmet>
        <meta name="title" content="내친소, 자기소개 쓰러 갈래?" />
        <meta name="description" content="내 친구가 작성한 추천사가 도착했어✨" />
        <meta property="og:title" content="내친소, 자기소개 쓰러 갈래?" />
        <meta property="og:description" content="내 친구가 작성한 추천사가 도착했어✨" />
        <meta property="og:url" content="https://recommend.naechinso.com/naechinso-app" />
        <meta property="og:url" content="https://naechinso.page.link/dynamic" />
      </Helmet>
      <InstallNaechinso title="내친소 시작하러 가볼까?" />
    </main>
  );
}
