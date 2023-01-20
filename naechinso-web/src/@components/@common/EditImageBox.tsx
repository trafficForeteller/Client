import { SetStateAction, useRef, useState } from "react";
import styled from "styled-components";

import { postCertifiedImg } from "../../apis/s3.api";
import { IcPlusWhite } from "../../asset/icons";

export interface EditImageBoxProps {
  image: string;
  setImage: React.Dispatch<SetStateAction<string>>;
  dir: string;
}

export default function EditImageBox(props: EditImageBoxProps) {
  const { image, setImage, dir } = props;
  const imgRef = useRef<HTMLInputElement>(null);
  const [changedImg, setChangedImg] = useState(false);

  const handlePostImgFile = async (formData: FormData) => {
    // s3에 이미지 POST
    setChangedImg(true);
    const userData = await postCertifiedImg(formData, localStorage.getItem("accessToken"), dir);
    const strImgName = userData && (userData[0] as string);
    strImgName &&
      setImage(`https://elasticbeanstalk-ap-northeast-2-381146100755.s3.ap-northeast-2.amazonaws.com/${strImgName}`);
  };

  const uploadImgToS3 = (file: File) => {
    // s3에 업로드하기 위한 data 처리
    const formData = new FormData();
    formData.append("multipartFiles", file);
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
      setImage(resultImg);
    };
    file && uploadImgToS3(file);
  };

  return (
    <>
      <St.EditImageBox htmlFor="input-file">
        <St.UploadImage src={image} alt="인증사진" />
        {changedImg ? (
          <></>
        ) : (
          <St.DarkImg>
            <IcPlusWhite />
            사진 변경하기
          </St.DarkImg>
        )}
      </St.EditImageBox>
      <St.ImageUpload type="file" accept="image/*" id="input-file" onChange={previewImgFile} ref={imgRef} />
    </>
  );
}

const St = {
  EditImageBox: styled.label`
    width: 100%;
    height: 22rem;

    background-color: ${({ theme }) => theme.colors.gray40};
    border-radius: 16px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body4};
    position: relative;
  `,
  UploadImage: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
  `,
  ImageUpload: styled.input`
    display: none;
  `,
  DarkImg: styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    width: 100%;
    height: 100%;
    border-radius: 16px;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
