import { useEffect } from "react";
import styled from "styled-components";

import { ImgInstallAppQrCode, ImgInstallNaechinso } from "../../asset/image";

interface InstallNaechinsoProps {
  title: string;
}

export default function InstallNaechinso(props: InstallNaechinsoProps) {
  const { title } = props;

  useEffect(() => {
    if (Mobile()) window.location.href = "https://naechinso.page.link/dynamic";
  }, []);

  const Mobile = () => {
    return /Mobi/i.test(window.navigator.userAgent);
  };

  return (
    <St.InstallNaechinso>
      <St.TalkBallon>
        <St.Title>{title}</St.Title>
        <St.Desc>모바일에서 내친소를 확인해줘😊</St.Desc>
        <St.QrCode src={ImgInstallAppQrCode} alt="내친소 앱 설치 큐알코드" />
      </St.TalkBallon>
      <St.Naechinso src={ImgInstallNaechinso} alt="내친소" />
    </St.InstallNaechinso>
  );
}

const St = {
  InstallNaechinso: styled.div`
    background-color: ${({ theme }) => theme.colors.orange};
    margin: 0;
    height: 100vh;
  `,
  TalkBallon: styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 33rem;
    height: 28rem;
    padding: 2.2rem;
    margin: 0;
    background: #ffffff;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.1rem;

    &:after {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 20px 0 0 30px;
      border-bottom-right-radius: 20%;
      border-color: #ffffff transparent;
      display: block;
      width: 0;
      z-index: 1;
      bottom: -1.6rem;
      left: 14.7rem;
    }
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.head1};
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.brown};
    ${({ theme }) => theme.fonts.body9};
  `,
  QrCode: styled.img`
    width: 15rem;
    height: 15rem;
  `,
  Naechinso: styled.img`
    position: absolute;
    top: 33rem;
    right: 0;
  `,
  Button: styled.button<{ title: string }>`
    position: absolute;
    top: 1em;
    left: 1.6rem;
    z-index: 8;
    cursor: pointer;
    visibility: ${({ title }) => (title === "친구의 추천사가 도착했어" ? "" : "hidden")};
  `,
};
