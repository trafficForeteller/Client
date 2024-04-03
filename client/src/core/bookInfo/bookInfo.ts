import { ImgBook1, ImgBook2, ImgBook3, ImgFace1, ImgFace2, ImgFace3, ImgFace4, ImgFace5 } from "../../asset/image";

export type emotionProps = {
  emotionId: number;
  emotionNumber: number;
};

export type recommendBookInfoProps = {
  id: number;
  emotions: emotionProps[];
  bookThumbnail: string;
  bookName: string;
  bookAuthor: string;
};

export const recommendBookInfoList: recommendBookInfoProps[] = [
  {
    id: 0,
    emotions: [
      { emotionId: 0, emotionNumber: 230 },
      { emotionId: 1, emotionNumber: 68 },
      { emotionId: 2, emotionNumber: 50 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "직장인에서 직업인으로",
    bookAuthor: "깅호",
  },
  {
    id: 1,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
      { emotionId: 3, emotionNumber: 15 },
    ],
    bookThumbnail: ImgBook2,
    bookName: "구의 증명",
    bookAuthor: "뽀뽀",
  },
  {
    id: 2,
    emotions: [
      { emotionId: 1, emotionNumber: 230 },
      { emotionId: 0, emotionNumber: 68 },
      { emotionId: 3, emotionNumber: 50 },
    ],
    bookThumbnail: ImgBook3,
    bookName: "직장인에서 직업인으로",
    bookAuthor: "깅호",
  },
  {
    id: 3,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
      { emotionId: 0, emotionNumber: 15 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "구의 증명",
    bookAuthor: "뽀뽀",
  },
];

export const emojiList = [ImgFace1, ImgFace2, ImgFace3, ImgFace4, ImgFace5];

export type basicBookInfoProps = {
  id: number;
  emotions: emotionProps[];
  bookThumbnail: string;
  bookName: string;
};

export const recordBookInfoList: basicBookInfoProps[] = [
  {
    id: 0,
    emotions: [
      { emotionId: 0, emotionNumber: 230 },
      { emotionId: 1, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 1,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook2,
    bookName: "구의 증명",
  },
  {
    id: 2,
    emotions: [
      { emotionId: 1, emotionNumber: 230 },
      { emotionId: 0, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook3,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 3,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "구의 증명",
  },
  {
    id: 4,
    emotions: [
      { emotionId: 0, emotionNumber: 230 },
      { emotionId: 1, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 5,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook2,
    bookName: "구의 증명",
  },
  {
    id: 6,
    emotions: [
      { emotionId: 1, emotionNumber: 230 },
      { emotionId: 0, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook3,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 7,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "구의 증명",
  },
  {
    id: 8,
    emotions: [
      { emotionId: 0, emotionNumber: 230 },
      { emotionId: 1, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 9,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook2,
    bookName: "구의 증명",
  },
  {
    id: 10,
    emotions: [
      { emotionId: 1, emotionNumber: 230 },
      { emotionId: 0, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook3,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 11,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 0, emotionNumber: 15 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "구의 증명",
  },
  {
    id: 12,
    emotions: [
      { emotionId: 0, emotionNumber: 230 },
      { emotionId: 1, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 13,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook2,
    bookName: "구의 증명",
  },
  {
    id: 14,
    emotions: [
      { emotionId: 1, emotionNumber: 230 },
      { emotionId: 0, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook3,
    bookName: "직장인에서 직업인으로",
  },
  {
    id: 15,
    emotions: [
      { emotionId: 2, emotionNumber: 78 },
      { emotionId: 0, emotionNumber: 15 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "구의 증명",
  },
];

export type searchBookInfoProps = {
  id: number;
  emotions: emotionProps[];
  bookThumbnail: string;
  bookName: string;
  bookAuthor: string;
  recordStatus: boolean;
};

export const searchBookInfoList: searchBookInfoProps[] = [
  {
    id: 0,
    emotions: [
      { emotionId: 0, emotionNumber: 230 },
      { emotionId: 1, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "강디두은",
    bookAuthor: "코딱지",
    recordStatus: true,
  },
  {
    id: 1,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook2,
    bookName: "구의 증명",
    bookAuthor: "내가 다이기제잉",
    recordStatus: false,
  },
  {
    id: 2,
    emotions: [
      { emotionId: 1, emotionNumber: 230 },
      { emotionId: 0, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook3,
    bookName: "직장인에서 직업인으로",
    bookAuthor: "뿡뿡이",
    recordStatus: false,
  },
  {
    id: 3,
    emotions: [
      { emotionId: 4, emotionNumber: 153 },
      { emotionId: 2, emotionNumber: 78 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "구의 증명",
    bookAuthor: "냠냠",
    recordStatus: true,
  },
  {
    id: 4,
    emotions: [
      { emotionId: 0, emotionNumber: 230 },
      { emotionId: 1, emotionNumber: 68 },
    ],
    bookThumbnail: ImgBook1,
    bookName: "직장인에서 직업인으로",
    bookAuthor: "꺼억",
    recordStatus: false,
  },
];
