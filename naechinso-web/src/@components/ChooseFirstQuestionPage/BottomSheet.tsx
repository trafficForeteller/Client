import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { postRecommendation } from "../../apis/recommend.api";
import { IcPreviousBtn } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IPostRecommendQuestion } from "../../types/recommend";
import { MoveNextPageBtn, TextAreaBox, ToggleTipBox } from "../@common";

interface BottomSheetProps {
  closeModal: () => void;
}

export default function BottomSheet(props: BottomSheetProps) {
  const { closeModal } = props;

  const [firstRecommend, setFirstRecommend] = useState("");
  const [questionData, setQuestionData] = useState<IPostRecommendQuestion>({
    id: 0,
    question: "",
    placeholder: "",
    checked: true,
  });
  const [postRecommend, setPostRecommend] = useState({
    recommendQuestions: [
      {
        recommendQuestion: "",
        recommendAnswer: "",
      },
    ],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkedQ1 = parseLocalStorage("checkedQ1");
    setQuestionData(checkedQ1);
    if (localStorage.getItem("firstRecommend")) {
      const recommendInLocal = localStorage.getItem("firstRecommend") as string;
      setFirstRecommend(recommendInLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("firstRecommend", firstRecommend);
    setPostRecommend({
      recommendQuestions: [
        {
          recommendQuestion: parseLocalStorage("checkedQ1").question,
          recommendAnswer: firstRecommend,
        },
      ],
    });
  }, [firstRecommend]);

  const isButtonDisabled = !firstRecommend || firstRecommend.length < 50;

  const parseLocalStorage = (item: string) => {
    //  localStorage에 저장된 친구가 배열 혹은 object일 때 JSON.parse하는 함수
    const itemInLocal = localStorage.getItem(`${item}`) as string;
    const parseItem = JSON.parse(itemInLocal);
    return parseItem;
  };

  const handleRegisterRecommender = async () => {
    // 추천사 등록하기
    await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPostRecommendation,
      handleFailRequest,
      handleReissuePostRecommendation,
    );
  };

  const handleReissuePostRecommendation = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleRegisterRecommender();
  };

  const handleSuccessPostRecommendation = async () => {
    navigate(routePaths.SecondRecommend);
  };

  const handleFailRequest = (errorMessage: string) => {
    //  postRecommendation 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  return (
    <>
      <St.ModalBackground />
      <St.BottomSheet>
        <St.Button onClick={closeModal} type="button">
          <IcPreviousBtn aria-label="모달 닫기" />
        </St.Button>
        <St.Title>{questionData.question}</St.Title>

        <ToggleTipBox />

        <TextAreaBox
          placeholder={questionData.placeholder}
          minLength={49}
          maxLength={150}
          text={firstRecommend}
          setText={setFirstRecommend}
          height={13}
          letterLimit="50자 이상 150자 이내"
          isModalOpened={false}
          textareaScroll={true}
        />
        <MoveNextPageBtn title="다음" disabled={isButtonDisabled} handleState={handleRegisterRecommender} />
      </St.BottomSheet>
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
    height: 100%;
    z-index: 98;
  `,
  BottomSheet: styled.main`
    padding: 0 2rem 11rem;
    width: 100%;
    height: 90%;
    transition: transform 0.2s ease;

    position: fixed;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0px 0px;

    z-index: 99;
    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  Button: styled.button`
    cursor: pointer;
    padding: 3rem 0 2rem;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1.8rem;
  `,
};
