import React, {useEffect, useState} from "react";
import '../../assets/css/all.css'
import '../../assets/css/style.scss'
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

interface orderUserInfo {
  name : string;
  userId: string;
  team: string;
  department: string;
  rank: string;
  telNo: string;
}

interface orderPopupInfo{
  menuNm: string;
  count: number;
  orderUserInfoList: orderUserInfo[];
}

interface PopupProps {
  isOpen: boolean;
  menuNm: string;
  count: number;
  orderUserInfoList: orderUserInfo[]
  onClose: () => void;
}

const OrderPopup : React.FC<PopupProps> = ({ isOpen, menuNm, count, orderUserInfoList, onClose }) => {

  const [orderPopupInfo, setOrderPopupInfo ] = useState<orderPopupInfo>({
    menuNm: menuNm,
    count: count,
    orderUserInfoList: orderUserInfoList
  });

  useEffect(() => {
    if(isOpen){
      setOrderPopupInfo({
        menuNm: menuNm,
        count: count,
        orderUserInfoList: orderUserInfoList
      })
    }
  }, [count, isOpen, menuNm, orderUserInfoList]);
  // { <div id="popup" onClick={onClose} className={isOpen ? 'fade-in' : 'fade-out'}>
  return (

    <CSSTransition in={isOpen} timeout={3000} classNames="order-popup">
    <>
      { <div id="popup" className="dis_n" onClick={onClose} >
        <div className="popup-area">
          <div onClick={onClose} className="close">
            <div className="fr">
              <svg width="27px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </div>
          </div>
          <div className="order-item">
            <div className="menunm">{orderPopupInfo.menuNm}</div>
            <div className="count">{orderPopupInfo.count}</div>
          </div>
          <div className="order-person-detail">
            {
              orderPopupInfo.orderUserInfoList.map((item, index) => {
                const className = 'list-' + (index + 1)
                return (
                  <div key={item.userId} className={className}>
                    <div className="person-info">
                      <svg className="fl mgr5" width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                           fill="currentColor">
                        <path fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                              clipRule="evenodd"/>
                      </svg>
                      {item.name}
                    </div>
                    <div className="call-btn point"
                         onClick={() => document.location.href = `tel:${item.telNo}`}>전화걸기
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>}
    </>
    </CSSTransition>
  )
}

export default OrderPopup