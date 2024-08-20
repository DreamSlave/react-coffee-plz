// import React from "react";
// import "./style.css";
// import '../../assets/css/saveParty.css'
import '../../assets/css/all.css'
import '../../assets/css/style.scss'

import DropDown from "@/component/DropDown.tsx"
import { ChangeEvent, useEffect, useState, useRef} from 'react';
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSaveParty } from '@/store/party';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ApiUtil from "../../api/api.util";
import ApiConfig from "../../api/api.config";


interface DataItem {
  [key: string]: string | number; // 각각의 아이템은 string 또는 number 타입의 값을 가질 수 있음
}

const SaveParty = () => {
  const firstRender = useRef(true); // useRef로 변경하여 상태를 추적

  const [endDate, setEndDate] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [partyName, setPartyName] = useState<string>('')
  const [cafeId, setCafeId] = useState<string>('')
  const [cafeName, setCafeName] = useState<string>('')
  const [cafeList, setCafeList] = useState<DataItem[]>([])
  const [isValid, setIsValid] = useState<boolean>(true)

  const partyInfo = useSelector((state: RootState) => state.party);

  useEffect(() => {
    const fetchPartyInfo = async () => {
      if (firstRender.current) {
        try {
          const result = await getCafeList();
          setCafeList(result);

          if (partyInfo.partyName) {
            setPartyName(partyInfo.partyName);
          }

          if (partyInfo.cafeId) {
            setCafeName(partyInfo.cafeName);
            setCafeId(partyInfo.cafeId);
          } else if (result.length > 0) {
            setCafeName(result[0].cafeName);
            setCafeId(result[0].cafeId);
          }

          if (partyInfo.endDate) {
            setEndDate(stringToDate(partyInfo.endDate));
          }
          if (partyInfo.endTime) {
            setEndTime(stringToTime(partyInfo.endTime));
          } else {
            setEndTime(nearestQuarterHour());
          }

          firstRender.current = false;
        } catch (error) {
          console.error(error);
        }
      }
      // validation 검사      
      if (partyName !== '' && cafeId !== '') {
        setIsValid(true);
      } else {
        setIsValid(false);
      }

      const now = new Date();
      const afterTime = endTime.getTime() - now.getTime();

      if (endDate.getTime() > now.getTime()) {
        setIsValid(true);
      } else {
        setTimeout(() => {
          if (endTime.getTime() - now.getTime() > 1000 * 60 ) {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
        }, afterTime);
      }
    };

    fetchPartyInfo();
  }, [partyInfo, partyName, cafeId, cafeName, endDate, endTime, isValid]);

  function getCafeList() {
    return ApiUtil.get(`${ApiConfig.defaultDomain}/cafe/info`)
    .then(json => {
     const resultData = json.data
     return resultData
    })
        
  }

  const onChangePartyName = (event: ChangeEvent<HTMLInputElement>) => {
    setPartyName(event.target.value);        
  };

  const onChangeDropDown = (data : DataItem) =>{
    const dataItem = cafeList.find(item => item.cafeId === data.cafeId);
    setCafeName(String(dataItem?.cafeName) ?? '');
    setCafeId(String(dataItem?.cafeId) ?? '');
  }
  

  const navigate  = useNavigate();
  const dispatch = useDispatch();

  const onClickSaveParty = function(){
    const yyyymmdd : string = endDate.toLocaleDateString('en-CA').replace(/-/g, '');
    const HHmm : string = endTime.toLocaleTimeString('en-US', {hour12: false}).slice(0, -3).replace(':', '');
    
    dispatch(setSaveParty(partyName, cafeId, cafeName, yyyymmdd, HHmm))
    navigate('/party/preview')
  }

  function stringToDate(yyyymmdd: string): Date {
    const year = parseInt(yyyymmdd.substring(0, 4), 10);
    const month = parseInt(yyyymmdd.substring(4, 6), 10) - 1; // 월은 0부터 시작하므로 1을 빼줌
    const day = parseInt(yyyymmdd.substring(6, 8), 10);
    return new Date(year, month, day);
  }

  function stringToTime(hhmm: string): Date {
    const newDate = new Date()
    const hours = parseInt(hhmm.substring(0, 2), 10);
    const minutes = parseInt(hhmm.substring(2, 4), 10);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);

    return newDate;
  }

  function nearestQuarterHour() {
    const now = new Date();
    const minutes = now.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 15) * 15; // 현재 분을 가장 가까운 15분 단위로 올림

    // 만약 현재 분이 15의 배수라면 roundedMinutes는 60이 되므로 다음 시간대로 넘어감
    if (roundedMinutes === 60) {
        now.setHours(now.getHours() + 1);
        now.setMinutes(0);
    } else {
        now.setMinutes(roundedMinutes);
    }

    // 초와 밀리초를 0으로 설정하여 정확한 시간을 반환
    now.setSeconds(0);
    now.setMilliseconds(0);

    return now;
}


  
  return (
    <div id='party' className="element">
      <h1>
        본격적으로<br/><span className="point">파티를 생성</span>합니다.
      </h1>
      
      <div className="form-area">
        <div className="input">
          <div className="label">파티명</div>
          <input  type="text"
                  placeholder="파티명을 입력하세요."
                  className=""
                  value={partyName}
                  onChange={onChangePartyName}
          />
        </div>
        <div>
          <div className="label">카페선택</div>
          <div className="select">
            <DropDown
              onChange={(data) => onChangeDropDown(data)}
              dataItem={cafeList}
              itemKey="cafeId" // cafeId를 itemKey로 지정
              itemValue="cafeName"
              defaultValue={cafeId}
            />
          </div>
          
        </div>
        <div className="form_date mgb10">
          <div className="label">마감설정</div>
            <DatePicker
              locale={ko}   
              dateFormat='yyyy/MM/dd' // 날짜 형태 
              shouldCloseOnSelect 
              className="datepicker"
              selected={endDate} 
              minDate={new Date()}
              onChange={(date: Date ) => setEndDate(date)} />
              
        </div>
        <div className="form_date mgb10">
          <DatePicker
            className="timepicker"
            selected={endTime}
            onChange={(date: Date ) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="hh:mm aa"
          />
        </div>
      </div>

      <footer id="footer">
      {
        isValid ?   
        <div className="large-btn" onClick={onClickSaveParty}>
            미리보기
        </div>:
        <div className="large-btn bg_gray" >
            미리보기
        </div>
        }
      </footer>

    </div>

  );
};

export default SaveParty;