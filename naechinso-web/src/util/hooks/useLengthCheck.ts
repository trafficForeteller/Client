interface useLengthCheckProps {
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  target: string;
  targetLength: number;
}

export default function useLengthCheck(props: useLengthCheckProps) {
  const { setInputActive, target, targetLength } = props;

  const checkNumLength = () => {
    //휴대폰번호 길이 확인해 label글자색, nextBtn 색 변화
    if (target.length === targetLength) setInputActive(false);
    else setInputActive(true);
  };

  return { checkNumLength };
}
