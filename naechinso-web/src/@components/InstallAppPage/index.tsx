import { Helmet } from "react-helmet-async";

import { InstallNaechinso } from "../@common";

export default function InstallAppPage() {
  return (
    <div>
      <Helmet>
        <meta name="title" content="내친소, 믿을만한 내 친구 소개받을래?" />
        <meta name="description" content="실제 친구가 추천하는 친구 소개받기" />
        <meta property="og:title" content="내친소, 믿을만한 내 친구 소개받을래?" />
        <meta property="og:description" content="실제 친구가 추천하는 친구 소개받기" />
      </Helmet>
      <InstallNaechinso title="내친소 시작하러 가볼까?" />
    </div>
  );
}
