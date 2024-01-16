// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/orderdetail.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
import {useEffect, useState} from "react";

interface orderInfo {
  title : string;
  cafeNm : string;
  endDt : string;
  orderUserCount : number;
  orderTagerUserCount : number;
  orderDrinkCount : number;
  orderTagerDrinkCount : number;
  orderState : string;
  orderMenuInfoList : orderMenuInfo[];
}

interface orderMenuInfo{
  menuNm: string;
  count: number;
  menuId: string;
}

function getOrderInfo(){
  return{
    title: '드림 슬레이브!',
    cafeNm: '메에가커픠',
    endDt: '2024/01/16 20:09',
    orderUserCount: 18 + ~~(Math.random() * 100),
    orderTagerUserCount: 30 + ~~(Math.random() * 100),
    orderDrinkCount: 15 + ~~(Math.random() * 100),
    orderTagerDrinkCount: 30 + ~~(Math.random() * 100),
    orderState: '01',
    orderMenuInfoList: [
      {menuNm: '아메리카노-아이스', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '아메리카노-아이스-연하게', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '아메리카노-핫', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '카페라떼-아이스', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '카페라떼-아이스-BIG', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '초코라떼-아이스', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '바닐라라떼-아이스', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '(직접입력)자두에이드', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
      {menuNm: '괜찮습니다.', count: ~~(Math.random() * 100), menuId: 'ID' + ~~(Math.random() * 10000)},
    ]
  }
}

function OrderDetail() {

  const [menuList, setMenuList] = useState<orderMenuInfo[]>([]);
  const [orderInfo, setOrderInfo] = useState<orderInfo>({
    cafeNm: "",
    endDt: "",
    orderDrinkCount: 0,
    orderMenuInfoList: [],
    orderState: "",
    orderTagerDrinkCount: 0,
    orderTagerUserCount: 0,
    orderUserCount: 0,
    title: ""
  });
  const [isOpen, setIsOpen] = useState<boolean>(true)

  useEffect(() => {
    const orderInfoData = getOrderInfo()
    setOrderInfo(orderInfoData)
    setMenuList(orderInfoData.orderMenuInfoList)

    const endTime = getDateFromYYYYMMDDHHMI(orderInfoData.endDt.replace(/[^0-9]/g, ""))
    const nowTime = new Date();
    const afterTime = endTime - nowTime;
    setTimeout(closeTime, afterTime);
  }, []);
  function closeTime() {setIsOpen(false)}

  function getDateFromYYYYMMDDHHMI(stringYYYYMMDDHHMI){
    const yyyy = stringYYYYMMDDHHMI.substring(0,4)
    const mm = stringYYYYMMDDHHMI.substring(4,6)
    const dd = stringYYYYMMDDHHMI.substring(6,8)
    const hh = stringYYYYMMDDHHMI.substring(8,10)
    const mi = stringYYYYMMDDHHMI.substring(10,12)
    return new Date(yyyy, mm-1, dd, hh, mi, 0)
  }
  return (
    <>
      <div id='order' className="element">
        <div className="main_tit">
          커피주문현황
        </div>

        <div className="order-list-area">
          <div className="order-title">
            <div className="text">
              <div className="title">{ orderInfo.title }</div>
              <div className="cafenm point">{ orderInfo.cafeNm }</div>
            </div>
            {isOpen ? <img className="image" src="/src/assets/img/icon_open.png" /> : <img className="image"  src="/src/assets/img/icon_close.png"/>}
          </div>
          <div className="order-time">
            <span className="mgr5"><b>마감시간</b></span> { orderInfo.endDt }
          </div>

          <div className="order-total">
            <div className="detail">
              <div className="title">주문한 인원</div>
              <div className="count">{ orderInfo.orderUserCount } 명</div>
              <div className="all gray">총 { orderInfo.orderTagerUserCount }명</div>
            </div>
            <div className="detail">
              <div className="title">주문된 음료</div>
              <div className="count">{ orderInfo.orderDrinkCount } 잔</div>
              <div className="all gray">총 { orderInfo.orderTagerDrinkCount } 잔</div>
            </div>
          </div>

          <div className="order-list-sum">
            <div className="title"><b>주문 취합 리스트</b></div>
            {
              menuList.map((item)=>{
                return (
                  <div key={item.menuId}>
                    <div className="menunm">{item.menuNm}</div>
                    <div className="count">{item.count}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <footer id="footer">
          <div className="large-btn-b">
            <div className="div-wrapper">
              { isOpen ? <div className="text-wrapper-15">주문하기</div> : <div className="text-wrapper-15">주문불가</div>}
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

export default OrderDetail