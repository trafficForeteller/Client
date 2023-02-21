import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { patchRecommendFriendDetail, postRecommendation } from "../../apis/recommend.api";
import { IcDontGo } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IPatchFriendDetail, IPostRecommendQuestion } from "../../types/recommend";
import { FixedHeader, MoveNextPageBtn, TextAreaBox } from "../@common";

export default function DontGoPage() {
  const [text, setText] = useState("");
  const [textCheck, setTextCheck] = useState(false);
  const [patchRecommend, setPatchRecommend] = useState<IPatchFriendDetail>({
    appealDetail: "",
    appeals: [],
    dontGo: "",
  });
  const navigate = useNavigate();

  const [postRecommend, setPostRecommend] = useState({
    recommendQuestions: [
      {
        recommendQuestion: "",
        recommendAnswer: "",
      },
    ],
  });

  useEffect(() => {
    if (localStorage.getItem("dontGo")) {
      const dontGo = localStorage.getItem("dontGo") as string;
      setText(dontGo);
      setTextCheck(true);
    }

    const checkedQ1 = parseLocalStorage("checkedQ1");
    if (localStorage.getItem("secondRecommend")) {
      setPostRecommend({
        recommendQuestions: [
          {
            recommendQuestion: handleRecommendQuestion(checkedQ1),
            recommendAnswer: localStorage.getItem("firstRecommend") as string,
          },
          {
            recommendQuestion: "친구에 대해 더 자랑하고 싶은 점을 자유롭게 적어줘😃",
            recommendAnswer: localStorage.getItem("secondRecommend") as string,
          },
        ],
      });
    } else {
      setPostRecommend({
        recommendQuestions: [
          {
            recommendQuestion: handleRecommendQuestion(checkedQ1),
            recommendAnswer: localStorage.getItem("firstRecommend") as string,
          },
        ],
      });
    }
  }, []);

  useEffect(() => {
    handleTextCheck();
    localStorage.setItem("dontGo", text);
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: localStorage.getItem("appealDetail"),
      appeals: JSON.parse(localStorage.getItem("appeals") || "[]"),
      dontGo: localStorage.getItem("dontGo"),
    });
  }, [text]);

  const handleRegisterRecommender = async () => {
    // 추천인으로 등록하기
    await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPostRecommendation,
      handleFailRequest,
    );
  };

  const handleSuccessPostRecommendation = async () => {
    // keyword, appealDetail, dontGo POST 성공할 시
    await patchRecommendFriendDetail(
      patchRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPatchRecommend,
      handleFailRequest,
    );
  };
  const handleFailRequest = (errorMessage: string) => {
    // keyword, appealDetail, dontG POST 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  const handleSuccessPatchRecommend = () => {
    // 추천사 PATCH 성공할 시
    navigate(routePaths.Finish);
  };

  const parseLocalStorage = (item: string) => {
    //  localStorage에 저장된 친구가 배열 혹은 object일 때 JSON.parse하는 함수
    const itemInLocal = localStorage.getItem(`${item}`) as string;
    const parseItem = JSON.parse(itemInLocal);
    return parseItem;
  };

  const handleRecommendQuestion = (recommendQ: IPostRecommendQuestion) => {
    // 질문 공백 없이 합치기
    const recommendQuestion = `${recommendQ.question1}` + `${recommendQ.question2}`;
    return recommendQuestion as string;
  };

  const handleTextCheck = () => {
    if (text.length > 19) setTextCheck(true);
    else setTextCheck(false);
  };

  return (
    <St.DontGo>
      <FixedHeader
        header="추천사"
        progressRate={100}
        title1="마지막이야!"
        title2="친구를 거절한 상대방의"
        title3="마음을 돌릴 한마디?"
      />

      <St.CardWrapper>
        <IcDontGo />
      </St.CardWrapper>

      <St.TextWrapper>
        <TextAreaBox
          placeholder="미래의 형수님 한번만 다시 생각해보십쇼. 이 친구가 겉 보기엔 끌리지 않을 수 있어도, 저와 주변 친구들이 그랬듯 제 친구의 매력에 한 번 빠지면 헤어나올 수 없거든요!"
          minLength={19}
          maxLength={100}
          text={text}
          setText={setText}
          height={7.8}
          letterLimit="20자 이상 100자 이내"
        />
      </St.TextWrapper>

      <MoveNextPageBtn
        nextPage={routePaths.Finish}
        title="완료"
        inputActive={!textCheck}
        handleState={handleRegisterRecommender}
      />
    </St.DontGo>
  );
}

const St = {
  DontGo: styled.main`
    padding-top: 18rem;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 18.6rem;
    position: absolute;
    top: 21rem;
    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 10%);
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TextWrapper: styled.section`
    margin-top: 21rem;
    padding: 0 2rem;
  `,
};
