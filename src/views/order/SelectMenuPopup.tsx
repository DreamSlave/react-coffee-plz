import '@/assets/css/all.css'
import '@/assets/css/style.scss'

import { useState, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import { Menu } from './MenuInterface'
import { Orderer } from './OrdererInterface'

import ApiUtil from '@/api/api.util';
import ApiConfig from '@/api/api.config';

interface SelectMenuPopupProps {
  partyNo: string
  cafeId: string
  menu: Menu
  orderer: Orderer
  show: boolean
  toggleShowPopup: () => void
}

function SelectMenuPopup({ partyNo, cafeId, menu, orderer, show, toggleShowPopup }: SelectMenuPopupProps) {
  const [menuNmInpuValue, setMenuNmInputValue] = useState<string>('')
  const navigate = useNavigate()

  const onChangeMenuNmInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMenuNmInputValue(e.target.value)
  }

  const submit = async () => {
    let menuNm = menu.id === 0 ? menuNmInpuValue : menu.name
    
    if(menuNm.trim() === '') {
      alert('메뉴명을 확인해주세요.')
      return false
    }
   
    // 직접입력의 경우 메뉴 등록 먼저 진행
    /* if(menu.id === 99) {
      let { newMenuId } = await saveNewMenu(menuNm)
      menu.id = newMenuId
    } */

    let params = {
      userId: orderer.userId,
      menuId: menu.id === 0 ? '' : menu.id,
      menuNm,
      cafeId,
      partyId: partyNo
    }
    ApiUtil.put(`${ApiConfig.defaultDomain}/order/save`, params).then((response: any) => {
      if(!response || !response.ok) {
        alert('처리 실패하였습니다.\n관리자에게 문의해주세요.')
        return
      }

      navigate(`/order/complete/${orderer.partyNo}/${encodeURIComponent(menuNm)}/${encodeURIComponent(orderer.name)}/${encodeURIComponent(orderer.team)}/${encodeURIComponent(orderer.rank)}`)
      
    }).catch((error: any) => {
      console.error('[/order/save] Error occurred ::: ', error);
    })
  }

  const saveNewMenu = async (menuNm:string): Promise<any> => {

    await ApiUtil.post(`${ApiConfig.defaultDomain}/menu/save`, { cafeId, menuNm }).then((response: any) => {
      if(!response || !response.ok) {
        alert('처리 실패하였습니다.\n관리자에게 문의해주세요.')
        return ''
      }

      return response.id

    }).catch((error: any) => {
      console.error('[/menu/save] Error occurred ::: ', error);
    })
  }

  return (
    // @ts-ignore
    <CSSTransition in={show} timeout={5000} className="fade">
      <div>
        <div id="popup" className="popup">
          <div className='pop_confirm'>
            <h2>선택한 메뉴를 확인해주세요.</h2>
            <div className='person-info'>{orderer.name} {orderer.rank}({orderer.team})</div>

            {
              menu.id === 0 ?
                <div>
                  <input  type="text"
                          placeholder="메뉴명 입력"
                          value={menuNmInpuValue}
                          onChange={onChangeMenuNmInputValue}
                          className="mgt10 mgb5"
                  />
                  <div className='point mgb25'>작성하기 전에 진짜 없는 메뉴인지 확인하셨나요?</div>
                </div> :
                <div className='menunm'>{menu.name}</div>
            }
            <div className='btn-area'>
              <ul>
                <li>
                  <div className="large-btn bg_sub point" onClick={toggleShowPopup}>
                    취소
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
      </div>
    </CSSTransition>
  );
}

/* <CSSTransition in={true} timeout={3000} classNames="fade">
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
    </CSSTransition> */

export default SelectMenuPopup