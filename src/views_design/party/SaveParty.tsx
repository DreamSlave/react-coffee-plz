// import React from "react";
// import "./style.css";
// import '../../assets/css/saveParty.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
import DropDown from "@/component/DropDown.tsx"
import { useState } from 'react';
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const SaveParty = () => {
  const [startDate, setStartDate] = useState<Date| null>(new Date());
  const [startTime, setStartTime] = useState<Date| null>(new Date());
  const onChangeDropDown = (data : string) =>{
    console.log("data",data)
    
  }
  const partyInfo = useSelector((state: RootState) => state.party);
  console.log(":partyInfo:",partyInfo);
  
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
          />
        </div>
        <div>
          <div className="label">카페선택</div>
          <DropDown onChange={(data) => onChangeDropDown(data.id)}
            dataItem={[{value : '메가커피', id : '001'},{value:'컴포즈커피', id:'002'}]}></DropDown>
        </div>
        <div className="form_date mgb10">
          <div className="label">마감설정</div>
            <DatePicker
              locale={ko}   
              dateFormat='yyyy/MM/dd' // 날짜 형태 
              shouldCloseOnSelect 
              className="datepicker"
              selected={startDate} 
              minDate={new Date()}
              onChange={(date: Date ) => setStartDate(date)} />
        </div>
        <div className="form_date mgb10">
          <DatePicker
            className="timepicker"
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

      <footer id="footer">
        <div className="large-btn">
            미리보기
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