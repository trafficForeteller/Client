import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcFinishNaechinso } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";

export default function FriendAgreedModal() {
  const navigate = useNavigate();

  return (
    <St.FriendAgreedModal>
      <IcFinishNaechinso />
      <St.Title>잠깐, 친구에게 동의는 받았지?</St.Title>
      <St.DescWrapper>
        <St.Desc>친구의 이름/번호를</St.Desc>
        <St.Desc>입력하는 것에 대해</St.Desc>
        <St.Desc>친구에게 동의를 받아야 해 :&#40;</St.Desc>
      </St.DescWrapper>
      <St.NextStepBtnWrapper>
        <St.NextStepBtn type="button" onClick={() => navigate(`${routePaths.Keyword}`)}>
          응 동의받았어!
        </St.NextStepBtn>
      </St.NextStepBtnWrapper>
    </St.FriendAgreedModal>
  );
}

const St = {
  FriendAgreedModal: styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;

    width: 31.1rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub4};
  `,
  DescWrapper: styled.article``,
  Desc: styled.p``,
  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    height: 11rem;
  `,
  NextStepBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 27.1rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
