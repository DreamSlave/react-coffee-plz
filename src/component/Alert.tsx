import React from "react";
import { CSSTransition } from 'react-transition-group'

interface AlertProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const Alert : React.FC<AlertProps> = ({ isOpen, message, onClose }) =>  {

  // const doConfirm = () => {
  //   onClose()
  // }


  return (
    <CSSTransition in={isOpen} timeout={3000} classNames="order-popup">
    <>
      {<div id="popup" className={""}>
        <div className="popup-area">
          <div className="alert_txt">
            {message}
          </div>
          <div className='btn-area'>
            <ul>
              <li className={'w100'}>
                <div className="large-btn w100" onClick={onClose}>
                  확인
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      }
    </>
    </CSSTransition>
  );
}

export default Alert;
