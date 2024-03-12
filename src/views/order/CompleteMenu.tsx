import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'

const CompleteMenu = () => {
  const orderer = {
    partyNo: useSelector((state: RootState) => state.order.partyNo),
    userId: useSelector((state: RootState) => state.order.userId),
    name: useSelector((state: RootState) => state.order.name),
    team: useSelector((state: RootState) => state.order.team),
    rank: useSelector((state: RootState) => state.order.rank),
  }
  const { encodedMenuNm } = useParams<{ encodedMenuNm: string }>()
  const [ menuNm, setMenuNm ] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    if(encodedMenuNm && encodedMenuNm !== '') {
      setMenuNm(decodeURIComponent(encodedMenuNm))
    }
  }, [encodedMenuNm])


  const goOrderDetail = () => {
    navigate('/order/test')
  }

  return (
    <div id="order" className="element">
      <h1 className="point">
        <div className="main_tit point mgb5">Wow!</div>
        주문이 완료되었습니다!
      </h1>
      <div className="order-complete_img">
        <img src="/src/assets/img/compelete_img.png" />
      </div>
      <div className="order-complete">
        <div className="person">
          {/* {orderer.name} {orderer.rank}({orderer.team}) */}
          정민재 프로(UX디자인팀)
        </div>
        <div className="menu point">
          {/* {menuNm} */}
          초코라떼 아이스
        </div>
      </div>

      <footer id="footer">
        <div className='btn-area bg_white'>
            <div className="large-btn bg_black" onClick={goOrderDetail}>
              주문현황 보러가기
            </div>
        </div>
      </footer>
    </div>
  );
};

export default CompleteMenu
