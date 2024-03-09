import React from "react";
import styled from "styled-components";

import { IStationInfo } from "../../types";
import RouteList from "./RouteList";

interface RouteListBoxProps {
  travelTime: number;
  el: IStationInfo;
  totalStationCount: number;
}

export default function RouteListBox(props: RouteListBoxProps) {
  const { travelTime, el, totalStationCount } = props;

  const convertToHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60); // 분을 시간으로 변환
    const minutes = totalMinutes % 60; // 시간으로 변환된 후 남은 분
    return { hours, minutes };
  };

  const { hours, minutes } = convertToHoursAndMinutes(travelTime);

  return (
    <St.RouteListBox>
      {hours !== 0 && (
        <St.TravelTime>
          {hours}시 {minutes}분
        </St.TravelTime>
      )}
      {hours === 0 && minutes !== 0 && <St.TravelTime>{minutes}분</St.TravelTime>}
      <RouteList
        key={el.stationName}
        stationName={el.stationName}
        stationLaneName={el.stationLaneName}
        stationCount={el.stationCount}
        totalStationCount={totalStationCount}
      />
    </St.RouteListBox>
  );
}

const St = {
  RouteListBox: styled.article``,
  TravelTime: styled.div`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold2};
  `,
};
