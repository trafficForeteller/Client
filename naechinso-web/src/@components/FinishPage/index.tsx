import { useEffect, useState } from "react";

import Finish from "./Finish";
import FinishModal from "./FinishModal";
import FinishSplash from "./FinishSplash";

export default function FinishPage() {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    //memberuuid에 따른 모달 opened 수정
    if (localStorage.getItem("member-uuid")) setIsModalOpened(false);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      {visible && <FinishSplash visible={visible} />}
      {isModalOpened && <FinishModal closeModal={closeModal} />}
      <Finish />
    </>
  );
}
