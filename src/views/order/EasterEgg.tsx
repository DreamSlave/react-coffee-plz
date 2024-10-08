import React, {useEffect, useState} from "react";
import '../../assets/css/all.css'
import '../../assets/css/style.scss'
import { CSSTransition } from 'react-transition-group'
import EggImg from "@/assets/img/cfplz_egg_01.png";


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
            { <div id="popup" style={{ paddingTop: '15%', zIndex : 9999999}} className="dis_n">
              <div className="popup-area">
                  <div onClick={onClose} className="close">
                      <div className="fr">
                          <svg width="27px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                               strokeWidth="1.5"
                               stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                          </svg>
                      </div>
                  </div>
                  <div className="order-person-detail">
                      {/* 이스터에그 시연용 임시 */}
                      <div className="eggpop">
                          <img src={EggImg}/>
                      </div>
                      <div className="w100">
                          <div className="person-info w100">
                              <svg className="fl mgr5" width="22px" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 24 24"
                                   fill="currentColor">
                                  <path fillRule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                        clipRule="evenodd"/>
                              </svg>
                              권혜란 <span className="fr">(기업) 467-051817-01-011</span>
                          </div>
                          <div className="person-info w100">
                              <svg className="fl mgr5" width="22px" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 24 24"
                                   fill="currentColor">
                                  <path fillRule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                        clipRule="evenodd"/>
                              </svg>
                              김세인 <span className="fr">(기업) 932-046859-02-014</span>
                          </div>
                          <div className="person-info w100">
                              <svg className="fl mgr5" width="22px" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 24 24"
                                   fill="currentColor">
                                  <path fillRule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                        clipRule="evenodd"/>
                              </svg>
                              김진미 <span className="fr">(신한) 110-217-167982</span>
                          </div>
                          <div className="person-info w100">
                              <svg className="fl mgr5" width="22px" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 24 24"
                                   fill="currentColor">
                                  <path fillRule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                        clipRule="evenodd"/>
                              </svg>
                              정민재 <span className="fr">(카카오) 3333-03-0391066</span>
                          </div>
                          <div className="person-info w100">
                              <svg className="fl mgr5" width="22px" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 24 24"
                                   fill="currentColor">
                                  <path fillRule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                        clipRule="evenodd"/>
                              </svg>
                              조도은 <span className="fr">(기업) 010-9104-1177</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>}
        </>
      </CSSTransition>
  )
}

export default OrderPopup