import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgErrorNaechinso } from "../../asset/image";
import { ConsultantTextBtn, MovePreviousPageBtn } from "../@common";

export default function ErrorPage() {
  const navigate = useNavigate();
  const movePreviousPage = () => {
    //이전페이지로 이동
    window.scrollTo(0, 0);
    navigate(-1);
  };

  return (
    <St.ErrorPage>
      <MovePreviousPageBtn />
      <St.MainBox>
        <St.Naechinso src={ImgErrorNaechinso} alt="내친소" />
        <St.Title>일시적인 오류가 발생했어</St.Title>
        <St.DescWrapper>
          <St.Desc>새로고침을 눌러</St.Desc>
          <St.Desc>페이지를 다시 불러올 수 있어</St.Desc>
        </St.DescWrapper>

        <St.RefreshButton type="button" onClick={movePreviousPage}>
          새로고침
        </St.RefreshButton>
      </St.MainBox>
      <ConsultantTextBtn />
    </St.ErrorPage>
  );
}

const St = {
  ErrorPage: styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  MainBox: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Naechinso: styled.img``,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};

    margin-top: 1.2rem;
    margin-bottom: 0.6rem;
  `,
  DescWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.2rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.body7};
  `,
  RefreshButton: styled.button`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    background-color: ${({ theme }) => theme.colors.orange};
    padding: 1.2rem 2.4rem;
    border-radius: 16px;
  `,
};
