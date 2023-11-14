// import React from "react";
// import "./style.css";

import '../../assets/css/selectPartyMember.css'

const SelectPartyMember = () => {
  return (
    <div className="element">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">연구소</div>
            </div>
          </div>
          <img className="vector" alt="Vector" src="vector.svg" />
        </div>
        <p className="p">
          <span className="span">대상 인원</span>
          <span className="text-wrapper-2">
            을<br />
            선택해주세요.
          </span>
        </p>
        <div className="text-wrapper-3">3명</div>
        <div className="group-2" />
        <div className="group-3" />
      </div>
    </div>
  );
};

export default SelectPartyMember;