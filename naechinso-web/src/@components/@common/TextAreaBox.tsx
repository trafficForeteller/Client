import styled from "styled-components";

export interface TextAreaBoxProps {
  placeholder: string;
  minLength: number;
  maxLength: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  height: number;
}

export default function TextAreaBox(props: TextAreaBoxProps) {
  const { placeholder, minLength, maxLength, text, setText, height } = props;

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <St.TextAreaBox>
      <St.TextAreaWrapper height={height}>
        :
        <St.TextArea
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          value={text}
          onChange={(e) => handleText(e)}
        />
      </St.TextAreaWrapper>
      <St.TextLength>
        <St.TextCount>{text.length}</St.TextCount>/{maxLength + 1}
      </St.TextLength>
    </St.TextAreaBox>
  );
}

const St = {
  TextAreaBox: styled.section`
    padding-bottom: 15rem;
  `,
  TextAreaWrapper: styled.article<{ height: number }>`
    width: 100%;
    height: ${({ height }) => height}rem;
    max-height: auto;
    margin: 0 auto;
    display: flex;
    gap: 0.8rem;
    ${({ theme }) => theme.fonts.sub3}
    color: ${({ theme }) => theme.colors.brown}
  `,
  TextArea: styled.textarea`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 32rem;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3}
    border: none;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray40};
    }
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      background-color: white;
    }
  `,
  TextLength: styled.div`
    margin-top: 0.8rem;
    float: right;
    display: flex;
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption5}
  `,
  TextCount: styled.p`
    color: ${({ theme }) => theme.colors.orange};
  `,
};
