import { useEffect, useState } from "react";
import styled from "styled-components";

export default function TimeLimit() {
  const [count, setCount] = useState(10);
  const [minute, setMinute] = useState(3);
  const [second, setSecond] = useState(0o0);

  useEffect(() => {
    if (count < 0) return;

    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    timeConversion(count);
    return () => clearInterval(id);
  }, [count]);

  const timeConversion = (count: number) => {
    setMinute(Math.floor(count / 60));
    setSecond(count % 60);
  };

  return (
    <St.TimeLimit>
      {minute}:{second < 10 ? "0" : ""}
      {second}
    </St.TimeLimit>
  );
}

const St = {
  TimeLimit: styled.p`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body2};
  `,
};
