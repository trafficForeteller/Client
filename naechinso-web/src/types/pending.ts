export interface IGetPending {
  member: string;
  recommendUuid: string;
  type: string;
  reason: string;
  pendingStatus: string;
  images: string[];
  rejectImages: [];
}
