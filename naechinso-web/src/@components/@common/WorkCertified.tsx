import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { patchMemberEdu, patchMemberJob, postMemberReissue } from "../../apis/member.api";
import { postCertifiedImg } from "../../apis/s3.api";
import { IcPlus } from "../../asset/icons";
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
  const [patchData, setPatchData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (dir === "edu") {
      const eduInfoOfLocal = localStorage.getItem("eduInfo") as string;
      const eduInfo = JSON.parse(eduInfoOfLocal);
      setPatchData({ ...eduInfo });
    } else if (dir === "job") {
      const jobInfoOfLocal = localStorage.getItem("jobInfo") as string;
      const jobInfo = JSON.parse(jobInfoOfLocal);
      setPatchData({ ...jobInfo });
    }
  }, []);

  useEffect(() => {
    if (!certifiedImg) return;
    handleFileChecked();
  }, [patchData]);

  const handleOpenChannel = () => {
    // 새로운 창에서 약관 열기
    window.open("https://naechinso.channel.io/lounge", "_blank", "noopener, noreferrer");
  };
  // 이미지 파일 유무 확인하기
  const handleFileChecked = () => certifiedImg && patchCertifiedData();

  const patchCertifiedData = async () => {
    if (dir === "edu")
      await patchMemberEdu(
        patchData,
        localStorage.getItem("accessToken"),
        handleSuccessRequest,
        handleFailRequest,
        handleReissuePatchCertifiedData,
      );
    else if (dir === "job")
      await patchMemberJob(
        patchData,
        localStorage.getItem("accessToken"),
        handleSuccessRequest,
        handleFailRequest,
        handleReissuePatchCertifiedData,
      );
  };

  const handleReissuePatchCertifiedData = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    patchCertifiedData();
  };

  const handleSuccessRequest = () => {
    setFileChecked(true);
  };

  const handleFailRequest = (errorMessage: string) => {
    // 서버 요청 실패 시
    console.log(errorMessage);
    setFileChecked(false);
    navigate(routePaths.Error);
  };

  const handlePostImgFile = async (formData: FormData) => {
    // s3에 이미지 POST
    await postCertifiedImg(
      formData,
      localStorage.getItem("accessToken"),
      dir,
      handleSuccessPostImg,
      handleFailRequest,
      handleReissuePostImgFile,
    );
  };

  const handleReissuePostImgFile = async (formData: FormData) => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handlePostImgFile(formData);
  };

  const handleSuccessPostImg = (userData: string) => {
    // s3에 이미지 POST 성공 시
    if (dir === "edu") setPatchData({ ...patchData, eduImage: userData });
    else if (dir === "job") setPatchData({ ...patchData, jobImage: userData });
  };

  const uploadImgToS3 = (file: File) => {
    // s3에 업로드하기 위한 data 처리
    const formData = new FormData();
    formData.append("multipartFiles", file);
    handlePostImgFile(formData);
  };

  // onChange 때얌!
  const previewImgFile = () => {
    // 미리보기 기능 구현
    const target = imgRef.current as HTMLInputElement;
    const file = target.files && (target.files[0] as File);
    const reader = new FileReader();
    file && reader.readAsDataURL(file);
    reader.onloadend = () => {
      const resultImg = reader.result as string;
      file && uploadImgToS3(file);
      setCertifiedImg(resultImg);
    };
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
      <SheildBox desc="인증자료는 절대로 외부에 공개되지 않으니 안심해 :)" />

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
      <St.ImageUpload
        type="file"
        accept="image/*;capture=camera"
        id="input-file"
        onChange={previewImgFile}
        ref={imgRef}
      />

      <St.ConsultantBtn type="button" onClick={handleOpenChannel}>
        <St.ConsultantNaechinso src={ImgConsultantNaechinso} alt="상담원 내친소 아이콘" />
      </St.ConsultantBtn>

      <MoveNextPageBtn
        nextPage={localStorage.getItem("landingUrl") === "edit" ? routePaths.Finish : routePaths.RecommendLanding}
        title="다음"
        disabled={!fileChecked}
      />
    </St.WorkCertified>
  );
}

const St = {
  WorkCertified: styled.section`
    width: 100%;
    padding: 22rem 2rem 0;
  `,
  ImageUploadBox: styled.label`
    width: 28rem;
    height: 18.7rem;
    margin: 0 auto;
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
  ConsultantBtn: styled.button`
    position: absolute;
    right: 2.4rem;
    bottom: 12.4rem;
  `,
  ConsultantNaechinso: styled.img``,
};
