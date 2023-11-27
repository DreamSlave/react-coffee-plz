// import React from "react";
// import "./style.css";

import { useState } from 'react';
import '../../assets/css/selectPartyMember.css'
import CheckBox from "@/component/CheckBox.tsx"




interface MemberProps {
  name : string;
  team : string;
  department? : string;
  rank : string;
  c_no? : string;
  checked?: boolean;
}


const SelectPartyMember = () => {
  const [members, setMembers] = useState<MemberProps[]>([
    {
      "name": "김진미",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898"
    },
    {
      "name": "김세인",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898"
    },
    {
      "name": "조도은",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898"
    },
    {
      "name": "권혜란",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898"
    },
    {
      "name": "정민재",
      "team": "UX디자인팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898"
    }
  ])
  

  return (
    <div className="element">
      <div className="overlap">
        <div className="group">      
        연구소
        </div>
      
      </div>
      <p className="p">
        <span className="span">대상 인원</span>
        <span className="text-wrapper-2">
          을<br />
          선택해주세요.

        </span>
      </p>
      <div className="text-wrapper-3">3명</div>
      
      <div className="group-2">
        {members.map((item, index) =>{
          return <CheckBox key={index}> 
            <div className="list">
              <div className="text-wrapper-2">{item.name} {item.rank} ({item.team})</div>
            </div></CheckBox>
        })}
      </div>
        
    </div>
  );
};


  
export default SelectPartyMember;