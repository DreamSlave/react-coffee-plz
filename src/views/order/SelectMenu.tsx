import '@/assets_design/css/all.css'
import '@/assets_design/css/style.scss'
import searchIcSvg from '@/assets/temp-selectmenu/search-ic.svg'

import { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { Menu } from './MenuInterface'
import SelectMenuPopup from "./SelectMenuPopup";

import ApiUtil from '@/api/api.util';
import ApiConfig from '@/api/api.config';

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
    
    ApiUtil.get(`${ApiConfig.defaultDomain}/menu/info/${orderer.partyNo}`).then((response: any) => {

      const emptyMenuList = [{ menuId: 'MENU9999', menuNm: '직접입력' }]

      if(response && response.ok) {
        setCafeId(response.cafeId)
        setMenuList(response.menuList ?? emptyMenuList)
      } else {

        //test
        setMenuList(emptyMenuList)
      }

    }).catch((error: any) => {
      console.error('[/order/save] Error occurred ::: ', error);
    })
  }

  const toggleShowPopup = () => {
    setShowPopup(prevState => !prevState)
  }

  const onClickMenu = (menu: Menu) => {
    toggleShowPopup()
    setSelectedMenu(menu)
  }
  
  return (

    <div>
      {/* 선택 메뉴 팝업 */}
      {showPopup && selectedMenu && 
        <SelectMenuPopup
          partyNo={orderer.partyNo}
          cafeId={cafeId}
          menu={selectedMenu}
          orderer={orderer}
          show={showPopup}
          toggleShowPopup={toggleShowPopup} />}

      <div id='order' className="element selectmenu">
        <h1>
          <span className="point">메뉴를</span><br/>선택해주세요.
        </h1>
        <div className="person-info bg_sub point">
          {orderer.name} {orderer.rank}({orderer.team})
        </div>
        <div className="form-search mgt25 mgb15">
          <div className="input">
            <input  type="text"
                    placeholder="검색"
                    value={searchInputValue}
                    onChange={onChangeSearchInputValue}
                    className=""
            />
          </div>
          <div className='btn'><img className="search-ic" alt="Search ic" src={searchIcSvg} onClick={doSearch} /></div>
        </div>

        {/* start : 태그 영역 */}
        <div className="tag-group">
          {
            defaultTagTextList.map((tagText, index) => (
              <div className="menu-tag bg_pink white" key={index} onClick={() => onClickTagButton(tagText)}>
                # {tagText}
              </div>
            ))
          }
        </div>
        {/* end : 태그 영역 */}

        {/* start : 목록 영역 */}
        <div className="orderer-list mgt25">
          {
            menuList.map((menu) => (
              <div className="item" key={menu.menuId} onClick={() => onClickMenu(menu)}>{menu.menuNm}</div>
            ))
          }
        </div>
        {/* end : 목록 영역 */}
      </div>
    </div>
  );
};

export default SelectMenu
