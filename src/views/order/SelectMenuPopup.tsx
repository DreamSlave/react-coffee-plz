import '@/assets/temp-selectmenu/selectmenupopup.css'
import { useState, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';

import { Menu } from './MenuInterface'
import { Orderer } from './OrdererInterface'

interface SelectMenuPopupProps {
  cafeId: String;
  menu: Menu;
  orderer: Orderer;
  toggleShowPopup: () => void;
}

function SelectMenuPopup({ cafeId, menu, orderer, toggleShowPopup }: SelectMenuPopupProps) {
  const [menuNmInpuValue, setMenuNmInputValue] = useState<string>('')

  const onChangeMenuNmInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMenuNmInputValue(e.target.value)
  }

  const submit = () => {
    let menuNm = menu.menuId === 'MENU9999' ? menuNmInpuValue : menu.menuNm
    
    if(menuNm.trim() === '') {
      alert('메뉴명을 확인해주세요.')
      return false
    }

    let params = {
      cafeId,
      userId: orderer.userId,
      menuId: menu.menuId,
      menuNm
    }

    console.log(`submit called ::: param ::: ${JSON.stringify(params)}`)

    const navigate = useNavigate()
    navigate(`/order/complete/${orderer.partyNo}`)

  }

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
                    <div className="text-wrapper" onClick={submit}>확인</div>
                  </div>
                </div>
                <div className="large-btn-st">
                  <div className="div">
                    <div className="text-wrapper-2" onClick={toggleShowPopup}>재선택</div>
                  </div>
                </div>
              </div>
              {
                menu.menuId === 'MENU9999' ?
                  <input  type="text"
                          placeholder="메뉴명을 입력하세요."
                          value={menuNmInpuValue}
                          onChange={onChangeMenuNmInputValue}
                          className="text-wrapper-3"
                  /> :
                  <div className="text-wrapper-3">{menu.menuNm}</div>
              }
              
              <div className="text-wrapper-4">{orderer.name} {orderer.rank}({orderer.team})</div>
              <div className="text-wrapper-5">선택한 메뉴를 확인해주세요.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectMenuPopup