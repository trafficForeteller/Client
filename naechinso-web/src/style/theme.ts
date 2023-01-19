import { css, CSSProp } from "styled-components";

const colors = {
  black20: "#CCCCCC",
  black40: "#999999",
  black: "#111111",
  white: "#FFFFFF",
  neural: "#F6F5F2",
  black64: "#595857",
  orange: "#FF7A00",
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
  gray40: "#ABABAE",
  gray50: "#8F8F92",
  blue40: "#EAF1FF",
} as const;

interface Font {
  weight: 400 | 500 | 600 | 700;
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
  caption1: FONT({ weight: 500, size: 1.6, lineHeight: 1.6 }),
  caption2: FONT({ weight: 600, size: 1, lineHeight: 1.4 }),
  caption3: FONT({ weight: 500, size: 1.2, lineHeight: 2 }),
  caption4: FONT({ weight: 400, size: 1.4, lineHeight: 2 }),
  caption5: FONT({ weight: 400, size: 1.2, lineHeight: 1.6 }),
  caption6: FONT({ weight: 500, size: 1.2, lineHeight: 1.6 }),
} as const;

type BackQuoteArgs = string[];
// 이건 언제쓴느 걸까 ..
interface Media {
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  desktop: (...args: BackQuoteArgs) =>
    css`
      @media screen and (min-width: 37.5rem), screen and (min-height: 81.2rem) and (orientation: landscape) {
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
