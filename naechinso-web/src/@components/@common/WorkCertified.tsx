import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { postCertifiedImg } from "../../apis/s3.api";
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
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  dir: string;
}

export default function WorkCertified(props: WorkCertifiedProps) {
  const { title1, title2, subTitle1, subTitle2, dir } = props;
  const [certifiedImg, setCertifiedImg] = useState("");
  const imgRef = useRef<HTMLInputElement>(null);
  const [fileChecked, setFileChecked] = useState(false);

  useEffect(() => {
    handleFileChecked();
  }, [certifiedImg]);

  const handleCertifiedImg = () => {
    // uploadImgToS3(e);
  };

  const handleFileChecked = () => {
    if (certifiedImg) setFileChecked(true);
    else setFileChecked(false);
  };

  const handlePostImgFile = async (formData: FormData) => {
    // s3에 이미지 POST
    const userData = await postCertifiedImg(formData, localStorage.getItem("accessToken"), dir);
    console.log(userData);
  };

  const uploadImgToS3 = (file: File) => {
    // s3에 업로드하기 위한 data 처리
    const formData = new FormData();
    formData.append("multipartFiles", file);

    for (const value of formData.values()) {
      console.log("value", value);
    }
    handlePostImgFile(formData);
  };

  const previewImgFile = () => {
    // 미리보기 기능 구현
    const target = imgRef.current as HTMLInputElement;
    const file = target.files && (target.files[0] as File);
    const reader = new FileReader();
    file && reader.readAsDataURL(file);
    reader.onloadend = () => {
      const resultImg = reader.result as string;
      setCertifiedImg(resultImg);
    };
    file && uploadImgToS3(file);
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
        {certifiedImg ? (
          <St.UploadImage src={certifiedImg} alt="인증사진" />
        ) : (
          <>
            <IcPlus />
            사진 인증하기
          </>
        )}
      </St.ImageUploadBox>
      <St.ImageUpload type="file" accept="image/*" id="input-file" onChange={previewImgFile} ref={imgRef} />

      <St.ConsultantWrapper>
        <IcSpeechBubble />
        <St.ConsultantBtn type="button">
          <St.ConsultantNaechinso src={ImgConsultantNaechinso} alt="상담원 내친소 아이콘" />
        </St.ConsultantBtn>
      </St.ConsultantWrapper>

      <MoveNextPageBtn nextPage={routePaths.Finish} title="완료" inputActive={!fileChecked} />
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
    margin-left: 4.8rem;

    background-color: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;
    cursor: pointer;

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
  UploadImage: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
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
