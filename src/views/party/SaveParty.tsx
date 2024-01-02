// import React from "react";
// import "./style.css";
import '../../assets/css/saveParty.css'
import DropDown from "@/component/DropDown.tsx"
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SaveParty = () => {
  const [startDate, setStartDate] = useState<Date| null>(new Date());
  const [startTime, setStartTime] = useState<Date| null>(new Date());
  const onChangeDropDown = (data : string) =>{
    console.log("data",data)
    
  }
  return (
    <div>
      <div>
        <input/>
      </div>
      <div>
        <DropDown onChange={(data) => onChangeDropDown(data.id)}
          dataItem={[{value : '메가커피', id : '001'},{value:'컴포즈커피', id:'002'}]}><span>카페이름</span></DropDown>
      </div>
      <div>
        <DatePicker
          dateFormat='yyyy/MM/dd' // 날짜 형태 
          shouldCloseOnSelect 
          selected={startDate} 
          minDate={new Date()}
          onChange={(date: Date ) => setStartDate(date)} />
      </div>
      <div>
      <DatePicker
        selected={startTime}
        onChange={(date: Date ) => setStartTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="hh:mm aa"
      />
      </div>
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