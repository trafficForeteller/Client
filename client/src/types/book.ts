export interface IGetSearchBookData {
  author: string[];
  contents: string;
  thumbnail: string;
  title: string;
  check: number; // 기록 완료 여부. 1이 등록된 것
}
