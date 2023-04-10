import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export interface TextAreaBoxProps {
  placeholder: string;
  minLength: number;
  maxLength: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  height: number;
  letterLimit: string;
  isModalOpened: boolean;
  textareaScroll?: boolean;
}

export default function TextAreaBox(props: TextAreaBoxProps) {
  const { placeholder, minLength, maxLength, text, setText, height, letterLimit, isModalOpened, textareaScroll } =
    props;

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <St.TextAreaBox isModalOpened={isModalOpened}>
      <St.TextAreaWrapper height={height}>
        :
        {textareaScroll === true ? (
          <St.TextArea placeholder={placeholder} value={text} onChange={(e) => handleText(e)}></St.TextArea>
        ) : (
          <TextareaAutosize
            aria-label="주관식 추천사"
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
              zIndex: isModalOpened === true ? "-1" : "",
            }}
          />
        )}
      </St.TextAreaWrapper>
      <St.TextLength>
        <St.TextLimit isModalOpened={isModalOpened}>{letterLimit}</St.TextLimit>
        <St.TextCountWrapper isModalOpened={isModalOpened}>
          <St.TextCount>{text ? text.length : 0}</St.TextCount>/{maxLength}
        </St.TextCountWrapper>
      </St.TextLength>
    </St.TextAreaBox>
  );
}

const St = {
  TextAreaBox: styled.section<{ isModalOpened: boolean }>`
    height: fit-content;
    z-index: ${({ isModalOpened }) => (isModalOpened === true ? "-1" : "")};
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
  TextArea: styled.textarea`
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    border: none;
    resize: none;
    display: flex;
    ${({ theme }) => theme.fonts.sub3};
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
  TextLength: styled.div`
    margin-top: 0.8rem;
    width: 100%;
    float: right;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption5}
  `,
  TextLimit: styled.span<{ isModalOpened: boolean }>`
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.colors.orange};
    z-index: ${({ isModalOpened }) => (isModalOpened === true ? "-1" : "")};
  `,
  TextCount: styled.b`
    color: ${({ theme }) => theme.colors.orange};
  `,
  TextCountWrapper: styled.p<{ isModalOpened: boolean }>`
    z-index: ${({ isModalOpened }) => (isModalOpened === true ? "-1" : "")};
  `,
};
