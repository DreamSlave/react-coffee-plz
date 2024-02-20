import '@/assets_design/css/all.css'
import '@/assets_design/css/style.scss'

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
  const navigate = useNavigate()

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
    
    navigate(`/order/complete/${orderer.partyNo}`)
  }

  return (
    <div id="popup">
      <div className='pop_confirm'>
        <h2>선택한 메뉴를 확인해주세요.</h2>
        <div className='person-info'>{orderer.name} {orderer.rank}({orderer.team})</div>

        {
          menu.menuId === 'MENU9999' ?
            <div>
              <input  type="text"
                      placeholder="메뉴명 입력"
                      value={menuNmInpuValue}
                      onChange={onChangeMenuNmInputValue}
                      className="mgt10 mgb5"
              />
              <div className='point mgb25'>작성하기 전에 진짜 없는 메뉴인지 확인하셨나요?</div>
            </div> :
            <div className='menunm'>{menu.menuNm}</div>
        }
        <div className='btn-area'>
          <ul>
            <li>
              <div className="large-btn bg_sub point" onClick={toggleShowPopup}>
                재선택
              </div>
            </li>
            <li>
              <div className="large-btn" onClick={submit}>
                확인
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default SelectMenuPopup