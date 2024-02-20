// import React from "react";
// import { useNavigate } from 'react-router-dom'

// import "@/assets/temp-selectmenu/selectmenu.css"

import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'

import searchIcSvg from '@/assets/temp-selectmenu/search-ic.svg'
import { ChangeEvent, useEffect, useState } from "react";

interface Menu {
  menuId: string;
  menuNm: string;
}

const SelectMenu = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [menuList, setMenuList] = useState<Menu[]>([])

  useEffect(() => {
    doSearch()
  }, [])

  const onChangeSearchText = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  // 검색 실행 함수
  const doSearch = () => {
    console.log(`doSearch called ::: param ::: ${searchText}`)

    // TODO: API call
    setMenuList([
      { menuId: 'MENU0001', menuNm: '아메리카노(ICE)' },
      { menuId: 'MENU0002', menuNm: '아메리카노(ICE) 연하게' },
      { menuId: 'MENU0003', menuNm: '아메리카노(HOT)' },
      { menuId: 'MENU0004', menuNm: '아메리카노(HOT) 연하게' },
      { menuId: 'MENU0005', menuNm: '카페라떼(ICE)' },
      { menuId: 'MENU0006', menuNm: '카페라떼(ICE) 연하게' },
      { menuId: 'MENU0007', menuNm: '카페라떼(HOT)' },
    ])
    
  }
  
  return (
    <div id='order' className="element selectmenu">
        <h1>
          <span className="point">메뉴를</span><br/>선택해주세요.
        </h1>
        <div className="person-info bg_sub point">
          {/* TODO : 선택한 주문자명 표시(Redux) */}
          정민재 프로(UX디자인팀)
        </div>
        <div className="form-search mgt25 mgb15">
          <div className="input">
            <input  type="text"
                    placeholder="검색"
                    value={searchText}
                    onChange={onChangeSearchText}
                    className=""
            />
          </div>
          <div className='btn'><img className="search-ic" alt="Search ic" src={searchIcSvg} onClick={doSearch} /></div>
        </div>

        {/* start : 태그 영역 */}
        <div className="tag-group">
          <div className="menu-tag bg_pink white">
            # 아이스
          </div>
        </div>
        {/* end : 태그 영역 */}

        {/* start : 목록 영역 */}
        <div className="orderer-list mgt25">
            {
              menuList.map((menu) => (
                <div className="item" key={menu.menuId}>{menu.menuNm}</div>
              ))
            }
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
  );
};

export default SelectMenu
