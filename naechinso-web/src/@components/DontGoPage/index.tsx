import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcDontGo } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { ConsultantIconBtn, FixedHeader, TextAreaBox } from "../@common";

export default function DontGoPage() {
  const [text, setText] = useState("");
  const [isWarningModalOpened, setIsWarningModalOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("dontGo")) {
      const dontGo = localStorage.getItem("dontGo") as string;
      setText(dontGo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dontGo", text);
  }, [text]);

  const isButtonDisabled = () => !text || text.length < 15;

  return (
    <>
      <St.DontGo>
        <FixedHeader
          header="추천사"
          progressRate={90}
          questionKind="필수질문 4"
          title1="😥 친구를 거절한 상대에게 한 마디!"
        />

        <St.TextWrapper>
          <TextAreaBox
            placeholder="미래의 형수님 한번만 다시 생각해보십쇼. 이 친구가 겉 보기엔 끌리지 않을 수 있어도, 저와 주변 친구들이 그랬듯 제 친구의 매력에 한 번 빠지면 헤어나올 수 없거든요!"
            minLength={14}
            maxLength={100}
            text={text}
            setText={setText}
            height={7.8}
            letterLimit="15자 이상 100자 이내"
            isModalOpened={isWarningModalOpened}
          />
        </St.TextWrapper>

        <St.CardWrapper>
          <IcDontGo aria-label="한 마디 발언 미리보기" />
        </St.CardWrapper>

        <ConsultantIconBtn />
        <St.NextStepBtnWrapper>
          <St.NextStepBtn
            type="button"
            disabled={isButtonDisabled()}
            onClick={() => navigate(routePaths.SelectiveRecommend)}>
            완료
          </St.NextStepBtn>
        </St.NextStepBtnWrapper>
      </St.DontGo>

      <St.CurrentStep>4/4</St.CurrentStep>
    </>
  );
}

const St = {
  DontGo: styled.main`
    padding-top: 18rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 18.6rem;

    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 10%);
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  `,
  TextWrapper: styled.section`
    padding: 0 2rem;
  `,
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
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 16px;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  CurrentStep: styled.p`
    position: fixed;
    right: 4rem;
    bottom: 7rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
  `,
};
