// import React from "react";
// import { useNavigate } from 'react-router-dom'

// import "@assets/temp-selectmenu/selectmenu.css"

// import searchIcSvg from '@assets/temp-selectmenu/search-ic.svg'

// import hurryImg from '../assets/temp-entrance/entrance1.png'
// import logoImg from '../assets/temp-entrance/entrance2.png'

const SelectMenu = () => {
  // const navigate = useNavigate()

  return (
    <div className="element">
      <div className="div">
        <header className="header">
          <img className="back-icon" alt="Back icon" src="back-icon.png" />
          <img className="close-icon" alt="Close icon" src="close-icon.png" />
        </header>
        <div className="title">
          <p className="p">
            <span className="text-wrapper">메뉴</span>
            <span className="span">
              를<br />
              선택해주세요.
            </span>
          </p>
          <div className="person-info">
            <div className="overlap-group">
              <div className="text-wrapper-2">정민재 프로(UX디자인팀)</div>
            </div>
          </div>
        </div>
        <div className="search-area">
          <div className="form-search">
            <div className="overlap-group-2">
              <img className="line" alt="Line" src="line-1.svg" />
              <div className="text-wrapper-3">검색</div>
              {/* <img className="search-ic" alt="Search ic" src={searchIcSvg} /> */}
            </div>
          </div>
          <div className="tag-group">
            <div className="menu-tag">
              <div className="div-wrapper">
                <div className="text-wrapper-4"># 아이스</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="text-wrapper-4"># 핫</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-2">
                <div className="text-wrapper-4"># 라떼</div>
              </div>
            </div>
            <div className="menu-tag-2">
              <div className="div-wrapper">
                <div className="text-wrapper-4"># 에이드</div>
              </div>
            </div>
            <div className="menu-tag-3">
              <div className="div-wrapper">
                <div className="text-wrapper-4"># 샷추가</div>
              </div>
            </div>
            <div className="menu-tag-4">
              <div className="div-wrapper">
                <div className="text-wrapper-4"># 생과일</div>
              </div>
            </div>
            <div className="menu-tag-5">
              <div className="overlap-3">
                <div className="text-wrapper-5"># 아메리카노</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contents">
          <div className="item-list">
            <div className="item">
              <div className="overlap-group-3">
                <img className="img" alt="Line" src="line-3.svg" />
                <div className="text-wrapper-6">아메리카노 - 아이스</div>
              </div>
            </div>
            <div className="item-2">
              <div className="overlap-group-3">
                <img className="img" alt="Line" src="image.svg" />
                <p className="text-wrapper-7">아메리카노 - 아이스 - 연하게</p>
              </div>
            </div>
            <div className="item-3">
              <div className="overlap-group-3">
                <img className="img" alt="Line" src="line-3-2.svg" />
                <div className="text-wrapper-8">아메리카노 - 핫</div>
              </div>
            </div>
            <div className="item-4">
              <div className="overlap-group-3">
                <img className="img" alt="Line" src="line-3-3.svg" />
                <div className="text-wrapper-6">아메리카노 - 아이스</div>
              </div>
            </div>
            <div className="item-5">
              <div className="overlap-group-3">
                <img className="img" alt="Line" src="line-3-4.svg" />
                <p className="text-wrapper-7">아메리카노 - 아이스 - 연하게</p>
              </div>
            </div>
            <div className="item-6">
              <div className="overlap-group-3">
                <img className="img" alt="Line" src="line-3-5.svg" />
                <div className="text-wrapper-8">아메리카노 - 핫</div>
              </div>
            </div>
            <div className="item-7">
              <div className="overlap-group-3">
                <img className="img" alt="Line" src="line-3-6.svg" />
                <div className="text-wrapper-6">아메리카노 - 아이스</div>
              </div>
            </div>
            <div className="item-8">
              <div className="overlap-4">
                <p className="text-wrapper-7">아메리카노 - 아이스 - 연하게</p>
              </div>
              <img className="line-2" alt="Line" src="line-3-7.svg" />
            </div>
            <div className="item-9">
              <div className="overlap-4">
                <div className="text-wrapper-8">아메리카노 - 핫</div>
              </div>
              <img className="line-2" alt="Line" src="line-3-8.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMenu