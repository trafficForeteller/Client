import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { routePaths } from "../../core/routes/path";
import Finish from "./Finish";
import MagicFinish from "./MagicFinish";

export default function FinishPage() {
  const [isMemberUuid, setIsMemberUuid] = useState(false);
  const navigate = useNavigate();

  const handleFinish = () => {
    // Finish 페이지의 완료 버튼 클릭 시 실행되는 함수
    navigate(`${routePaths.Landing}`);
  };

  useEffect(() => {
    if (localStorage.getItem("member-uuid")) setIsMemberUuid(true);
    else setIsMemberUuid(false);
  }, []);

  return <>{isMemberUuid ? <Finish handleFinish={handleFinish} /> : <MagicFinish handleFinish={handleFinish} />}</>;
}
