import { useEffect, useState } from "react";

import Finish from "./Finish";
import FinishModal from "./FinishModal";

export default function FinishPage() {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    //memberuuid에 따른 모달 opened 수정
    if (localStorage.getItem("member-uuid")) setIsModalOpened(false);

    // 리워드에 따른 모달 title 수정
    if (localStorage.getItem("priceType") === "MY_REC") setModalTitle("이제 너의 추천사를 확인해봐");
    else if (localStorage.getItem("priceType") === "SUNGURI") setModalTitle("친구가 가입하면 썬구리가 지급돼");
    else setModalTitle("친구를 추천해줘서 고마워");
  }, []);

  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      {isModalOpened && <FinishModal title={modalTitle} closeModal={closeModal} />}
      <Finish />
    </>
  );
}
