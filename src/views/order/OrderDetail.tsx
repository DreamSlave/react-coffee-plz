// import './App.css'
// import "./scss/style.scss"
import '../../assets/css/orderdetail.css'
import {useEffect, useState} from "react";

function getOrderInfo(){
  return{
    title: '드림 슬레이브!',
    cafeNm: '메에가커픠',
    endDt: '2023/09/06 12:13',
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

  const [menuList, setMenuList] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    title: '',
    cafeNm: '',
    endDt: '',
    orderUserCount: 0,
    orderTagerUserCount: 0,
    orderDrinkCount: 0,
    orderTagerDrinkCount: 0,
  });

  useEffect(() => {
    const orderInfo = getOrderInfo()
    setOrderInfo(orderInfo)
    setMenuList(orderInfo.orderMenuInfoList ?? [])
  }, []);

  return (
    <>
      <div className="element">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="title">
              <div className="text-wrapper">커피주문현황</div>
            </div>
            <div className="overlap-group">
              <div className="contents">
                <div className="order-list-area">
                  <div className="div">
                    {/*<img className="bg" alt="Bg" src="bg.png" />*/}
                    {/*<ClipImg className="clip-img" />*/}
                    <div className="order-title">
                      <div className="text-wrapper-2">{ orderInfo.title }</div>
                      <div className="text-wrapper-3">{ orderInfo.cafeNm }</div>
                      {/*<img className="line" alt="Line" src="line-2.svg" />*/}
                      {/*<OrderOpenImg className="order-open-img" />*/}
                    </div>
                    <div className="order-time">
                      <div className="text-wrapper-4">마감시간</div>
                      <div className="text-wrapper-5">{ orderInfo.endDt }</div>
                      {/*<img className="img" alt="Line" src="line-3.svg" />*/}
                    </div>
                    <div className="order-total">
                      <div className="group">
                        <div className="group-2">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-6">{ orderInfo.orderDrinkCount } 잔</div>
                            <div className="text-wrapper-7">주문된 음료</div>
                          </div>
                          <div className="text-wrapper-8">총 { orderInfo.orderTagerDrinkCount } 잔</div>
                        </div>
                        <div className="group-3">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-6">{ orderInfo.orderUserCount } 명</div>
                            <div className="text-wrapper-7">주문한 인원</div>
                          </div>
                          <div className="text-wrapper-8">총 { orderInfo.orderTagerUserCount }명</div>
                        </div>
                      </div>
                    </div>
                    <div className="order-list-sum">
                      <div className="text-wrapper-9">주문 취합 리스트</div>
                      {
                        menuList.map((item, index)=>{
                          const className = 'item-'+(index+1)
                          return (
                            <div key={item.menuId} className={className} >
                              <div className="text-wrapper-10">{item.menuNm}</div>
                              <div className="text-wrapper-11">{item.count}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer">
                <div className="large-btn-b">
                  <div className="div-wrapper">
                    <div className="text-wrapper-15">주문하기</div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetail