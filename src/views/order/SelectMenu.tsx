// import React from "react";
// import { useNavigate } from 'react-router-dom'

import "@/assets/temp-selectmenu/selectmenu.css"

import searchIcSvg from '@/assets/temp-selectmenu/search-ic.svg'
import { ChangeEvent, useState } from "react";

const SelectMenu = () => {
  // const navigate = useNavigate()
  const [searchText, setSearchText] = useState<string>('')


  const onChangeSearchText = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  // 검색 실행 함수
  const doSearch = () => {
    // TODO: 
  }

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
              {/* TODO : 선택한 주문자명 표시(Redux) */}
              <div className="text-wrapper-2">정민재 프로(UX디자인팀)</div>
            </div>
          </div>
        </div>
        <div className="search-area">
          <div className="form-search">
            <div className="overlap-group-2">
              <input  type="text"
                      placeholder="검색"
                      value={searchText}
                      onChange={onChangeSearchText}
                      className="text-wrapper-3"
              />
              <img className="search-ic" alt="Search ic" src={searchIcSvg} onClick={doSearch} />
            </div>
          </div>
          {/* start : 태그 영역 */}
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
          {/* end : 태그 영역 */}
        </div>
        <div className="contents">
          {/* start : 목록 영역 */}
          <div className="coffee-menu">
            <ul>
              <li key="a">아메리카노 - 아이스</li>
              <li key="b">아메리카노 - 아이스 - 연하게</li>
              <li key="c">아메리카노 - 핫</li>
            </ul>
          </div>
          {/* end : 목록 영역 */}
          {/* <div className="item-list">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectMenu
