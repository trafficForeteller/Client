import { useEffect, useState } from "react";

import Finish from "./Finish";
import MagicFinish from "./MagicFinish";

export default function FinishPage() {
  const [isMemberUuid, setIsMemberUuid] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("member-uuid")) setIsMemberUuid(true);
    else setIsMemberUuid(false);
  }, []);

  return <>{isMemberUuid ? <Finish /> : <MagicFinish />}</>;
}
