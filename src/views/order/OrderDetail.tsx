// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/orderdetail.css'
import '../../assets/css/all.css'
import '../../assets/css/style.scss'
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {setOrderPartyNo} from "@/store/order";
import {useDispatch} from "react-redux";
import OrderPopup from "@/views/order/OrderPopup";
import iconClose from "@/assets/img/icon_close.png"
import iconOpen from "@/assets/img/icon_open.png"
import clipImg from "@/assets/img/clip_img.png"
import ApiUtil from "@/api/api.util.ts";
import ApiConfig from "@/api/api.config.ts";
import {useGlobalUI} from "@/contexts/GlobalUIContext";
import EasterEgg from "@/views/order/EasterEgg.tsx";

interface orderInfo {
  partyName : string;
  cafeNm : string;
  endDt : string;
  // 대상자 30명 중 응답자 18명, 그 안에서 미주문자 3명이라고 할때
  orderUserCount : number;        // 주문한 인원 EX: 18명
  orderTargetUserCount : number;  // 전체 주문(응답을 해야하는)해야하는 사람의 수 EX: 30명
  orderDrinkCount : number;       // 주문된 음료 수 EX: 15잔
  orderTargetDrinkCount : number; // 주문해야하는 음료의 수 EX: 27장
  orderMenuInfoList : orderMenuInfo[];
}

// interface

interface orderMenuInfo{
  menuNm: string;
  orderCount: number;
  menuId: string;
  ordererList: orderUserInfo[];
}

interface orderUserInfo {
  name : string;
  userId: number;
  team: string;
  department: string;
  rank: string;
  telNo: string;
}

const getOrderInfo = async (partyNo: string): Promise<{
  orderTargetDrinkCount: number;
  orderMenuInfoList: orderMenuInfo[];
  orderDrinkCount: number;
  partyName: string;
  endDt: string;
  cafeNm: string;
  orderTargetUserCount: number;
  orderUserCount: number
}> => {
  try {
    const response = await ApiUtil.get(`${ApiConfig.defaultDomain}/order/status/${partyNo}`);
    const ressult = (await response)
    if(ressult.data) return ressult.data
    else {
      return {
        orderTargetDrinkCount: 0,
        orderMenuInfoList: [],
        orderDrinkCount: 0,
        partyName: '',
        endDt: '',
        cafeNm: '',
        orderTargetUserCount: 0,
        orderUserCount: 0,
      }
    }
  } catch (error) {
    console.error(error);
    throw error; // 오류를 기록한 후 다시 throw
  }
}

function OrderDetail() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuList, setMenuList] = useState<orderMenuInfo[]>([]);
  const [orderInfo, setOrderInfo] = useState<orderInfo>({
    cafeNm: "",
    endDt: "",
    orderMenuInfoList: [],
    orderDrinkCount: 0,
    orderTargetDrinkCount: 0,
    orderTargetUserCount: 0,
    orderUserCount: 0,
    partyName: ""
  });
  const [isStoreOpen, setIsStoreOpen] = useState<boolean>(true)

  const { partyNo } = useParams();
  const onClickGoOrder = ()=>{
    dispatch(setOrderPartyNo( partyNo || ''))
    navigate(`/order/member`)
  }



  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [selectedMenuInfo, setSelectedMenuInfo] = useState<orderMenuInfo>({
    menuId: "", menuNm: "", orderCount: 0, ordererList: []
  });

  const closePopup = () => {
    setPopupOpen(false);
  }

  useEffect(() => {
    async function fetchAndSetUser() {
      if (partyNo != null) {
        const orderInfoData = await getOrderInfo(partyNo);
        setOrderInfo(orderInfoData)
        setMenuList(orderInfoData.orderMenuInfoList)

        //real
        if(orderInfoData.endDt === '') {
          navigate(`/notfound/order`)
        }
        const endTime: Date = getDateFromYYYYMMDDHHMI(orderInfoData.endDt.replace(/[^0-9]/g, ""));
        const nowTime: Date = new Date();
        const afterTime: number = endTime.getTime() - nowTime.getTime();

        const oneDay: number = 1000 * 60 * 60 * 24
        if(endTime < nowTime){
          closeTime();
        }if(afterTime > oneDay){
          setTimeout(() => {
            history.go(0);
          }, oneDay);
        }else {
          setTimeout(() => {
            closeTime();
          }, afterTime);
        }
      }
    }
    fetchAndSetUser()
  }, [partyNo]);
  // test
  // function closeTime() {setIsStoreOpen(true)}
  //real
  function closeTime() {setIsStoreOpen(false)}

  function getDateFromYYYYMMDDHHMI(stringYYYYMMDDHHMI: string): Date {
    const yyyy = parseInt(stringYYYYMMDDHHMI.substring(0, 4), 10);
    const mm = parseInt(stringYYYYMMDDHHMI.substring(4, 6), 10) - 1;
    const dd = parseInt(stringYYYYMMDDHHMI.substring(6, 8), 10);
    const hh = parseInt(stringYYYYMMDDHHMI.substring(8, 10), 10);
    const mi = parseInt(stringYYYYMMDDHHMI.substring(10, 12), 10);
    return new Date(yyyy, mm, dd, hh, mi, 0);
  }

  const { addAlert } = useGlobalUI();

  const [clickEasterEggCount, setClickEasterEggCount] = useState<number>(0);
  const [showEasterEggPopup, setShowEasterEggPopup] = useState<boolean>(false);

  const onClickEasterEggCounter = () => {
    const newCount = clickEasterEggCount + 1;
    setClickEasterEggCount(newCount);

    if (newCount === 10) {
      setShowEasterEggPopup(true);
    }
  };

  const onClickEasterEggReset = () => {
    setShowEasterEggPopup(false)
  }

  return (
    <>
      <OrderPopup isOpen={isPopupOpen}
                  onClose={closePopup}
                  menuNm={selectedMenuInfo.menuNm}
                  count={selectedMenuInfo.orderCount}
                  ordererList={selectedMenuInfo.ordererList}></OrderPopup>
      <EasterEgg
          isOpen={showEasterEggPopup}
          onClose={onClickEasterEggReset}
          isForSpecific={false}
      ></EasterEgg>
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
              <div className="title">{ orderInfo.partyName }</div>
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
              <div className="all gray">총 { orderInfo.orderTargetUserCount }명</div>
            </div>
            <div className="detail">
              <div className="title">주문된 음료</div>
              <div className="count">{ orderInfo.orderDrinkCount } 잔</div>
              <div className="all gray">총 { orderInfo.orderTargetDrinkCount } 잔</div>
            </div>
          </div>

          <div className="order-list-sum">
            <div className="title"><b>주문 취합 리스트</b></div>
            {/* 주문내역이 없을 때 */}
            {/* <div className="empty">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z" clip-rule="evenodd"></path>
              </svg>
              아직 주문내역이 없습니다.
            </div> */}
            {
              menuList.sort((a, b) => {
                // menuId '99'(괜찮습니다)인 경우 최상단으로
                if (a.menuId === '99') return -1;
                if (b.menuId === '99') return 1;
                // 이름으로 정렬
                return a.menuNm.localeCompare(b.menuNm);
              }).map((item)=>{
                const openPopup = () => {
                  setPopupOpen(!isPopupOpen);
                  setSelectedMenuInfo(item)
                };
                return (
                  <div key={item.menuId}>
                    <div className="menunm">{item.menuNm}</div>
                    <div onClick={openPopup} className="count">{item.orderCount}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <footer id="footer" className="bg_pink">
          <div className="">
            {isStoreOpen ? <div onClick={onClickGoOrder} className="large-btn bg_black">주문하기</div> :
                <div className="large-btn bg_gray" onClick={onClickEasterEggCounter}>주문불가</div>}
          </div>
        </footer>

      </div>
    </>
  )
}

export default OrderDetail