import styled from "styled-components";

import { ImgRecommendLanding } from "../../asset/image";

export default function PendingPage() {
  return (
    <St.PendingPage>
      <St.Naechinso src={ImgRecommendLanding} alt="내친소" />
    </St.PendingPage>
  );
}

const St = {
  PendingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
  `,
  Naechinso: styled.img``,
};
