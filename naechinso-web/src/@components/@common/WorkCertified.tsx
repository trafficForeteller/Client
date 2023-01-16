import { useEffect, useState } from "react";
import styled from "styled-components";

import { IcPlus, IcSpeechBubble } from "../../asset/icons";
import { ImgConsultantNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import FixedHeader from "./FixedHeader";
import MoveNextPageBtn from "./MoveNextPageBtn";
import SheildBox from "./SheildBox";

export interface WorkCertifiedProps {
  title1: string;
  title2: string;
  subTitle1: string;
  subTitle2: string;
}

export default function WorkCertified(props: WorkCertifiedProps) {
  const { title1, title2, subTitle1, subTitle2 } = props;
  const [certifiedImg, setCertifiedImg] = useState("");
  const [fileChecked, setFileChecked] = useState(false);

  useEffect(() => {
    handleFileChecked();
  }, [certifiedImg]);

  const handleFileChecked = () => {
    if (certifiedImg) setFileChecked(true);
    else setFileChecked(false);
  };

  return (
    <St.WorkCertified>
      <FixedHeader
        header="추천인 소개"
        progressRate={80}
        title1={title1}
        title2={title2}
        subTitle1={subTitle1}
        subTitle2={subTitle2}
      />
      <SheildBox desc="인증자료는 절대로 외부에 공개되지 않으니 안심해" />

      <St.ImageUploadBox htmlFor="input-file">
        <St.ImgUploadWrapper>
          <IcPlus />
          사진 인증하기
        </St.ImgUploadWrapper>
      </St.ImageUploadBox>
      <St.ImageUpload type="file" accept="image/*" id="input-file" />

      <St.ConsultantWrapper>
        <IcSpeechBubble />
        <St.ConsultantBtn type="button">
          <St.ConsultantNaechinso src={ImgConsultantNaechinso} alt="상담원 내친소 아이콘" />
        </St.ConsultantBtn>
      </St.ConsultantWrapper>

      <MoveNextPageBtn nextPage={routePaths.DontGo} title="완료" inputActive={!fileChecked} />
    </St.WorkCertified>
  );
}

const St = {
  WorkCertified: styled.section`
    width: 100%;
    padding-top: 24rem;
  `,
  ImageUploadBox: styled.label`
    width: 28rem;
    height: 18.7rem;
    display: inline-block;
    margin-left: 4.8rem;

    background-color: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;
    cursor: pointer;
  `,
  ImgUploadWrapper: styled.span`
    width: 28rem;
    height: 18.7rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption6};
  `,
  ImageUpload: styled.input`
    display: none;
  `,
  ConsultantWrapper: styled.article`
    display: flex;
    align-items: center;

    position: absolute;

    right: 2.4rem;
    bottom: 12.4rem;
  `,
  ConsultantBtn: styled.button``,
  ConsultantNaechinso: styled.img``,
};
