import { useEffect, useState } from "react";
import styled from "styled-components";

import { IcAllChecked, IcAllUnChecked, IcChecked, IcUnChecked } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import NextPageBtn from "../@common/MoveNextPageBtn";

export interface PolicyModalProps {
  inputActive: boolean;
}

export default function PolicyModal(props: PolicyModalProps) {
  const { inputActive } = props;
  const [allChecked, setAllChecked] = useState(false);
  const [policy, setPolicy] = useState([
    { title: "서비스 이용약관전체동의", checked: false },
    { title: "개인정보 처리 동의", checked: false },
    { title: "종교정보 제공 동의", checked: false },
    { title: "마케팅 정보 수신 동의(선택)", checked: false },
  ]);

  useEffect(() => {
    // 전체동의 클릭 시 모든 항목 동의||비동의
    // if (allChecked) setChecked(true);
    // else setChecked(false);
  }, [allChecked]);

  const toggleAllcheck = () => {
    setAllChecked(!allChecked);
  };

  const toggleCheck = (id: number) => {
    const newPolicy = policy.map((p, index) => {
      if (id === index) p.checked = !p.checked;
      return p;
    });
    setPolicy(newPolicy);
  };

  return (
    <St.Modal>
      <St.Title>내친소 이용 약관 동의</St.Title>
      <St.AllCheckWrapper type="button" onClick={toggleAllcheck}>
        <St.IcAllCheckWrapper>{allChecked ? <IcAllChecked /> : <IcAllUnChecked />}</St.IcAllCheckWrapper>
        <St.AllCheck>내친소 이용약관에 모두 동의하기</St.AllCheck>
      </St.AllCheckWrapper>
      <St.CheckContainer>
        {policy.map((i, id) => {
          return (
            <St.CheckBox key={i.title}>
              <St.CheckWrapper type="button" onClick={() => toggleCheck(id)}>
                <St.IcCheckWrapper>{i.checked ? <IcChecked /> : <IcUnChecked />}</St.IcCheckWrapper>
                <St.Check>{i.title}</St.Check>
              </St.CheckWrapper>
              <St.SeePolicy type="button" checked={i.checked}>
                보기
              </St.SeePolicy>
            </St.CheckBox>
          );
        })}
      </St.CheckContainer>

      <NextPageBtn nextPage={routePaths.Accept} title={"내친소 시작하기"} inputActive={inputActive} />
    </St.Modal>
  );
}

const St = {
  Modal: styled.section`
    width: 100%;
    height: 44rem;
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0 0;
    word-break: keep-all;
    text-align: center;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
    z-index: 3;
    position: relative;
    top: 3.2rem;
    width: 30rem;
    margin: 0 auto;
  `,
  AllCheckWrapper: styled.button`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-left: 2.4rem;
    margin-bottom: 6rem;
  `,
  IcAllCheckWrapper: styled.span`
    width: 2.4rem;
    z-index: 3;
    position: relative;
    top: 4.4rem;
  `,
  AllCheck: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    z-index: 3;
    position: relative;
    top: 4.4rem;
    width: 26rem;
  `,
  CheckContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  CheckBox: styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    z-index: 3;
  `,
  CheckWrapper: styled.button`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    z-index: 3;
    margin-left: 0.5rem;
  `,
  IcCheckWrapper: styled.span`
    width: 2.4rem;
    z-index: 3;
  `,
  Check: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3};
    z-index: 3;
  `,
  SeePolicy: styled.button<{ checked: boolean }>`
    color: ${({ theme, checked }) => (checked ? theme.colors.orange : theme.colors.black20)};
    ${({ theme }) => theme.fonts.body2};
    z-index: 3;
  `,
};
