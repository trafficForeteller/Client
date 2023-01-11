interface useHandleNameInputProps {
  e: React.ChangeEvent<HTMLInputElement>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function useHandleNameInput(props: useHandleNameInputProps) {
  const { e, setName } = props;

  const handleNameInput = () => {
    // 친구 이름을 관리하는 함수
    setName(e.target.value);
  };

  return { handleNameInput };
}
