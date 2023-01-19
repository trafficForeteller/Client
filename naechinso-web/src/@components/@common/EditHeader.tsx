import styled from "styled-components";

import { ImgEditNaechinso } from "../../asset/image";
import JoinHeader from "./JoinHeader";
import WarningBox from "./WarningBox";
export default function EditHeader() {
  return (
    <St.EditHeader>
      <JoinHeader />
      <St.HeaderWrapper>
        <St.Naechinso src={ImgEditNaechinso} alt="내친소" />
        <St.TitleWrapper>
          <St.Title>아래의 규정을 참고해서</St.Title>
          <St.Title>소속 인증을 다시 해보자</St.Title>
        </St.TitleWrapper>
      </St.HeaderWrapper>
      <St.WarningWrapper>
        <WarningBox desc="인증 사진의 화질이 안 좋으면 확인이 어려워" />
        <WarningBox desc="작성된 정보와 인증 사진의 정보가 일치해야해" />
      </St.WarningWrapper>
    </St.EditHeader>
  );
}

const St = {
  EditHeader: styled.header`
    padding: 7rem 2rem 3.2rem;
  `,
  HeaderWrapper: styled.header`
    display: flex;
    gap: 1.2rem;
  `,
  Naechinso: styled.img`
    width: 4rem;
    height: 4rem;
  `,
  WarningWrapper: styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  TitleWrapper: styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.2rem;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head2};
  `,
};
