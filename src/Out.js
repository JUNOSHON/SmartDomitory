import React, {Fragment} from "react";
import {FaMoneyCheck} from "react-icons/fa";
import {GoSignOut} from "react-icons/go";
import {MdPeople} from "react-icons/md";

import {GrMoney} from "react-icons/gr";
import "./out.css";


function Out() {
  return (
    <Fragment>
  
      
      <div className="wrap">
        
        
        <div className={"out"}>
          <GoSignOut size={"50px"} color={"AAB9FF"}/>
          <h3>퇴실</h3>
          <span>해당 동 관생지도사에게 문의하세요.</span>
        </div>
        
        <div className={"in"}>
          <MdPeople size={"50px"} color={"3CA0FF"}/>
          <h3>중도입사</h3>
          <span>기숙사 행정실에 문의하세요.</span>
        </div>
        <div className={"man"}>
          <GrMoney size={"50px"} color={"46BD7B"}/>
          <h3>공과금 환불</h3>
          <span>해당 동 관생지도사에게 문의하세요.</span>
        </div>
      
      </div>
    


</Fragment>
)
  ;
}

export default Out;