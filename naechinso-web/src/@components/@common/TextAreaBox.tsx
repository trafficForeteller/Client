import TextareaAutosize from "react-textarea-autosize";
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
        <TextareaAutosize
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          value={text && text}
          onChange={(e) => handleText(e)}
          dir="auto"
          rows={1}
          style={{
            width: "100%",
            resize: "none",
            outline: "none",
            overflow: "hidden",
            color: "#111111",

            fontFamily: "Pretendard",
            fontWeight: "500",
            fontSize: "1.8rem",
            lineHeight: "2.6rem",

            border: "none",
            display: "flex",
            flexWrap: "wrap",
          }}
        />
      </St.TextAreaWrapper>
      <St.TextLength>
        <St.TextCount>{text ? text.length : 0}</St.TextCount>/{maxLength + 1}
      </St.TextLength>
    </St.TextAreaBox>
  );
}

const St = {
  TextAreaBox: styled.section`
    padding-bottom: 15rem;
    height: fit-content;
  `,
  TextAreaWrapper: styled.article<{ height: number }>`
    width: 100%;
    min-height: ${({ height }) => height}rem;

    margin: 0 auto;
    display: flex;
    gap: 0.8rem;
    ${({ theme }) => theme.fonts.sub3}
    color: ${({ theme }) => theme.colors.brown}
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
