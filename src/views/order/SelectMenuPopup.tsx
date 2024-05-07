import '@/assets_design/css/all.css'
import '@/assets_design/css/style.scss'

import { useState, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import { Menu } from './MenuInterface'
import { Orderer } from './OrdererInterface'

import ApiUtil from '@/api/api.util';
import ApiConfig from '@/api/api.config';

interface SelectMenuPopupProps {
  partyNo: String;
  cafeId: String;
  menu: Menu;
  orderer: Orderer;
  toggleShowPopup: () => void;
}

function SelectMenuPopup({ partyNo, cafeId, menu, orderer, toggleShowPopup }: SelectMenuPopupProps) {
  const [menuNmInpuValue, setMenuNmInputValue] = useState<string>('')
  const navigate = useNavigate()

  const onChangeMenuNmInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMenuNmInputValue(e.target.value)
  }

  const submit = async () => {
    let menuNm = menu.menuId === 'MENU9999' ? menuNmInpuValue : menu.menuNm
    
    if(menuNm.trim() === '') {
      alert('메뉴명을 확인해주세요.')
      return false
    }
   
    // 직접입력의 경우 메뉴 등록 먼저 진행
    if(menu.menuId === 'MENU9999') {
      let { newMenuId } = await saveNewMenu(menuNm)
      menu.menuId = newMenuId
    }
    
    let params = {
      userId: orderer.userId,
      menuId: menu.menuId,
      cafeId,
      partyId: partyNo
    }
    ApiUtil.post(`${ApiConfig.defaultDomain}/order/save`, params).then((response: any) => {

      if(response && response.ok) {
        navigate(`/order/complete/${orderer.partyNo}/${encodeURIComponent(menuNm)}`)
      }
    }).catch((error: any) => {
      console.error('[/order/save] Error occurred ::: ', error);
    })
  }

  const saveNewMenu = async (menuNm:string): Promise<any> => {

    await ApiUtil.post(`${ApiConfig.defaultDomain}/menu/save`, { cafeId, menuNm }).then((response: any) => {
      
      return (response?.menuId || '')

    }).catch((error: any) => {
      console.error('[/menu/save] Error occurred ::: ', error);
    })
  }

  return (
    <CSSTransition in={true} timeout={3000} classNames="fade">
      <div id="popup" className="popup">
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
    </CSSTransition>
  );
}

export default SelectMenuPopup