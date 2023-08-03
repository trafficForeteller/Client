import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export interface DontGoTextAreaBoxProps {
  placeholder: string;
  minLength: number;
  maxLength: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  height: number;
  letterLimit: string;
  isModalOpened: boolean;
}

export default function DontGoTextAreaBox(props: DontGoTextAreaBoxProps) {
  const { placeholder, minLength, maxLength, text, setText, height, letterLimit, isModalOpened } = props;

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <St.DontGoTextAreaBox isModalOpened={isModalOpened}>
      <St.TextAreaWrapper height={height}>
        :
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
            color: "#121213",

            fontFamily: "Pretendard",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "21px",

            border: "none",
            display: "flex",
            flexWrap: "wrap",
            zIndex: isModalOpened === true ? "-1" : "",
            backgroundColor: "transparent",
          }}
        />
      </St.TextAreaWrapper>
      <St.TextLength>
        <St.TextLimit isModalOpened={isModalOpened}>{letterLimit}</St.TextLimit>
        <St.TextCountWrapper isModalOpened={isModalOpened}>
          <St.TextCount text={text}>{text ? text.length : 0}</St.TextCount> / {maxLength}
        </St.TextCountWrapper>
      </St.TextLength>
    </St.DontGoTextAreaBox>
  );
}

const St = {
  DontGoTextAreaBox: styled.section<{ isModalOpened: boolean }>`
    height: fit-content;
    z-index: ${({ isModalOpened }) => (isModalOpened === true ? "-1" : "")};
    padding-top: 2rem;
  `,
  TextAreaWrapper: styled.article<{ height: number }>`
    width: 100%;
    min-height: ${({ height }) => height}rem;

    margin: 0 auto;
    display: flex;
    gap: 0.8rem;
    ${({ theme }) => theme.fonts.sub3};
    color: ${({ theme }) => theme.colors.brown};
  `,
  TextArea: styled.textarea`
    width: 100%;
    border-radius: 8px;
    border: none;
    resize: none;
    display: flex;
    ${({ theme }) => theme.fonts.sub3};
    color: ${({ theme }) => theme.colors.gray100};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray40};
    }
  `,
  TextLength: styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fonts.reg_12}
    margin-top: 1.4rem;
  `,
  TextLimit: styled.span<{ isModalOpened: boolean }>`
    z-index: ${({ isModalOpened }) => (isModalOpened === true ? "-1" : "")};
  `,
  TextCount: styled.b<{ text: string }>`
    color: ${({ theme, text }) => (text.length === 0 ? theme.colors.gray30 : theme.colors.orange)};
  `,
  TextCountWrapper: styled.p<{ isModalOpened: boolean }>`
    z-index: ${({ isModalOpened }) => (isModalOpened === true ? "-1" : "")};
  `,
};
