import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

import { ImgFinishModalNaechinso } from "../../asset/image";
import { GTM_CLASS_NAME } from "../../util/const/gtm";

interface FinishModalProps {
  closeModal: () => void;
}

export default function FinishModal(props: FinishModalProps) {
  const { closeModal } = props;

  const recommenderName = localStorage.getItem("recommenderName") || "친한";
  const copyText = `${recommenderName} 친구가 너에 대한 추천사 작성을 완료했어!🎉 

내친소는 너처럼 실제 친구에게 추천을 받은, 주변에서 신뢰받고 애정받은 사람들만 가입할 수 있는 지인소개팅 서비스야! (너는 복받았다! 이런 좋은 친구를 두다니!) 
      
이제 너가 할 일은 간단한 자기소개만 하면 끝!😎 내친소에서 너만큼 멋진 친구들을 만나러 가볼까?
      
앱 다운로드: https://naechinso.page.link/dynamic`;

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(`${process.env.REACT_APP_JS_KEY}`);
    }
  }, []);

  const shareRecommendLink = () => {
    if (Mobile() && navigator.share) {
      navigator
        .share({
          text: copyText,
        })
        .then(() => console.log("공유 성공"))
        .catch((error) => console.log("공유 실패", error));
    } else {
      navigator.clipboard.writeText(copyText);
      alert("클립보드에 초대링크를 복사했어!");
    }
    closeModal();
  };

  const Mobile = () => {
    return /Mobi/i.test(window.navigator.userAgent);
  };

  return (
    <>
      <St.ModalBackground />
      <St.FinishModal>
        <St.Naechinso src={ImgFinishModalNaechinso} alt="내친소" />
        <St.TitleWrapper>
          <St.Title>이제 남은 건 친구의 가입 뿐...😎</St.Title>
        </St.TitleWrapper>
        <St.DescWrapper>
          <St.Desc>
            아래의 <St.Highlight>🔗링크</St.Highlight>를 꼭 친구에게 전달해줘
          </St.Desc>
        </St.DescWrapper>
        <CopyToClipboard text={copyText} onCopy={shareRecommendLink}>
          <St.ButtonWrapper>
            <St.Button type="button" className={GTM_CLASS_NAME.shareLink}>
              초대 링크 공유하기
            </St.Button>
          </St.ButtonWrapper>
        </CopyToClipboard>
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
    transform: scaleX(-1);
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1.2rem 0 0.8rem;
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
