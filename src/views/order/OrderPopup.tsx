// import './App.css'
// import "./scss/style.scss"
import '../../assets/css/orderPopup.css'
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
      <div className="box">
        <div className="contents">
          <div className="order-person-detail">
              {
                orderPopupInfo.orderUserInfoList.map((item, index)=>{
                  const className = 'list-'+(index+1)
                  return (
                    <div key={item.userId} className={className}>
                      <div className="text-wrapper">{item.userNm}</div>
                      <div className="call-btn">
                        <div className="overlap-group">
                          {/*<img className="vector" alt="Vector" src="vector-3.svg" />*/}
                          <div className="div" onClick={() => document.location.href=`tel:${item.phoneNumber}` }>전화걸기</div>
                        </div>
                      </div>
                      {/*// <img className="img" alt="Vector" src="vector.svg" />*/}
                    </div>
                  )
                })
              }
          </div>
          <div className="order-item">
            {/*<img className="line" alt="Line" src="line-4.svg" />*/}
            <p className="p">{orderPopupInfo.menuNm}</p>
            <div className="text-wrapper-3">{orderPopupInfo.count}</div>
          </div>
          <div className="top">
            {/*<PopCloseIcon className="pop-close-icon" />*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPopup