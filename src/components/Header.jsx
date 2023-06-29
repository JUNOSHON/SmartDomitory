import React from "react";
import {styled} from "styled-components";
import domitory from "../assets/3차사진.png";
import Clock from "./Clock";

export default function Header() {
  
  const TopBanner = styled.div`
    background-image: url(${domitory});
    background-size: cover;
    width: 100%;
    height: 577px;
  `;
  const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    color: white;
    padding: 20px;

    p {
      font-size: 25px;
      position: absolute;
      bottom: 30%;

    }

    span {
      font-size: 25px;

    }
    .a{
      position: absolute;
      bottom: 28%;
    }

    .domitory {
      color: yellow;
      font-weight: bold;
    }
  
  `;
  
  
  return (
    <TopBanner>
      
      <Content>
        
        <p>자연 속의 쾌적한 공간,</p>
        <div className="a">
          <span className="domitory">국립한밭대학교 학생생활관</span><span>입니다.</span>
        </div>
      </Content>
    
    </TopBanner>
  );
}



