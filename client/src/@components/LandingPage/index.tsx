import { useState } from "react";
import styled from "styled-components";

import { IGetStation, IStationInfo } from "../../types";
import { Header, PathInputBox, RouteList, RouteListBox } from "../@common";

const stationsValue = [
  {
    id: 1,
    travelTime: 26,
    stations: [
      {
        stationName: "을지로입구",
        stationLaneName: 2,
        stationCount: 2,
      },
      {
        stationName: "을지로3가",
        stationLaneName: 3,
        stationCount: 7,
      },
    ],
  },
  {
    id: 2,
    travelTime: 66,
    stations: [
      {
        stationName: "냥냥냥",
        stationLaneName: 2,
        stationCount: 2,
      },
      {
        stationName: "밤양갱갱갱",
        stationLaneName: 3,
        stationCount: 7,
      },
      {
        stationName: "배고팡",
        stationLaneName: 4,
        stationCount: 8,
      },
    ],
  },
];

export default function LandingPage() {
  const [startingStation, setStartingStation] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [stationList, setStationList] = useState<IGetStation[]>(stationsValue);

  // 출발지 입력란의 값이 변경될 때마다 호출되는 이벤트 핸들러
  const handleStartingStationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartingStation(e.target.value); // 입력된 값으로 상태를 업데이트
  };

  // 도착지 입력란의 값이 변경될 때마다 호출되는 이벤트 핸들러
  const handleArrivalStationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalStation(e.target.value); // 입력된 값으로 상태를 업데이트
  };

  // 출발지와 도착지 정보를 서버에 전송하는 함수
  const handleStationInfo = () => {
    // 출발지와 도착지 정보를 이용하여 API 호출
    // 이 부분에 실제 API 호출 코드를 작성하면 됩니다.
    console.log("출발지:", startingStation);
    console.log("도착지:", arrivalStation);
    setIsClicked(true);
    // 여기에 API 호출 코드 작성

    // startingStation이나 arrivalStation이 비어있는 경우엔 제대로 입력해달라고 뜨게 하기
    // 결과가 없을 땐 없다고 뜨게 하기
  };

  const totalStationCount = stationList.reduce(
    (acc, station) => acc + station.stations.reduce((count, el) => count + el.stationCount, 0),
    0,
  );

  return (
    <St.LandingPage>
      <Header />
      <St.PathInputBoxWrapper>
        <PathInputBox pathDirection="출발" value={startingStation} onChange={handleStartingStationChange} />
        <PathInputBox
          pathDirection="도착"
          value={arrivalStation}
          onChange={handleArrivalStationChange}
          handleStationInfo={handleStationInfo}
        />
      </St.PathInputBoxWrapper>
      {isClicked ? (
        <>
          <St.Border></St.Border>
          <St.RouteListWrapper>
            {stationList.map((station) => (
              <St.RouteList key={station.id}>
                <RouteListBox
                  travelTime={station.travelTime}
                  el={station.stations}
                  totalStationCount={totalStationCount}
                  key={station.id}
                />
              </St.RouteList>
            ))}
          </St.RouteListWrapper>
        </>
      ) : (
        <></>
      )}
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 4.4rem;
  `,
  PathInputBoxWrapper: styled.section`
    display: flex;
    flex-direction: column;

    gap: 1.4rem;
  `,
  Border: styled.div`
    width: 100%;
    border-top: 9px solid ${({ theme }) => theme.colors.gray2};
    margin-top: 1.6rem;
  `,
  RouteListWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  RouteList: styled.article`
    width: 100%;
  `,
};
