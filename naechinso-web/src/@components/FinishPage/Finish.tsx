import { useEffect, useState } from "react";
import styled from "styled-components";

import { ImgFinishNone, ImgFinishRecommend, ImgFinishSunguri } from "../../asset/image";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import { ConsultantTextBtn } from "../@common";
import FinishBottom from "../@common/FinishBottom";
import FinishModal from "./FinishModal";

export default function Finish() {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    if (localStorage.getItem("priceType") === "MY_REC") setModalTitle("이제 너의 추천사를 확인해봐");
    else if (localStorage.getItem("priceType") === "SUNGURI") setModalTitle("친구가 가입하면 썬구리가 지급돼");
    else setModalTitle("친구를 추천해줘서 고마워");
  }, []);

  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      {isModalOpened && <FinishModal title={modalTitle} closeModal={closeModal} />}
      <St.Finish>
        <St.TitleWrapper>
          <St.Title>추천사 너무 좋다😉</St.Title>
          <St.Title>이제 링크를 친구에게 전달해 봐! </St.Title>
        </St.TitleWrapper>
        <St.GiftWrapper>
          {localStorage.getItem("priceType") === "MY_REC" ? (
            <St.Gift src={ImgFinishRecommend} alt="추천사 보기 혜택" />
          ) : localStorage.getItem("priceType") === "SUNGURI" ? (
            <St.Gift src={ImgFinishSunguri} alt="썬구리 혜택" />
          ) : (
            <St.Gift src={ImgFinishNone} alt="혜택 없음" />
          )}
        </St.GiftWrapper>

        <St.ShareBtnWrapper>
          <St.ShareBtnLabel>🔗 친구에게 링크를 보내봐</St.ShareBtnLabel>

          <St.ShareBtn type="button" className={GTM_CLASS_NAME.viralUrl}>
            초대 링크 공유하기
          </St.ShareBtn>
        </St.ShareBtnWrapper>

        <St.ConsultantBtnWrapper>
          <ConsultantTextBtn />
        </St.ConsultantBtnWrapper>

        <FinishBottom />
      </St.Finish>
    </>
  );
}

const St = {
  Finish: styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 2rem 0;
    @media only screen and (min-height: 680px) {
      padding-top: 30%;
    }
  `,
  TitleWrapper: styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
  `,
  GiftWrapper: styled.section`
    width: 100%;
    height: 13rem;
    background-color: ${({ theme }) => theme.colors.neural};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;

    margin: 2rem 0 1.6rem;
  `,
  Gift: styled.img`
    width: 32.7rem;
    height: 13rem;
  `,
  ShareBtnWrapper: styled.section`
    width: 100%;
    border: 0.5px solid #cccccc;
    border-radius: 16px;
    padding: 1.8rem 1.2rem 1.6rem;
    gap: 1.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ShareBtnLabel: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body2};
  `,
  ShareBtn: styled.button`
    width: 100%;
    height: 5.2rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body1};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
    cursor: pointer;
  `,
  ConsultantBtnWrapper: styled.article`
    width: 100%;
    float: right;
  `,
};
