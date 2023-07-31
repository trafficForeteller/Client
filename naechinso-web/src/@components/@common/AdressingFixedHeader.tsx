import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line
import { IcPreviousBtn } from "../../asset/icons";
import { Title } from ".";

interface AdressingFixedHeader {
  header: string;
  navigatePath: string;
  title1: string;
  title2?: string;
}

export default function AdressingFixedHeader(props: AdressingFixedHeader) {
  const { header, navigatePath, title1, title2 } = props;

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
      <St.TitleWrapper>
        <Title title={title1} />
        {title2 && <Title title={title2} />}
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
    ${({ theme }) => theme.fonts.body1};

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
  TitleWrapper: styled.hgroup`
    position: relative;
    padding: 9rem 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
};
