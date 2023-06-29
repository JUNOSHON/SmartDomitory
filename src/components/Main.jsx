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
      justify-content: center;
      display: flex;
      align-items: center;
      height: 50px;
      border: 3px solid #476C96;
      border-radius: 8px;
    }

    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 917px;
      height: 85px;
      border-radius: 20px;
      color: white;
     font-weight: bolder;
      font-size: 25px;
      border: 1px solid black;

      &:nth-child(2) {

        background-color: #476C96;
      }
      &:nth-child(3) {

        background-color: #0096B8;
      }
      &:nth-child(4) {
        
        background-color: #D86868;
      }
      &:nth-child(5) {
        
        background-color: #CFA37A;
      }
    }


  `;
  
  
  return (
    <Wrapper>
  
      <div id="notice"><BsFillMegaphoneFill/> &nbsp;&nbsp;&nbsp; 3차 BTL 생활관 6월 공공요금 정산 안내</div>
      <div className="box" >시설 이용 신청</div>
      <div className="box" >신청내역 조회 &middot; 중도퇴실 신청 &middot; 대기취소</div>
      <div className="box">회원번호 발급&middot;조회</div>
      <div className="box">공공물품 대여</div>

      
      
    </Wrapper>
  );
}
