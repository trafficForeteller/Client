import styled from "styled-components";

import { ImgStackOfBooks } from "../../asset/image";

export default function RecommendLoading() {
  return (
    <St.RecommendLoading>
      <St.SpinBarWrapper>
        <St.SpinBar></St.SpinBar>
        <St.StackOfBooks src={ImgStackOfBooks} alt="책 추천 로딩" />
      </St.SpinBarWrapper>
      <St.LoadingDescWrapper>
        <St.LoadingDesc>jisu123님의</St.LoadingDesc>
        <St.LoadingDesc>인생책을 찾고 있어요</St.LoadingDesc>
      </St.LoadingDescWrapper>
    </St.RecommendLoading>
  );
}

const St = {
  RecommendLoading: styled.section`
    width: 100%;
    height: 100%;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 50%;
  `,
  SpinBarWrapper: styled.div`
    width: 13.7rem;
    height: 13.7rem;

    position: relative; /* 스핀바 내부 요소들의 위치를 조정하기 위해 상대적 위치 지정 */
  `,

  SpinBar: styled.div`
    width: 13.7rem;
    height: 13.7rem;
    border: 20px solid ${({ theme }) => theme.colors.lightPurple};
    box-sizing: border-box;
    border-top-color: ${({ theme }) => theme.colors.purple};
    border-radius: 100%;
    animation: spin 1s ease-in-out infinite;

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  `,
  StackOfBooks: styled.img`
    position: absolute; /* 스핀바 내에서 절대 위치로 지정 */
    top: 50%; /* 상위 요소 중앙에 정렬 */
    left: 50%; /* 상위 요소 중앙에 정렬 */
    transform: translate(-50%, -50%); /* 이미지의 중앙 정렬 */

    width: 5.5rem;
    height: 5.5rem;
  `,
  LoadingDescWrapper: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 3.7rem;
  `,
  LoadingDesc: styled.p`
    ${({ theme }) => theme.fonts.bold16};
  `,
};
