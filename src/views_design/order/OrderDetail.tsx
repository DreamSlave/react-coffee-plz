// import './App.css'
// import "./scss/style.scss"
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

  useEffect(() => {
    const orderInfoData = getOrderInfo()
    setOrderInfo(orderInfoData)
    setMenuList(orderInfoData.orderMenuInfoList)
  }, []);

  return (
    <>
      <div id='order' className="element">
            <div className="main_tit">
              커피주문현황
            </div>

            <div className="order-list-area">
                {/* <img className="bg" alt="Bg" src="bg.png" />
                <ClipImg className="clip-img" /> */}

                <div className="order-title">
                  <div className="text">
                    <div className="title">{ orderInfo.title }</div>
                    <div className="cafenm point">{ orderInfo.cafeNm }</div>
                  </div>
                  <div className="image">이미지</div>
                  {/*<OrderOpenImg className="order-open-img" />*/}
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
                  <div className="">주문 취합 리스트</div>
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
            
            <footer id="footer">
              <div className="large-btn-b">
                <div className="div-wrapper">
                  <div className="text-wrapper-15">주문하기</div>
                </div>
              </div>
            </footer>
          
      </div>
    </>
  )
}

export default OrderDetail