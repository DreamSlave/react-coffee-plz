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

interface TeamProps {
  team : string;
  checked?: boolean;
  isView : boolean;
}


const SelectPartyMember = () => {
  const [members] = useState<MemberProps[]>([
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
  

  //const [teamList] : String[] = ([...new Set(members.map(item => item.team))]) 
  
  const [teamList, setTeamList] = useState<TeamProps[]>([...new Set(members.map(item => item.team))].map(mapData => {
    return {
      team : mapData,
      checked : false,
      isView : false,
    }
  }))

  const changeIsView = (index: number, data: boolean) => {
    const result = [...teamList]
    result[index].isView = !data;
    setTeamList(result);
  };



  return (
    <div className="element">
      {/* <div className="overlap">
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
      <div className="text-wrapper-3">3명</div> */}
      
      {teamList.map((teamItem, teamIndex) => 
        <div key={teamIndex}>
          <CheckBox key={teamItem.team}>
            <span key={teamIndex+`_span`}>{teamItem.team}</span>
          </CheckBox>
          <div onClick={() => changeIsView(teamIndex, teamItem.isView)}>
            &nbsp;&nbsp;{teamItem.isView ? '^' : '⌄'} &nbsp;&nbsp;
          </div>
          <div key={teamIndex+`_innder_div`} >
            {teamItem.isView && members.filter(item => item.team === teamItem.team).map((item, index) => 
            <CheckBox key={item.name}>
              <div key={index}>
                <div key={index}>{item.name} {item.rank} ({item.team})</div>
              </div>
            </CheckBox>
            )}
          </div>          
        </div>
      )}
    </div>
  );
};


  
export default SelectPartyMember;