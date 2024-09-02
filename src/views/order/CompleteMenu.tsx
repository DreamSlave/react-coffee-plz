import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import '@/assets/css/all.css'
import '@/assets/css/style.scss'
import completeImg from '@/assets/img/compelete_img.png'

const CompleteMenu = () => {
  const { partyNo } = useParams<{ partyNo: string }>()
  const { encodedMenuNm } = useParams<{ encodedMenuNm: string }>()
  const { encodedName } = useParams<{ encodedName: string }>()
  const { encodedTeam } = useParams<{ encodedTeam: string }>()
  const { encodedRank } = useParams<{ encodedRank: string }>()
  const [ menuNm, setMenuNm ] = useState<string>('')
  const [ name, setName ] = useState<string>('')
  const [ team, setTeam ] = useState<string>('')
  const [ rank, setRank ] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    if(encodedMenuNm && encodedMenuNm !== '') {
      setMenuNm(decodeURIComponent(encodedMenuNm))
    }
    if(encodedName && encodedName !== '') {
      setName(decodeURIComponent(encodedName))
    }
    if(encodedTeam && encodedTeam !== '') {
      setTeam(decodeURIComponent(encodedTeam))
    }
    if(encodedRank && encodedRank !== '') {
      setRank(decodeURIComponent(encodedRank))
    }
  }, [encodedMenuNm, encodedName, encodedTeam, encodedRank])


  const goOrderDetail = () => {
    navigate(`/order/${partyNo}`)
  }

  return (
    <div id="order" className="element">
      <h1 className="point">
        <div className="main_tit point mgb5">Wow!</div>
        주문이 완료되었습니다!
      </h1>
      <div className="order-complete_img">
        <img src={completeImg} />
      </div>
      <div className="order-complete">
        <div className="person">
           {name} {rank}({team})
        </div>
        <div className="menu point">
           {menuNm}
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
