import '../../assets/temp-selectmenu/selectmenupopup.css'
// import {useEffect, useState} from "react";


function SelectMenuPopup() {
  return (
    <div className="index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="dim" />
          <div className="bottom-sheet">
            <div className="overlap-group">
              <div className="btn-group">
                <div className="large-btn">
                  <div className="div-wrapper">
                    <div className="text-wrapper">확인</div>
                  </div>
                </div>
                <div className="large-btn-st">
                  <div className="div">
                    <div className="text-wrapper-2">재선택</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-3">초코라떼 - 아이스</div>
              <div className="text-wrapper-4">정민재 프로(UX디자인팀)</div>
              <div className="text-wrapper-5">선택한 메뉴를 확인해주세요.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectMenuPopup