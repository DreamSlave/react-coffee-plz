import { useState, useEffect } from 'react';
// import '../../assets/css/all.css'
// import '../../assets/css/selectPartyMember.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
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
  checked: boolean;
  isView : boolean;
}


const SelectPartyMember = () => {
  const [members, setMembers] = useState<MemberProps[]>([
    {
      "name": "김진미",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
    },
    {
      "name": "김세인",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
    },
    {
      "name": "조도은",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
    },
    {
      "name": "권혜란",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
    },
    {
      "name": "정민재",
      "team": "UX디자인팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
    }
  ])

  useEffect(() => {
    // checked 상태가 변경될 때마다 실행되는 코드
  }, [members]);
  

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

  const onCheckTeam = (team: string, checked: boolean) => {
    const result = [...members]

    result.forEach(element => {
      if(element.team === team){
        element.checked = checked
      }
    });    
    setMembers(result);
  }



  return (
    <div id='party' className="element">
      <h1>
        <span className="point">대상인원을</span><br/>선택해주세요.
      </h1>

      <div className="total_chck mgt20 mgb20">
        {members.filter(item => item.checked).length}명
      </div>
      
      {teamList.map((teamItem, teamIndex) => 
        <div key={teamIndex} className="chck_person">
          <CheckBox checked={teamItem.checked} key={teamItem.team} onChange={(event) => onCheckTeam(teamItem.team, event.target.checked)}>
            <span key={teamIndex+`_span`}>{teamItem.team}</span>
          </CheckBox>
          <div className="p_2dpth_btn" onClick={() => changeIsView(teamIndex, teamItem.isView)}>
            {/* &nbsp;&nbsp;{teamItem.isView ? '^' : '⌄'} &nbsp;&nbsp; */}
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 12L0 4h15l-7.5 8z" fill="currentColor"></path></svg>
            {/* 위화살표 svg */}
            {/* <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 3l7.5 8H0l7.5-8z" fill="currentColor"></path></svg> */}
          </div>
          <div className="p_2dpth" key={teamIndex+`_innder_div`} >
            {teamItem.isView && members.filter(item => item.team === teamItem.team).map((item, index) => 
            <CheckBox key={item.name} checked={item.checked} onChange={(event) => setMembers((prevMembers) => prevMembers.map(prevItem => prevItem.name === item.name ? { ...prevItem, checked: event.target.checked } : prevItem))}>
              <div key={index}>
                
                <div key={index}>{item.name} {item.rank} ({item.team})</div>
              </div>
            </CheckBox>
            )}
          </div>          
        </div>
      )}

      <footer id="footer">
        <div className="large-btn">
            파티생성하기
        </div>
      </footer>
      
    </div>
  );
};


  
export default SelectPartyMember;