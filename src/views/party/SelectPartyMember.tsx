import { useState, useEffect } from 'react';
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'

import CheckBox from "@/component/CheckBox.tsx"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectPartyMember } from '@/store/party';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
// import ApiUtil from "../../api/api.util";
// import ApiConfig from "../../api/api.config";


interface MemberProps {
  name : string;
  team : string;
  department? : string;
  rank : string;
  userId: string;
  c_no? : string;
  checked?: boolean;
}

interface TeamProps {
  team : string;
  checked: boolean;
  isView : boolean;
}


const SelectPartyMember = () => {
  // getSample()
  // getSample2()


  const [members, setMembers] = useState<MemberProps[]>([
    {
      "name": "김진미",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
      "userId": 'ID111'
    },
    {
      "name": "김세인",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
      "userId": 'ID222'
    },
    {
      "name": "조도은",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
      "userId": 'ID333'
    },
    {
      "name": "권혜란",
      "team": "PD팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
      "userId": 'ID444'
    },
    {
      "name": "정민재",
      "team": "UX디자인팀",
      "department": "기업부설연구소",
      "rank": "프로",
      "c_no": "01058935898",
      "checked":false,
      "userId": 'ID555'
    }
  ])

  useEffect(() => {
    //validation 검사
    if(members.filter(item => item.checked).length < 1){
      setIsValid(false)
    }else{
      setIsValid(true)
    }
  }, [members]);

  const [isValid, setIsValid] = useState<boolean>(true)
  const [firstRender, setFirstRender] = useState(true);

  const partyInfo = useSelector((state: RootState) => state.party);
  console.log(":partyInfo:",partyInfo.memberList.length);

  useEffect(() => {
    const result = [...members]
    if (firstRender) {
      if(partyInfo.memberList.length !== 0){
        
        result.forEach(element => {
          if(partyInfo.memberList.some(member => member.userId === element.userId)){
            element.checked = true
          }
        });    
        setMembers(result);
        onChangeTeam()

      }
      setFirstRender(false); 
    }
  }, [])
    
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
  
  const onChangeTeam = () => {
    const result = [...teamList]

    result.forEach(element => {
      if(members.filter(item => item.team === element.team).every(item => item.checked === true)){
        element.checked = true
      }
    })
    setTeamList(result);
  }

  const onChangeMember = (type : string, param: string, checked: boolean) => {
    const result = [...members]
      switch (type) {
        case 'USERID' :
          result.forEach(element => {
            if(element.userId === param){
              element.checked = checked
            }      
          }) 
        break;
        case 'TEAM' :
          result.forEach(element => {
            if(element.team === param){
              element.checked = checked
            }      
          }) 
        break;
        default:
        break;
      }
    setMembers(result);
    onChangeTeam();
  }


  const navigate  = useNavigate();
  const dispatch = useDispatch();

  const onClickSelectPartyMember = function(){
    const selectMember = members.filter(item => item.checked === true).map(item =>{
      return {userId : item.userId, rank : item.rank, team : item.team, name : item.name}
    })
    dispatch(setSelectPartyMember(selectMember))
    navigate('/party/save')
  }

  
  // const dispatch = useDispatch();
  
  // function getSample() {
  //   ApiUtil.get(`${ApiConfig.defaultDomain}/6a1b7083a78540c891016615926385fb`)
  //       .then(function (response) {
  //           console.log(response);
  //       })
        
  // }
  // function getSample2(){
  //   const params = {
  //     title : [{text: {content: '제모오오옥'}}]
  //   }
  //   ApiUtil.patch(`${ApiConfig.defaultDomain}/v1/databases/6a1b7083a78540c891016615926385fb`,params)
  //       .then(function (response) {
  //         console.log(response);
  //       })
  // }



  // const count = useSelector((state: RootState) => state.counter.count);
  // const dispatch = useDispatch();
  
  // const onIncrease = () => {
  //   dispatch(increase())
  // };
  
  // const onDecrease = () => {
  //   dispatch(decrease())
  // };
  




  return (
    <div id='party' className="element">
    <h1>
      <span className="point">대상인원을</span><br/>선택해주세요.
    </h1>

    <div className="total_chck">
      {members.filter(item => item.checked).length}명
    </div>
    
    {teamList.map((teamItem, teamIndex) => 
      <div key={teamIndex} className="chck_person">
        <CheckBox checked={teamItem.checked} key={teamItem.team} onChange={(event) => onChangeMember('TEAM', teamItem.team, event.target.checked)}>
          <span key={teamIndex+`_span`}>{teamItem.team}</span>
        </CheckBox>
        <div className="p_2dpth_btn" onClick={() => changeIsView(teamIndex, teamItem.isView)}>
          &nbsp;&nbsp;{teamItem.isView ? '^' : '⌄'} &nbsp;&nbsp;
        </div>
        <div className="p_2dpth" key={teamIndex+`_innder_div`} >
          {teamItem.isView && members.filter(item => item.team === teamItem.team).map((item, index) => 
          <CheckBox key={item.name} checked={item.checked} onChange={(event) => onChangeMember('USERID', item.userId, event.target.checked)}>
            <div key={index}>
              
              <div key={index}>{item.name} {item.rank} ({item.team})</div>
            </div>
          </CheckBox>
          )}
        </div>          
      </div>
    )}

    <footer id="footer">
      {
        isValid ?
        <div className="large-btn" onClick={onClickSelectPartyMember}>
            파티생성하기
        </div> :
        <div className="large-btn bg_gray">
            파티생성하기
        </div>

      }
    </footer>
    
  </div>
  );
};


  
export default SelectPartyMember;