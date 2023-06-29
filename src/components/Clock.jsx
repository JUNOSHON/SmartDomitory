import React, {useEffect, useState} from "react";
import {styled} from "styled-components";

export default function Clock() {
  
  const [time, setTime] = useState(new Date()); //초깃값이 그 시간
  let days = [1, 2, 3, 4, 5, 6, 7];
  let day = "";
  switch (time.getDay()) {
    case  1:
      day = "월";
      break;
    case  2:
      day = "화";
      break;
    case  3:
      day = "수";
      break;
    case  4:
      day = "목";
      break;
    case  5:
      day = "금";
      break;
    case  6:
      day = "토";
      break;
    case  7:
      day = "일";
      break;
  }
  
  
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date()); //현재 시간으로 설정
    }, 1000);
    return (() => {
      clearInterval(id);
    });
  }, []);
  
  const ClockWrapper = styled.div`
    font-size: large;
    font-style: revert;
    color: lightslategray;
    
  
  `;
  return (
    
    <ClockWrapper>
      <p>{time.getFullYear()}.0{time.getMonth()}.{time.getDate()}.{`(${day})`}</p>
      <h3>{time.toLocaleTimeString()}</h3>
    </ClockWrapper>
  
  );
}
