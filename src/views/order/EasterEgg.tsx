import React, {useEffect, useState} from "react";
import '../../assets/css/all.css'
import '../../assets/css/style.scss'
import { CSSTransition } from 'react-transition-group'


interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderPopup : React.FC<PopupProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
  }, [isOpen]);
  return (

      <CSSTransition in={isOpen} timeout={3000} classNames="order-popup">
        <>
          { <div id="popup" className="dis_n">
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
                    <div className="menunm">축하합니다!</div>
                    <div className="menunm">개발자를 후원할 수 있는</div>
                    <div className="menunm">특별한 기회입니다!</div>
                </div>
                <div className="order-person-detail">
                김세인 신한 110468217736
                </div>
            </div>
          </div>}
        </>
      </CSSTransition>
  )
}

export default OrderPopup