import styled from "styled-components";

import { IGiftInfo } from "../../types/recommend";
import { GTM_CLASS_NAME } from "../../util/const/gtm";

interface RouletteModalProps {
  closeModal: () => void;
  giftInfo: IGiftInfo;
}

export default function RouletteModal(props: RouletteModalProps) {
  const { closeModal, giftInfo } = props;

  return (
    <>
      <St.ModalBackground />
      <St.FinishModal>
        <St.Naechinso src={giftInfo.src} alt="내친소 상품" />
        <St.TitleWrapper>
          <St.HighLightTitle>{giftInfo.name}</St.HighLightTitle>
          <St.Title>에 당첨됐어! 🎉🎉</St.Title>
        </St.TitleWrapper>
        <St.DescWrapper>
          <St.Desc>축하해🧡 당첨된 대박 선물은</St.Desc>
          <St.Desc>
            친소가
            <St.Highlight> {giftInfo.name.includes("썬구리") ? "바로 지급" : "3일 내에 문자"}</St.Highlight>
            {giftInfo.name.includes("썬구리") ? "할게💌" : "로 보낼게💌"}
          </St.Desc>
        </St.DescWrapper>

        <St.ButtonWrapper>
          <St.Button type="button" onClick={closeModal} className={GTM_CLASS_NAME.rouletteSuccess}>
            알겠어!
          </St.Button>
        </St.ButtonWrapper>
      </St.FinishModal>
    </>
  );
}

const St = {
  ModalBackground: styled.div`
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
  `,
  FinishModal: styled.main`
    padding: 2.8rem 2rem 2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    width: 31.1rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Naechinso: styled.img`
    width: 8rem;
    height: 8rem;
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1.2rem 0 0.8rem;
  `,
  HighLightTitle: styled.h2`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.sub4};
    background-color: ${({ theme }) => theme.colors.gray10};
    padding: 0.2rem 0.8rem;
    border-radius: 8px;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
  `,
  DescWrapper: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.4rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body2};
  `,
  Highlight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
  `,
  ButtonWrapper: styled.article``,
  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body3};
    width: 27.1rem;
    height: 4.4rem;
    border-radius: 12px;
  `,
};
