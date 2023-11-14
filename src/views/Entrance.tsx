// import React from "react";
import "../assets/temp-entrance/entrance.css";
import hurryImg from '../assets/temp-entrance/entrance1.png'
import logoImg from '../assets/temp-entrance/entrance2.png'

const Entrance = () => {
  return (
    <div className="element">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="contents">
            <div className="text-wrapper">
              커피주문
              <br />
              올려주세요
            </div>
            <div className="cffe-plz">
              <img className="hurry" alt="Hurry" src={hurryImg} />
            </div>
            <div className="large-btn">
              <div className="overlap-group">
                <div className="div" style={{cursor: 'pointer'}}>파티생성하기</div>
              </div>
            </div>
          </div>
          <img className="img" alt="Element" src={logoImg} />
        </div>
      </div>
    </div>
  );
};

export default Entrance
