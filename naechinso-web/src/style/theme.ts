import { css, CSSProp } from "styled-components";

const colors = {
  black20: "#CCCCCC",
  black40: "#999999",
  black: "#111111",
  white: "#FFFFFF",
  neural: "#F6F5F2",
  black64: "#595857",
  orange: "#FF7A00",
  orange10: "#FFF2E6",
  orange20: "#FFE4CC",
  orange50: "#FF922E",
  brown: "#A58E79",
  yellow: "#FFB700",
  error: "#FF3A3A",
  error20: "#FFEFEF",
  error_bac: "#FFEFEF",
  blue: "#6B9AFF",
  blue_bac: "#EAF1FF",
  old_gray: "#EBEBF0",
  old_gray20: "#CCC",
  gray5: "#F1F2F2",
  gray10: "#E8EAED",
  gray30: "#C5C5C9",
  gray40: "#ABABAE",
  gray50: "#8F8F92",
  gray60: "#616167",
  gray70: "#33333C",
  gray80: "#33333C",
  gray100: "#121213",
  blue40: "#EAF1FF",
  gray20: "#D8D8DB",
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
  head1: FONT({ weight: 700, size: 2.5, lineHeight: 3.4 }),
  head2: FONT({ weight: 700, size: 2.2, lineHeight: 2.6 }),
  head3: FONT({ weight: 800, size: 2.4, lineHeight: 3 }),
  sub1: FONT({ weight: 500, size: 2, lineHeight: 3 }),
  sub2: FONT({ weight: 700, size: 2, lineHeight: 3 }),
  sub3: FONT({ weight: 500, size: 1.8, lineHeight: 2.6 }),
  sub4: FONT({ weight: 700, size: 1.8, lineHeight: 2.6 }),
  body1: FONT({ weight: 700, size: 1.6, lineHeight: 2.4 }),
  body2: FONT({ weight: 500, size: 1.6, lineHeight: 2.4 }),
  body3: FONT({ weight: 700, size: 1.4, lineHeight: 2 }),
  body4: FONT({ weight: 500, size: 1.4, lineHeight: 2.4 }),
  body5: FONT({ weight: 400, size: 1.4, lineHeight: 2 }),
  body6: FONT({ weight: 600, size: 1.4, lineHeight: 2.4 }),
  body7: FONT({ weight: 500, size: 1.4, lineHeight: 2 }),
  body8: FONT({ weight: 700, size: 1.5, lineHeight: 2.2 }),
  body9: FONT({ weight: 400, size: 1.5, lineHeight: 2.2 }),
  caption1: FONT({ weight: 500, size: 1.6, lineHeight: 1.6 }),
  caption2: FONT({ weight: 600, size: 1, lineHeight: 1.4 }),
  caption3: FONT({ weight: 500, size: 1.2, lineHeight: 2 }),
  caption4: FONT({ weight: 400, size: 1.4, lineHeight: 2 }),
  caption5: FONT({ weight: 400, size: 1.2, lineHeight: 1.6 }),
  caption6: FONT({ weight: 500, size: 1.2, lineHeight: 1.6 }),
  caption7: FONT({ weight: 400, size: 1.3, lineHeight: 2 }),
  caption8: FONT({ weight: 700, size: 1.3, lineHeight: 2 }),
  caption9: FONT({ weight: 400, size: 1, lineHeight: 1.4 }),

  bold_25: FONT({ weight: 700, size: 2.5, lineHeight: 3.4 }),
  bold_20: FONT({ weight: 700, size: 2, lineHeight: 3 }),
  bold_18: FONT({ weight: 700, size: 1.8, lineHeight: 2.6 }),
  bold_16: FONT({ weight: 700, size: 1.6, lineHeight: 2.4 }),
  bold_15: FONT({ weight: 700, size: 1.5, lineHeight: 2 }),
  bold_14: FONT({ weight: 700, size: 1.4, lineHeight: 2 }),
  bold_13: FONT({ weight: 700, size: 1.3, lineHeight: 2 }),
  mid_16: FONT({ weight: 500, size: 1.6, lineHeight: 2.4 }),
  mid_14: FONT({ weight: 500, size: 1.4, lineHeight: 2 }),
  mid_12: FONT({ weight: 500, size: 1.2, lineHeight: 1.6 }),
  reg_18: FONT({ weight: 400, size: 1.8, lineHeight: 2.6 }),
  reg_16: FONT({ weight: 400, size: 1.6, lineHeight: 2.4 }),
  reg_15: FONT({ weight: 400, size: 1.5, lineHeight: 2 }),
  reg_14: FONT({ weight: 400, size: 1.4, lineHeight: 2 }),
  reg_13: FONT({ weight: 400, size: 1.3, lineHeight: 2 }),
  reg_12: FONT({ weight: 400, size: 1.2, lineHeight: 2 }),
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
