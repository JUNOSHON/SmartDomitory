import React, {useEffect, useState} from "react";
import {styled} from "styled-components";

export default function Clock() {
  
  const [time, setTime] = useState(new Date()); //초깃값이 그 시간
  
  let day = "";
  switch (time.getDay()) {
    case  0:
      day = "일";
      break;
    case  1:
      day = "화";
      break;
    case  2:
      day = "수";
      break;
    case  3:
      day = "목";
      break;
    case  4:
      day = "금";
      break;
    case  5:
      day = "토";
      break;
    case  6:
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
    font-size: 1.8rem;
    font-style: revert;
    color: lightslategray;
    position: absolute;
    right: 25px;
    line-height: 0.2;
    

  `;
  return (
    
    <ClockWrapper>
      <p>{time.getFullYear()}.0{time.getMonth()+1}.0{time.getDate()}{`(${day})`}</p>
      <h3>{time.toLocaleTimeString()}</h3>
    </ClockWrapper>
  
  );
}
