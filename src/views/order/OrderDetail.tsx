// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/orderdetail.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {setOrderPartyNo} from "@/store/order";
import {useDispatch} from "react-redux";
import OrderPopup from "@/views/order/OrderPopup";
import iconClose from "@/assets/img/icon_close.png"
import iconOpen from "@/assets/img/icon_open.png"
import clipImg from "@/assets/img/clip_img.png"

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
    endDt: '2024/12/23 20:01',
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const [isStoreOpen, setIsStoreOpen] = useState<boolean>(true)

  const { partyNo } = useParams();
  const onClickGoOrder = ()=>{
    dispatch(setOrderPartyNo( partyNo || ''))
    navigate(`/order/member`)
  }


  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [selectedMenuId, setSelectedMenuId] = useState<string>('');

  const closePopup = () => {
    setPopupOpen(false);
  }

  useEffect(() => {
    const orderInfoData = getOrderInfo()
    setOrderInfo(orderInfoData)
    setMenuList(orderInfoData.orderMenuInfoList)

    const endTime: Date = getDateFromYYYYMMDDHHMI(orderInfoData.endDt.replace(/[^0-9]/g, ""));
    const nowTime: Date = new Date();
    const afterTime: number = endTime.getTime() - nowTime.getTime();

    const oneDay: number = 1000 * 60 * 60 * 24
    if(afterTime > oneDay){
      setTimeout(() => {
        history.go(0);
      }, oneDay);
    }else {
      setTimeout(() => {
        closeTime();
      }, afterTime);
    }
  }, []);
  function closeTime() {setIsStoreOpen(false)}

  function getDateFromYYYYMMDDHHMI(stringYYYYMMDDHHMI: string): Date {
    const yyyy = parseInt(stringYYYYMMDDHHMI.substring(0, 4), 10);
    const mm = parseInt(stringYYYYMMDDHHMI.substring(4, 6), 10) - 1;
    const dd = parseInt(stringYYYYMMDDHHMI.substring(6, 8), 10);
    const hh = parseInt(stringYYYYMMDDHHMI.substring(8, 10), 10);
    const mi = parseInt(stringYYYYMMDDHHMI.substring(10, 12), 10);
    return new Date(yyyy, mm, dd, hh, mi, 0);
  }
  return (
    <>
      <OrderPopup isOpen={isPopupOpen} menuId={selectedMenuId} onClose={closePopup} ></OrderPopup>
      <div id='order' className="element bg_pink">
        <div className="main_tit">
          커피주문현황
        </div>

        <div className="order-list-area">
          <div className="clipimg">
            <img src={clipImg} />
          </div>
          <div className="order-title">
            <div className="text">
              <div className="title">{ orderInfo.title }</div>
              <div className="cafenm point">{ orderInfo.cafeNm }</div>
            </div>
            {isStoreOpen ? <img className="image" src={iconOpen} /> : <img className="image"  src={iconClose}/>}
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
                const openPopup = () => {
                  setPopupOpen(!isPopupOpen);
                  setSelectedMenuId(item.menuId)
                };
                return (
                  <div key={item.menuId}>
                    <div className="menunm">{item.menuNm}</div>
                    <div onClick={openPopup} className="count">{item.count}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <footer id="footer" className="bg_pink">
          <div className="">
            { isStoreOpen ? <div onClick={onClickGoOrder} className="large-btn bg_black">주문하기</div> : <div className="large-btn bg_gray">주문불가</div>}
          </div>
        </footer>

      </div>
    </>
  )
}

export default OrderDetail