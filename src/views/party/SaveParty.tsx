// import React from "react";
// import "./style.css";
// import '../../assets/css/saveParty.css'
import DropDown from "@/component/DropDown.tsx"
import { ChangeEvent, useState } from 'react';
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSaveParty } from '@/store/party';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SaveParty = () => {
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [partyName, setPartyName] = useState<string>('')
  const [cafeId, setCafeID] = useState<string>('')
  
  const onChangePartyName = (event: ChangeEvent<HTMLInputElement>) => {
    setPartyName(event.target.value);
  };

  const onChangeDropDown = (data : string) =>{
    console.log("data",data)
    setCafeID(data)
    
  }
  const partyInfo = useSelector((state: RootState) => state.party);
  console.log(":partyInfo:",partyInfo);

  const navigate  = useNavigate();
  const dispatch = useDispatch();

  const onClickSaveParty = function(){
    const yyyymmdd : string = endDate.toLocaleDateString('en-CA').replace(/-/g, '');
    const HHmm : string = endTime.toLocaleTimeString('en-US', {hour12: false}).slice(0, -3).replace(':', '');
    dispatch(setSaveParty(partyName, cafeId, yyyymmdd, HHmm))
    navigate('/party/preview')
  }


  
  return (
    <div>
      <div>
        <br/>
        파티명
        <br/>
        <input
          type="text"
          value={partyName}
          onChange={onChangePartyName}
        />
      </div>
      <div>
        <DropDown onChange={(data) => onChangeDropDown(data.id)}
          dataItem={[{value : '메가커피', id : '001'},{value:'컴포즈커피', id:'002'}]}><span>카페이름</span></DropDown>
      </div>
      <div>
        <DatePicker
          locale={ko}   
          dateFormat='yyyy/MM/dd' // 날짜 형태 
          shouldCloseOnSelect 
          selected={endDate} 
          minDate={new Date()}
          onChange={(date: Date ) => setEndDate(date)} />
      </div>
      <div>
      <DatePicker
        selected={endTime}
        onChange={(date: Date ) => setEndTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="hh:mm aa"
      />
      </div>
      <footer id="footer">
        <div className="large-btn" onClick={onClickSaveParty}>
            파티생성하기
        </div>
      </footer>
      
    </div>
    // <div className="element">
    //   <div className="div">
    //     <p className="p">
    //       <span className="text-wrapper">
    //         본격적으로
    //         <br />
    //       </span>
    //       <span className="span">파티를 생성</span>
    //       <span className="text-wrapper">합니다.</span>
    //     </p>
    //     <div className="form-input">
    //       <div className="overlap-group">
    //         <img className="line" alt="Line" src="line-1.svg" />
    //         <div className="text-wrapper-2">드림 슬레이브</div>
    //       </div>
    //       <div className="text-wrapper-3">파티명</div>

    //     </div>
    //     <div className="formbox">
    //       <div className="form-calendar">
    //         <div className="overlap-group-2">
    //           <img className="line" alt="Line" src="line-1-2.svg" />
    //           <div className="text-wrapper-2">2023/09/06</div>
    //           <img className="img" alt="Calendar ic" src="calendar-ic.png" />
    //         </div>
    //       </div>
    //       <div className="form-time">
    //         <div className="overlap-group-2">
    //           <img className="line" alt="Line" src="line-1-3.svg" />
    //           <div className="text-wrapper-2">12:13</div>
    //           <img className="img" alt="Clock ic" src="clock-ic.png" />
    //         </div>
    //       </div>
    //       <div className="text-wrapper-3">마감설정</div>
    //     </div>
    //     <div className="btn-group">
    //       <div className="large-btn">
    //         <div className="div-wrapper">
    //           <div className="text-wrapper-4">미리보기</div>
    //         </div>
    //       </div>
    //       <div className="large-btn-nd">
    //         <div className="overlap">
    //           <div className="text-wrapper-5">이전으로</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SaveParty;