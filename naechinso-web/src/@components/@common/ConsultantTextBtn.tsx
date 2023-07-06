import styled from "styled-components";

export default function ConsultantTextBtn() {
  const goChannelTalk = () => {
    if (Mobile()) window.location.href = "https://naechinso.channel.io/lounge";
    else window.open("https://naechinso.channel.io/lounge");
  };

  const Mobile = () => {
    return /Mobi/i.test(window.navigator.userAgent);
  };

  return (
    <St.ConsultantTextBtn type="button" onClick={goChannelTalk}>
      문의하기
    </St.ConsultantTextBtn>
  );
}

const St = {
  ConsultantTextBtn: styled.button`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption7};

    width: fit-content;

    border-bottom: 1px solid ${({ theme }) => theme.colors.gray40};
    line-height: 1.4rem;
    position: fixed;
    right: 2.4rem;
    bottom: 9.2rem;
  `,
};
