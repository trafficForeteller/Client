import { useState } from "react";
import styled from "styled-components";

import { IcTipCheck, IcToggleArrow } from "../../asset/icons";
import { TipList } from "../../core/recommend/recommend";

export default function ToggleTipBox() {
  const [open, setOpen] = useState(true);

  return (
    <St.ToggleTipBox>
      <St.TipHeader>
        <St.TipTitle>⭐️ 추천사 꿀팁</St.TipTitle>
        <St.ArrowWrapper onClick={() => setOpen(!open)} open={open}>
          <IcToggleArrow />
        </St.ArrowWrapper>
      </St.TipHeader>
      <St.ToggleTipList open={open}>
        {TipList.map((tip) => {
          return (
            <St.TipWrapper key={tip.id}>
              <IcTipCheck aria-label="강조" />
              <St.TipDescWrapper>
                <St.TipDesc>{tip.desc1}</St.TipDesc>
                <St.TipHighlight>{tip.highlight}</St.TipHighlight>
                <St.TipDesc>{tip.desc2}</St.TipDesc>
              </St.TipDescWrapper>
            </St.TipWrapper>
          );
        })}
      </St.ToggleTipList>
    </St.ToggleTipBox>
  );
}

const St = {
  ToggleTipBox: styled.section`
    margin: 0 auto 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.orange10};
    border-radius: 8px;
    padding: 1.2rem;
  `,
  TipHeader: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold_12}
  `,
  TipTitle: styled.h3``,
  ArrowWrapper: styled.span<{ open: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: rotate(${({ open }) => (open ? "" : "0.5turn")});
    transition: all 0.3s;
  `,
  ToggleTipList: styled.article<{ open: boolean }>`
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 0.7rem;
  `,
  TipWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `,
  TipDescWrapper: styled.span`
    display: flex;
    gap: 0.1rem;
    ${({ theme }) => theme.fonts.reg_12}
  `,
  TipDesc: styled.p``,
  TipHighlight: styled.b`
    ${({ theme }) => theme.fonts.bold_12}
    color: ${({ theme }) => theme.colors.orange};
  `,
};
