// import React from "react";
// import "./style.css";
// import '../../assets/css/saveParty.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'

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
          <DropDown onChange={(data) => onChangeDropDown(data.id)}
            dataItem={[{value : '메가커피', id : '001'},{value:'컴포즈커피', id:'002'}]}></DropDown>
        </div>
        <div className="form_date mgb10">
          <div className="label">마감설정</div>
            <DatePicker
              locale={ko}   
              dateFormat='yyyy/MM/dd' // 날짜 형태 
              shouldCloseOnSelect 
              className=""
              selected={endDate} 
              minDate={new Date()}
              onChange={(date: Date ) => setEndDate(date)} />
              <div className="btn">
                <img src="/src/assets/img/calendar_ic.png"></img>
              </div>
        </div>
        <div className="form_date mgb10">
          <DatePicker
            selected={endTime}
            onChange={(date: Date ) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="hh:mm aa"
          />
          <div className="btn">
          <img src="/src/assets/img/clock_ic.png"></img>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="large-btn" onClick={onClickSaveParty}>
            미리보기
        </div>
      </footer>

    </div>
    // <div>
    //   <div>
    //     <br/>
    //     파티명
    //     <br/>
    //     <input
    //       type="text"
    //       value={partyName}
    //       onChange={onChangePartyName}
    //     />
    //   </div>
    //   <div>
    //     <DropDown onChange={(data) => onChangeDropDown(data.id)}
    //       dataItem={[{value : '메가커피', id : '001'},{value:'컴포즈커피', id:'002'}]}><span>카페이름</span></DropDown>
    //   </div>
    //   <div>
    //     <DatePicker
    //       locale={ko}   
    //       dateFormat='yyyy/MM/dd' // 날짜 형태 
    //       shouldCloseOnSelect 
    //       selected={endDate} 
    //       minDate={new Date()}
    //       onChange={(date: Date ) => setEndDate(date)} />
    //   </div>
    //   <div>
    //   <DatePicker
    //     selected={endTime}
    //     onChange={(date: Date ) => setEndTime(date)}
    //     showTimeSelect
    //     showTimeSelectOnly
    //     timeIntervals={15}
    //     timeCaption="Time"
    //     dateFormat="hh:mm aa"
    //   />
    //   </div>
    //   <footer id="footer">
    //     <div className="large-btn" onClick={onClickSaveParty}>
    //         파티생성하기
    //     </div>
    //   </footer>
      
    // </div>

  );
};

export default SaveParty;