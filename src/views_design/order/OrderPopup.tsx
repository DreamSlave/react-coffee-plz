// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/orderPopup.css'
import {useEffect, useState} from "react";
// import '../../assets/css/all.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
//import {useEffect, useState} from "react";


interface orderUserInfo {
  userNm : string;
  count: number;
  userId: string;
  phoneNumber: string;
}

interface orderPopupInfo{
  menuNm: string;
  menuId: string;
  count: number;
  orderUserInfoList: orderUserInfo[];
}


function getOrderPopupInfo(){
  return{
    menuNm: '아메리카노-아이스-연하게',
    menuId: 'IDIDIDID',
    count: 30,
    orderUserInfoList: [
      {userNm: '김진미 프로(PD팀)', count: ~~(Math.random() * 10), userId: 'ID'+ (~~(Math.random() * 10)), phoneNumber: '010-3722-8040'},
      {userNm: '김세인 프로(PD팀)', count: ~~(Math.random() * 10), userId: 'ID'+ (~~(Math.random() * 10)), phoneNumber: '010-3722-8040'},
      {userNm: '조도은 프로(PD팀)', count: ~~(Math.random() * 10), userId: 'ID'+ (~~(Math.random() * 10)), phoneNumber: '010-3722-8040'},
    ]
  }
}

function OrderPopup() {

  const [orderPopupInfo, setOrderPopupInfo] = useState<orderPopupInfo>({
    menuNm: '',
    menuId: '',
    count: 0,
    orderUserInfoList: []
  });

  useEffect(() => {
    const orderInfo = getOrderPopupInfo()
    setOrderPopupInfo(orderInfo)
  }, []);

  return (
    <>
      <div id="popup">
        <div className="popup-area">
          <div className="close">
            <div className="fr">
              <svg width="27px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className="order-item">
            <div className="menunm">{orderPopupInfo.menuNm}</div>
            <div className="count">{orderPopupInfo.count}</div>
          </div>
          <div className="order-person-detail">
            {
              orderPopupInfo.orderUserInfoList.map((item, index)=>{
                const className = 'list-'+(index+1)
                return (
                  <div key={item.userId} className={className}>
                    <div className="person-info">
                      <svg className="fl mgr5" width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                      </svg>
                      {item.userNm}
                    </div>
                    <div className="call-btn point" onClick={() => document.location.href=`tel:${item.phoneNumber}` }>전화걸기</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default OrderPopup