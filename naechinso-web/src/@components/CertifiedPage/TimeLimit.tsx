import React, { useEffect, useState } from "react";
import styled from "styled-components";

export interface TimeLimitProps {
  inputActive: boolean;
  inputborder: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimeLimit(props: TimeLimitProps) {
  const { inputActive, count, setCount, setInputActive, inputborder } = props;
  const [minute, setMinute] = useState(3);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    // 1초마다 state 변화
    if (count <= 0) return setInputActive(false);

    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    timeConversion(count);
    return () => clearInterval(id);
  }, [count]);

  const timeConversion = (count: number) => {
    // 초를 mm:ss로 변환
    setMinute(Math.floor(count / 60));
    setSecond(count % 60);
  };

  return (
    <St.TimeLimit inputActive={inputActive} inputborder={inputborder}>
      {minute}:{second < 10 ? "0" : ""}
      {second}
    </St.TimeLimit>
  );
}

const St = {
  TimeLimit: styled.p<{ inputActive: boolean; inputborder: boolean }>`
    color: ${({ inputActive, inputborder }) => (inputborder ? "#FF3A3A" : inputActive ? "#FF7A00" : "#ABABAE")};
    ${({ theme }) => theme.fonts.body2};
  `,
};
