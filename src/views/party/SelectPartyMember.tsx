import { useState, useEffect } from 'react';
import '../../assets/css/selectPartyMember.css'
import CheckBox from "@/component/CheckBox.tsx"
import ApiUtil from "../../api/api.util";
import ApiConfig from "../../api/api.config";


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
  console.log("왜안나오지")
  getSample()
  getSample2()


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
  function getSample() {
    ApiUtil.get(`${ApiConfig.defaultDomain}/6a1b7083a78540c891016615926385fb`)
        .then(function (response) {
            console.log(response);
        })
        
  }
  function getSample2(){
    const params = {
      title : [{text: {content: '제모오오옥'}}]
    }
    ApiUtil.patch(`${ApiConfig.defaultDomain}/v1/databases/6a1b7083a78540c891016615926385fb`,params)
        .then(function (response) {
          console.log(response);
        })
  }





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

      <div className="text-wrapper-3">{members.filter(item => item.checked).length}명</div>
      
      {teamList.map((teamItem, teamIndex) => 
        <div key={teamIndex}>
          <CheckBox checked={teamItem.checked} key={teamItem.team} onChange={(event) => onCheckTeam(teamItem.team, event.target.checked)}>
            <span key={teamIndex+`_span`}>{teamItem.team}</span>
          </CheckBox>
          <div onClick={() => changeIsView(teamIndex, teamItem.isView)}>
            &nbsp;&nbsp;{teamItem.isView ? '^' : '⌄'} &nbsp;&nbsp;
          </div>
          <div key={teamIndex+`_innder_div`} >
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
    </div>
  );
};


  
export default SelectPartyMember;