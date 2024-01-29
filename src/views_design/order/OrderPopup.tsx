// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/all.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
import {useEffect, useState} from "react";


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
          <div>닫기</div>
          <div className="order-item">
            <p className="p">{orderPopupInfo.menuNm}</p>
            <div className="text-wrapper-3">{orderPopupInfo.count}</div>
          </div>
          <div className="order-person-detail">
              {
                orderPopupInfo.orderUserInfoList.map((item, index)=>{
                  const className = 'list-'+(index+1)
                  return (
                    <div key={item.userId} className={className}>
                      <div className="text-wrapper">
                      <svg width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                      </svg>
                        {item.userNm}
                      </div>
                      <div className="call-btn">
                        <div className="overlap-group">
                          <div className="div" onClick={() => document.location.href=`tel:${item.phoneNumber}` }>전화걸기</div>
                        </div>
                      </div>
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