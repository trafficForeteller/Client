import ReactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export interface TextAreaBoxProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextAreaBox(props: TextAreaBoxProps) {
  const { text, setText } = props;

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <St.TextAreaBox>
      <St.TextAreaWrapper>
        <ReactTextareaAutosize
          aria-label="주관식 추천사"
          placeholder="책에 대한 감정이나 생각을 적어보세요."
          minLength={15}
          maxLength={300}
          value={text && text}
          onChange={(e) => handleText(e)}
          dir="auto"
          rows={1}
          style={{
            width: "100%",
            resize: "none",
            outline: "none",
            overflow: "hidden",
            color: "#121213",

            fontFamily: "Pretendard",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "15px",

            border: "none",
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "transparent",
          }}
        />
      </St.TextAreaWrapper>
      <St.TextLength>
        <St.TextLimit>최소 15자</St.TextLimit>
        <St.TextCountWrapper>
          <St.TextCount text={text}>{text ? text.length : 0}</St.TextCount> / 300
        </St.TextCountWrapper>
      </St.TextLength>
    </St.TextAreaBox>
  );
}

const St = {
  TextAreaBox: styled.section`
    width: 100%;
    height: fit-content;

    padding: 1.4rem 1.5rem;
    border-radius: 12px;
    border: 0.7px solid ${({ theme }) => theme.colors.gray4};
  `,
  TextAreaWrapper: styled.article`
    width: 100%;
    min-height: 4rem;

    margin: 0 auto;
    display: flex;
    gap: 0.8rem;
    ${({ theme }) => theme.fonts.reg12};
  `,
  TextArea: styled.textarea`
    width: 100%;
    border-radius: 12px;
    border: none;
    resize: none;
    display: flex;
    ${({ theme }) => theme.fonts.reg12};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray4};
    }
  `,
  TextLength: styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.reg10}
    margin-top: 1.4rem;
  `,
  TextLimit: styled.span``,
  TextCount: styled.b<{ text: string }>`
    color: ${({ theme, text }) => (text.length === 0 ? theme.colors.gray4 : theme.colors.purple)};
  `,
  TextCountWrapper: styled.p``,
};
