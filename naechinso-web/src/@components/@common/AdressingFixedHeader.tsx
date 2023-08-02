import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";
// eslint-disable-next-line
import { ImgCircleBlack, ImgCircleGray } from "../../asset/image";
import { Title } from ".";

interface AdressingFixedHeader {
  header: string;
  navigatePath: string;
  title1: string;
  title2?: string;
  title3?: string;
  currentRequiredPage: number;
  count?: number;
}

export default function AdressingFixedHeader(props: AdressingFixedHeader) {
  const { header, navigatePath, title1, title2, title3, currentRequiredPage, count } = props;

  const navigate = useNavigate();

  const movePreviousPage = () => {
    //이전페이지로 이동
    window.scrollTo(0, 0);
    navigate(`${navigatePath}`);
  };

  return (
    <St.AdressingFixedHeader>
      <St.Header>
        <St.MovePressButton onClick={movePreviousPage} type="button">
          <IcPreviousBtn aria-label="이전 페이지 이동" />
        </St.MovePressButton>
        {header}
      </St.Header>

      <St.DotWrapper>
        {[1, 2, 3, 4, 5].map((page) => (
          <St.Dot
            key={page}
            src={currentRequiredPage === page ? ImgCircleBlack : ImgCircleGray}
            alt={`${currentRequiredPage}번째 필수질문`}
          />
        ))}
      </St.DotWrapper>

      <St.TitleWrapper>
        <Title title={title1} />
        {title2 && !title3 && <Title title={title2} />}
        {title2 && title3 && (
          <St.SubTitleWrapper>
            <Title title={title2} /> <St.Blank></St.Blank> <Title title={title3} />
          </St.SubTitleWrapper>
        )}
        {count !== undefined && (
          <St.CountWrapper>
            <St.Count count={count}>{count}</St.Count>
            <St.MaxCount> / {currentRequiredPage === 2 ? 1 : 3}개</St.MaxCount>
          </St.CountWrapper>
        )}
      </St.TitleWrapper>
    </St.AdressingFixedHeader>
  );
}

const St = {
  AdressingFixedHeader: styled.section`
    width: 37.5rem;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;

    padding-bottom: 2.7rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ffffff 10%);
    z-index: 2;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  MovePressButton: styled.button`
    position: absolute;
    top: 1em;
    left: 1.6rem;
    z-index: 8;
    cursor: pointer;
  `,
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold_16};

    position: absolute;
    width: 100%;
    height: 5.4rem;
    top: 0;
    left: 0;
  `,
  Selection: styled.div`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray40};
    margin-bottom: 0.4rem;
  `,
  DotWrapper: styled.section`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    position: relative;
    padding: 6.4rem 2rem 0;
  `,
  Dot: styled.img`
    width: 0.6rem;
    height: 0.6rem;
  `,
  TitleWrapper: styled.hgroup`
    position: relative;
    padding: 1.6rem 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  SubTitleWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
  `,
  Blank: styled.span`
    background-color: ${({ theme }) => theme.colors.neural};
    width: 4.8rem;
    height: 3.4rem;
    border-radius: 10px;
  `,
  CountWrapper: styled.article`
    display: flex;
    gap: 0.4rem;
  `,
  Count: styled.b<{ count: number }>`
    color: ${({ theme, count }) => (count === 0 ? theme.colors.gray30 : theme.colors.orange)};
    ${({ theme }) => theme.fonts.reg_13};
  `,
  MaxCount: styled.p`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.reg_13};
  `,
};
