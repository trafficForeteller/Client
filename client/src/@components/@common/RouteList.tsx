import React from "react";
import styled from "styled-components";

interface RouteListProps {
  stationLaneName: number;
  stationCount: number;
  totalStationCount: number;
}

export default function RouteList(props: RouteListProps) {
  const { stationLaneName, stationCount, totalStationCount } = props;
  const ratio = (stationCount / totalStationCount) * 100;

  return (
    <>
      <St.RouteListCircle stationLaneName={stationLaneName}>{stationLaneName}</St.RouteListCircle>
      <St.RouteList ratio={ratio} stationLaneName={stationLaneName}>
        RouteList
      </St.RouteList>
    </>
  );
}

const St = {
  RouteListCircle: styled.div<{ stationLaneName: number }>`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: ${({ theme, stationLaneName }) => theme.colors[`line${stationLaneName}`]};
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  RouteList: styled.div<{ ratio: number; stationLaneName: number }>`
    width: ${({ ratio }) => ratio}%;
    background-color: ${({ theme, stationLaneName }) => theme.colors[`line${stationLaneName}`]};
    border-radius: 0 50px 50px 0;
  `,
};
