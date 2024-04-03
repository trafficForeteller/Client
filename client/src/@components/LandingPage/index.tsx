import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgLandingBackground } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { Header, SearchBox } from "../@common";
import BookShelf from "./BookShelf";

export default function LandingPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태를 관리합니다.

  const handleSearch = () => {
    if (searchKeyword.trim() !== "") {
      // 검색 페이지로 이동하면서 검색어를 쿼리 파라미터로 전달합니다.
      navigate(`${routePaths.Search}?keyword=${searchKeyword}`);
      console.log(searchKeyword);
    }
  };

  const handleButtonClick = () => {
    // userId에 따라서 다른 경로로 이동
    if (userId === "") {
      navigate(routePaths.Login);
    } else {
      navigate(routePaths.RecommendBook);
    }
  };

  return (
    <St.Landing>
      <Header />
      <SearchBox value={searchKeyword} onChange={(value: string) => setSearchKeyword(value)} onSearch={handleSearch} />
      <St.IntroBox>
        <St.Title>
          놓치기 아쉬운
          <br />
          당신만을 위한 인생책을 준비했어요
        </St.Title>
        <St.SubTitle>내가 기록한 감정으로 딱 맞는 책을 찾으세요!</St.SubTitle>
        <St.FloatingBtnWrapper type="button" onClick={handleButtonClick}>
          <St.FloatingBtnDesc>
            {userId === "" ? "감동 MAX 책 후기 기록하고" : `${userId}님의 감정 기록 노트`}
            &gt;
          </St.FloatingBtnDesc>
          <St.FloatingBtn>책 추천받기</St.FloatingBtn>
        </St.FloatingBtnWrapper>
      </St.IntroBox>
      <BookShelf userId={userId} />
    </St.Landing>
  );
}

const St = {
  Landing: styled.section``,
  IntroBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 2.8rem 0;
    background-image: url(${ImgLandingBackground});
    background-size: cover; /* 이미지를 컨테이너에 맞게 확대 또는 축소하여 보여줍니다. */
    background-repeat: no-repeat; /* 이미지 반복을 방지합니다. */
    position: relative; /* IntroBox가 포지셔닝을 가지도록 설정합니다. */
    z-index: 0; /* 다른 요소 위에 위치하도록 설정합니다. */

    height: 30rem;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.bold20};

    margin-bottom: 0.7rem;
  `,
  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.reg12};
  `,
  FloatingBtnWrapper: styled.button`
    width: 100%;
    height: 5.9rem;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 2.5rem;
    margin-top: 10.6rem;
  `,
  FloatingBtnDesc: styled.p`
    color: ${({ theme }) => theme.colors.purple2};
    ${({ theme }) => theme.fonts.reg12};
  `,
  FloatingBtn: styled.span`
    background-color: ${({ theme }) => theme.colors.purple2};
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.semi10};
    padding: 0.7rem 1rem;
  `,
};
