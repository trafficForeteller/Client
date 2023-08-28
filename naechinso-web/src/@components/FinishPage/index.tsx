import { useEffect, useState } from "react";

import Finish from "./Finish";
import FinishModal from "./FinishModal";
import FinishSplash from "./FinishSplash";

export default function FinishPage() {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    //memberuuid에 따른 모달 opened 수정
    if (localStorage.getItem("member-uuid")) setIsModalOpened(false);

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      {showSplash && <FinishSplash />}
      {isModalOpened && <FinishModal closeModal={closeModal} />}
      <Finish />
    </>
  );
}
