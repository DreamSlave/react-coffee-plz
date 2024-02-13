import "@/assets/temp-selectmenu/selectmenu.css"
import { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { Menu } from './MenuInterface'
import searchIcSvg from '@/assets/temp-selectmenu/search-ic.svg'
import SelectMenuPopup from "./SelectMenuPopup";

const SelectMenu = () => {
  const orderer = {
    partyNo: useSelector((state: RootState) => state.order.partyNo),
    userId: useSelector((state: RootState) => state.order.userId),
    name: useSelector((state: RootState) => state.order.name),
    team: useSelector((state: RootState) => state.order.team),
    rank: useSelector((state: RootState) => state.order.rank),
  }
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [menuSearchText, setMenuSearchText] = useState<string>('')
  const [menuList, setMenuList] = useState<Menu[]>([])
  const [cafeId, setCafeId] = useState<string>('')
  const [selectedMenu, setSelectedMenu] = useState<Menu>()
  const [defaultTagTextList] = useState<string[]>(['아이스', '핫', '라떼', '에이드', '샷추가', '생과일', '아메리카노'])
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    fetchMenuList()
  }, [menuSearchText])


  // 검색어 change 이벤트 핸들링
  const onChangeSearchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value)
  }

  // 검색 실행 함수
  const doSearch = () => {
    setMenuSearchText(searchInputValue)
  }

  // 태그 버튼 클릭 이벤트 핸들링
  const onClickTagButton = (tagText: string) => {

    // TODO: 이렇게 해야만할까..
    setSearchInputValue(tagText)
    setMenuSearchText(tagText)
  }

  // 메뉴 리스트 조회 API call
  const fetchMenuList = () => {
    console.log(`fetchMenuList called ::: param ::: ${menuSearchText}`)

    // TODO: API call
    let response = {
      cafeId: 'CAFE0001',
      menuList: [
        { menuId: 'MENU0001', menuNm: '아메리카노(ICE)' },
        { menuId: 'MENU0002', menuNm: '아메리카노(ICE) 연하게' },
        { menuId: 'MENU0003', menuNm: '아메리카노(HOT)' },
        { menuId: 'MENU0004', menuNm: '아메리카노(HOT) 연하게' },
        { menuId: 'MENU0005', menuNm: '카페라떼(ICE)' },
        { menuId: 'MENU0006', menuNm: '카페라떼(ICE) 연하게' },
        { menuId: 'MENU0007', menuNm: '카페라떼(HOT)' },
        { menuId: 'MENU9999', menuNm: '직접입력' },
      ]
    }

    setMenuList(response.menuList)
    setCafeId(response.cafeId)
  }

  const toggleShowPopup = () => {
    setShowPopup(prevState => !prevState)
  }

  const onClickMenu = (menu: Menu) => {
    toggleShowPopup()
    setSelectedMenu(menu)
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
              <div className="text-wrapper-2">{orderer.name} {orderer.rank}({orderer.team})</div>
            </div>
          </div>
        </div>
        <div className="search-area">
          <div className="form-search">
            <div className="overlap-group-2">
              <input  type="text"
                      placeholder="검색"
                      value={searchInputValue}
                      onChange={onChangeSearchInputValue}
                      className="text-wrapper-3"
              />
              <img className="search-ic" alt="Search ic" src={searchIcSvg} onClick={doSearch} />
            </div>
          </div>
          
          {/* start : 태그 영역 */}
          <div className="tag-group">
            {
              defaultTagTextList.map((tagText, index) => (
                <div className="menu-tag" key={index}>
                  <div className="div-wrapper" onClick={() => onClickTagButton(tagText)}>
                    <div className="text-wrapper-4"># {tagText}</div>
                  </div>
                </div>
              ))
            }
          </div>
          {/* end : 태그 영역 */}
        </div>
        <div className="contents">
          {/* start : 목록 영역 */}
          <div className="coffee-menu">
            <ul>
              {
                menuList.map((menu) => (
                  <li key={menu.menuId} onClick={() => onClickMenu(menu)}>{menu.menuNm}</li>
                ))
              }
            </ul>
          </div>
          {/* end : 목록 영역 */}
        </div>
      </div>

      {/* 선택 메뉴 팝업 */}
      {showPopup && selectedMenu && 
        <SelectMenuPopup
          cafeId={cafeId}
          menu={selectedMenu}
          orderer={orderer}
          toggleShowPopup={toggleShowPopup} />}
    </div>
  );
};

export default SelectMenu
