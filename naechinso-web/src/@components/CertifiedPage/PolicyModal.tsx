import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { postMemberJoin } from "../../apis/member.api";
import { IcAllChecked, IcAllUnChecked, IcChecked, IcUnChecked } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IPostPolicy, ITokenType } from "../../types/member";
import NextPageBtn from "../@common/MoveNextPageBtn";

export interface PolicyModalProps {
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  token: ITokenType;
  setToken: React.Dispatch<React.SetStateAction<ITokenType>>;
}

export default function PolicyModal(props: PolicyModalProps) {
  const { setInputActive, token, setToken } = props;
  const [allChecked, setAllChecked] = useState(false);
  const [policyList, setPolicyList] = useState([
    { policyName: "acceptsService", title: "서비스 이용약관전체동의", checked: false },
    { policyName: "accpetsInfo", title: "개인정보 처리 동의", checked: false },
    { policyName: "acceptsReligion", title: "종교정보 제공 동의", checked: false },
    { policyName: "acceptsMarketing", title: "마케팅 정보 수신 동의(선택)", checked: false },
  ]);
  const [startActive, setStartActive] = useState(true);
  const [postPolicyList, setPostPolicyList] = useState({
    acceptsInfo: false,
    acceptsReligion: false,
    acceptsService: false,
    acceptsLocation: false,
    acceptsMarketing: false,
  });

  useEffect(() => {
    checkConfirmation();
    handlePolicy();
  }, [policyList]);

  const checkConfirmation = () => {
    // 조건에 따른 내친소 시작 버튼 활성화
    // policyList.forEach((el) => {
    //   if (el.policyName === "acceptsMarketing") return;
    //   else if (el.checked === false) return setStartActive(true);
    //   else return setStartActive(false);
    // });
    const newPolicyList = [...policyList];
    for (let i = 0; i < newPolicyList.length; i++) {
      if (newPolicyList[i].policyName === "acceptsMarketing") {
        newPolicyList.splice(i, 1);
        i--;
      }
    }
    setStartActive(!newPolicyList.every(isAllPolicyChecked));
  };

  const isAllPolicyChecked = (item: { checked: boolean }) => item.checked === true;

  const toggleAllcheck = () => {
    // 전체동의 클릭 시 토글
    setAllChecked(!allChecked);
    const newPolicy = policyList.map((p) => {
      p.checked = !allChecked;
      return p;
    });
    setPolicyList(newPolicy);
  };

  const toggleCheck = (idx: number) => {
    // 항목별 체크
    const newPolicy = policyList.map((p, index) => {
      if (idx === index) p.checked = !p.checked;
      if (!p.checked) setAllChecked(false);
      return p;
    });
    setPolicyList(newPolicy);
  };

  const handlePolicy = () => {
    // 내친소 시작하기 클릭 시 postPolicy에 체크한 이용약관 담아 POST
    const isAgreedList = policyList.map((policyItem) => {
      return { [policyItem.policyName]: policyItem.checked };
    });
    console.log(isAgreedList);
  };

  const checkedPolicy = async (postPolicyList: IPostPolicy) => {
    //  체크한 이용약관 POST
    const userData = await postMemberJoin(postPolicyList, token.registerToken);
    userData && setToken(userData);
  };

  return (
    <St.Modal>
      <St.Title>내친소 이용 약관 동의</St.Title>
      <St.AllCheckWrapper type="button" onClick={toggleAllcheck}>
        <St.IcAllCheckWrapper>{allChecked ? <IcAllChecked /> : <IcAllUnChecked />}</St.IcAllCheckWrapper>
        <St.AllCheck>내친소 이용약관에 모두 동의하기</St.AllCheck>
      </St.AllCheckWrapper>
      <St.CheckContainer>
        {policyList.map((i, idx) => {
          return (
            <St.CheckBox key={i.policyName}>
              <St.CheckWrapper type="button" onClick={() => toggleCheck(idx)}>
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

      <NextPageBtn nextPage={routePaths.RecommendLanding} title={"내친소 시작하기"} inputActive={startActive} />
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
