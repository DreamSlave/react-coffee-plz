import { useState, useEffect } from 'react';
import '../../assets/css/all.css'
import '../../assets/css/style.scss'

import CheckBox from "@/component/CheckBox.tsx"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectPartyMember } from '@/store/party';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ApiUtil from "../../api/api.util";
import ApiConfig from "../../api/api.config";
import { useGlobalUI } from '@/contexts/GlobalUIContext'; // useGlobalUI 훅의 경로



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

  const [members, setMembers] = useState<MemberProps[]>([])
  const [teamList, setTeamList] = useState<TeamProps[]>([])
  const [isValid, setIsValid] = useState<boolean>(true)
  const [firstRender, setFirstRender] = useState(true);
  const { showLoading, hideLoading } = useGlobalUI();


  useEffect(() => {
    //validation 검사
    if(members.filter(item => item.checked).length < 1){
      setIsValid(false)
    }else{
      setIsValid(true)
    }
  }, [members]);

  const partyInfo = useSelector((state: RootState) => state.party);

  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const result = await getMemberList();
        if (firstRender) {
          //member 세팅
          const updatedMembers = result.map((element) => {
            const isChecked = partyInfo.memberList.some((member) => member.userId === element.userId);
            return { ...element, checked: isChecked };
          });

          //team 세팅
          const uniqueTeams: string[] = [...new Set( result.map(item => {return item.team;}))] as string[];
          const updatedTeam :TeamProps[] = uniqueTeams.map(mapData => {
            return {
              team : mapData,
              checked : updatedMembers.filter(item => item.team === mapData).every(item => item.checked === true),
              isView : updatedMembers.filter(item => item.team === mapData).some(item => item.checked === true) ? true : false,
            }
          })

          setMembers(updatedMembers);
          setTeamList(updatedTeam)
          setFirstRender(false);
        }
      } catch (error) {
        console.error('Error fetching member list:', error);
      }
    };
    fetchMemberList();
  }, []);


  const changeIsView = (index: number, data: boolean) => {
    const result = [...teamList]
    result[index].isView = !data;
    setTeamList(result);
  };

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

  const getMemberList = async () => {
    showLoading();
    try {
      const response = await ApiUtil.get(`${ApiConfig.defaultDomain}/users`);
      const resultData = response.data;
      return resultData;
    } catch (error) {
      console.error(error);
      throw error; // 오류를 기록한 후 다시 throw
    } finally {
      hideLoading();
    }
  };

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
        <CheckBox checked={teamItem.checked} key={teamItem.team} onChange={(event) => onChangeMember('TEAM', teamItem.team, event.target.checked)}>
          <span key={teamIndex+`_span`}>{teamItem.team}</span>
        </CheckBox>
        <div className="p_2dpth_btn" onClick={() => changeIsView(teamIndex, teamItem.isView)}>
            {teamItem.isView ?
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 3l7.5 8H0l7.5-8z" fill="currentColor"></path></svg>
              :
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 12L0 4h15l-7.5 8z" fill="currentColor"></path></svg>
            }
          </div>
        <div className="p_2dpth mgt10" key={teamIndex+`_innder_div`} >
          {teamItem.isView && members.filter(item => item.team === teamItem.team).map((item, index) =>
          <div className="checkbox">
            <CheckBox key={item.name} checked={item.checked} onChange={(event) => onChangeMember('USERID', item.userId, event.target.checked)}>
              <span key={index}>{item.name} {item.rank} ({item.team})</span>
            </CheckBox>
          </div>
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