// import React from "react";
// import "./style.css";
import '../../assets/css/all.css'

const ConfirmParty = () => {
  return (
    <div className="element">
      <div className="div">
        <div className="btn-group">
          <div className="large-btn-b">
            <div className="overlap-group">
              <div className="text-wrapper">추가 파티 생성</div>
            </div>
          </div>
        </div>
        <div className="order-link-area">
          <div className="overlap">
            <div className="order-link-btn">
              <div className="group">
                <img className="vector" alt="Vector" src="image.svg" />
                <div className="text-wrapper-2">주문하러가기</div>
              </div>
            </div>
            <div className="text-wrapper-3">
              파티가
              <br />
              생셩되었습니다!
              <br />
              링크를 공유하세요.
            </div>
            <div className="cffe-plz">
              <div className="div-wrapper">
                <div className="text-wrapper-4">hurry!</div>
              </div>
            </div>
            <div className="order-copylink">
              <div className="overlap-2">
                <div className="text-wrapper-5">hts://www.figma.com/file/R6Ojisdffs...</div>
                <img className="copy-ic" alt="Copy ic" src="copy-ic.png" />
              </div>
              <img className="line" alt="Line" src="line-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ConfirmParty;