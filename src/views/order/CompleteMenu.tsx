import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

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
      <div className="person-info bg_sub point">
        {orderer.name} {orderer.rank}({orderer.team})
      </div>
      <div className="person-info bg_sub point">
        {menuNm}
      </div>
      <div className='btn-area'>
        <ul>
          <li>
            <div className="large-btn" onClick={goOrderDetail}>
              확인
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompleteMenu
