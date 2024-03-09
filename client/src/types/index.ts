export interface IStationInfo {
  stationName: string;
  stationLaneName: number;
  stationCount: number;
}

export interface IGetStation {
  id: number;
  travelTime: number;
  stations: IStationInfo[];
}
