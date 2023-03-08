import { useEffect } from "react";
import TagManager from "react-gtm-module";

import Finish from "./Finish";
import MagicFinish from "./MagicFinish";

export default function FinishPage() {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/finish" },
    });
  }, []);

  return <>{localStorage.getItem("member-uuid") ? <MagicFinish /> : <Finish />}</>;
}
