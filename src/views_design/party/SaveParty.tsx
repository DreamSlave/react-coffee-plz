// import React from "react";
// import "./style.css";
import '../../assets/css/all.css'
import DropDown from "@/component/DropDown.tsx"

const SaveParty = () => {
  return (
    <div>
      <DropDown dataItem={[{value : '1'},{value:'2'}]}><span>데이터</span></DropDown>
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