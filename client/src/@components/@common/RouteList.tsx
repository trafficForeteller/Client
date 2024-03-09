import React from "react";
import styled from "styled-components";

interface RouteListProps {
  stationName: string;
  stationLaneName: number;
  stationCount: number;
  totalStationCount: number;
}

export default function RouteList(props: RouteListProps) {
  const { stationName, stationLaneName, stationCount, totalStationCount } = props;

  return <St.RouteList>RouteList</St.RouteList>;
}

const St = {
  RouteList: styled.div`
    width: 100%;
  `,
};
