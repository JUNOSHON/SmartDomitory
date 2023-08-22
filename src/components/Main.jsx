import React from "react";
import {styled} from "styled-components";
import {BsFillMegaphoneFill} from "react-icons/bs";
import Clock from "./Clock";

export default function Main() {
  
  const Wrapper = styled.div`

    margin-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    div {
      margin-bottom: 30px;
    }

    #notice {
      width: 917px;
      color: #476C96;
      font-weight: bold;
      
      display: flex;
      align-items: center;
      height: 50px;
      border: 3px solid #476C96;
      border-radius: 8px;
    }

    .box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 917px;
      height: 85px;
      border-radius: 20px;
      color: white;
      font-weight: bolder;
      font-size: 25px;
      border: 1px solid black;

      &:nth-child(2) {
        &:hover {
          background-color: #476C96;
          opacity: 0.75;
          cursor: pointer;
        }

        background-color: #476C96;
      }

      &:nth-child(3) {
        &:hover {
          background-color: #0096B8;
          opacity: 0.75;
          cursor: pointer;
        }

        background-color: #0096B8;
      }

      &:nth-child(4) {
        &:hover {

          background-color: #D86868;
          opacity: 0.75;
          cursor: pointer;
        }

        background-color: #D86868;
      }

      &:nth-child(5) {
        &:hover {

          background-color: #CFA37A;
          opacity: 0.75;
          cursor: pointer;
        }

        background-color: #CFA37A;
      }
    }
  `;
  const alertToUser = () => {
    alert("준비중입니다");
  };
  
  
  return (
    <Wrapper>
      
      <div id="notice"><BsFillMegaphoneFill style={{marginLeft:'10px'}}/> &nbsp;&nbsp;&nbsp; 3차 BTL 생활관 6월 공공요금 정산 안내</div>
      <div className="box" onClick={alertToUser}>입&middot;퇴실신청</div>
      <div className="box" onClick={alertToUser}>3차 BTL 관리비 조회</div>
      <div className="box" onClick={alertToUser}>공공시설 사용 신청</div>
      <div className="box" onClick={alertToUser}>공공물품 대여</div>
    
    
    </Wrapper>
  );
}
