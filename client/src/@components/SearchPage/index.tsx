import { SetStateAction, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getSearchBook } from "../../apis/book.api";
import { emojiList } from "../../core/bookInfo/bookInfo";
import { routePaths } from "../../core/routes/path";
import { IGetSearchBookData } from "../../types/book";
import { Header, LoadingBox, SearchBox } from "../@common";

export default function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 URL을 가져오기 위해 useLocation 훅을 사용합니다.

  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태를 관리합니다.
  const [searchResults, setSearchResults] = useState<IGetSearchBookData[] | null>(null);
  const [loading, setLoading] = useState(false); // 로딩 상태를 관리합니다.

  useEffect(() => {
    // 페이지가 로드될 때마다 URL의 쿼리 파라미터를 확인하여 검색어를 가져옵니다.
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get("keyword");
    console.log(keyword);

    // 검색어가 존재하는 경우에만 검색 결과를 가져오고 상태를 업데이트합니다.
    if (keyword) {
      setSearchKeyword(keyword);
      setLoading(true); // 로딩 상태를 true로 설정합니다.
      getSearchBook(keyword, localStorage.getItem("accessToken"), handleSuccessGetSearchBook, handleFailGetSearchBook);
    }
  }, [location.search]); // location.search가 변경될 때마다 실행됩니다.

  const handleSuccessGetSearchBook = (searchBookData: IGetSearchBookData[]) => {
    setSearchResults(searchBookData);
    setLoading(false); // API 요청이 완료되면 로딩 상태를 false로 설정합니다.
  };

  const handleFailGetSearchBook = (errorMessage: string) => {
    console.log(errorMessage);
  };

  // 검색어를 변경하는 함수입니다.
  const handleSearchChange = (value: SetStateAction<string>) => {
    setSearchKeyword(value);
  };

  // 검색을 수행하는 함수입니다.
  const handleSearch = () => {
    if (searchKeyword.trim() !== "") {
      // 검색 페이지로 이동하면서 검색어를 쿼리 파라미터로 전달합니다.
      navigate(`${routePaths.Search}?keyword=${searchKeyword}`);
      console.log(searchKeyword);
    }
  };

  // BookWrapper를 클릭했을 때 Record 페이지로 이동하고 책 정보를 전달하는 함수입니다.
  const handleBookClick = (bookInfo: IGetSearchBookData) => {
    // Record 페이지로 이동하면서 책 정보를 전달합니다.
    navigate(`${routePaths.Record}`, { state: { bookInfo } });
  };

  return (
    <St.Search>
      <Header />
      <SearchBox value={searchKeyword} onChange={handleSearchChange} onSearch={handleSearch} />
      <St.BookShelfWrapper>
        {loading ? (
          <LoadingBox />
        ) : searchResults === null ? (
          <St.BookWrapper>텅</St.BookWrapper>
        ) : (
          searchResults.map((result) => {
            return (
              <St.BookWrapper key={result.isbn} onClick={() => handleBookClick(result)}>
                {result.check === 1 && <St.RecordStatus>기록 완료</St.RecordStatus>}
                <St.BookThumbnail src={result.thumbnail} alt="책 표지" />
                <St.BookName>{result.title}</St.BookName>
                <St.EmotionBox>
                  {result.emotion.map((emo, idx) => {
                    return (
                      <St.EmotionWrapper key={idx}>
                        <St.Emotion src={emojiList[emo.emotionId]} alt="이모지" />
                        <St.EmotionNumber>{emo.emotionNumber}</St.EmotionNumber>
                      </St.EmotionWrapper>
                    );
                  })}
                </St.EmotionBox>
              </St.BookWrapper>
            );
          })
        )}
      </St.BookShelfWrapper>
    </St.Search>
  );
}

const St = {
  Search: styled.section``,
  BookShelfWrapper: styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2.2rem 3.1rem;
  `,
  BookWrapper: styled.span`
    display: flex;
    flex-direction: column;
    position: relative;

    cursor: pointer;
  `,
  RecordStatus: styled.div`
    ${({ theme }) => theme.fonts.semi8};
    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 48px;
    padding: 0.5rem 0.8rem;

    width: fit-content;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
  `,
  BookThumbnail: styled.img`
    width: 9rem;
    height: 12.8rem;
  `,
  BookName: styled.b`
    ${({ theme }) => theme.fonts.semi12};
    margin: 1.1rem 0 0.8rem;
    width: 9rem;
  `,
  EmotionBox: styled.div`
    display: flex;
    gap: 0.3rem;
  `,
  EmotionWrapper: styled.span`
    display: flex;
    gap: 0.3rem;
    border: 0.7px solid ${({ theme }) => theme.colors.lightPurple2};
    border-radius: 12px;
    padding: 0.4rem 0.7rem;
  `,
  Emotion: styled.img`
    width: 1.1rem;
  `,
  EmotionNumber: styled.p`
    ${({ theme }) => theme.fonts.semi8};
    color: ${({ theme }) => theme.colors.gray4};
  `,
};
