import { css, CSSProp } from "styled-components";

const colors = {
  black: "#090A0A",

  gray1: "#848489",
  gray2: "#E3E5E5",

  purple: "#6B4EFF",

  line1: "#0052A4",
  line2: "#00A84D",
  line3: "#EF7C1C",
  line4: "#00A5DE",
  line5: "#996CAC",
  line6: "#CD7C2F",
  line7: "#747F00",
  line8: "#E6186C",
} as const;

interface Font {
  weight: 400 | 500 | 600 | 700 | 800;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family: "Pretendard";
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}rem;
  `;
}

const fonts = {
  bold1: FONT({ weight: 700, size: 1.8, lineHeight: 1.8 }),
  bold2: FONT({ weight: 700, size: 1.6, lineHeight: 1.6 }),

  reg1: FONT({ weight: 500, size: 1.6, lineHeight: 1.6 }),
  reg2: FONT({ weight: 500, size: 1.0, lineHeight: 1.6 }),
} as const;

type BackQuoteArgs = string[];
// 이건 언제쓴느 걸까 ..
interface Media {
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  desktop: (...args: BackQuoteArgs) =>
    css`
      @media screen and (min-width: 37.5rem), screen and (min-height: 37.5rem) and (orientation: landscape) {
        ${args}
      }
    `,
};

const theme = {
  colors,
  fonts,
  media,
} as const;

export default theme;
