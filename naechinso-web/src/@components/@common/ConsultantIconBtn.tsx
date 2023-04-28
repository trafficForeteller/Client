import styled from "styled-components";

import { ImgConsultantNaechinso } from "../../asset/image";

export default function ConsultantIconBtn() {
  const goChannelTalk = () => {
    if (Mobile()) window.location.href = "https://naechinso.channel.io/lounge";
    else window.open("https://naechinso.channel.io/lounge");
  };

  const Mobile = () => {
    return /Mobi/i.test(window.navigator.userAgent);
  };

  return (
    <St.ConsultantIconBtn type="button" onClick={goChannelTalk}>
      <St.ConsultantNaechinso src={ImgConsultantNaechinso} alt="상담원 내친소 아이콘" />
    </St.ConsultantIconBtn>
  );
}

const St = {
  ConsultantIconBtn: styled.button`
    position: fixed;
    right: 2.4rem;
    bottom: 12.4rem;
    width: 6.4rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ConsultantNaechinso: styled.img`
    width: 100%;
  `,
};
