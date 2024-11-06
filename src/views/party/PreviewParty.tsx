// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/all.css'
import {useState} from "react";
import { useSelector } from 'react-redux';
import '../../assets/css/all.css'
import '../../assets/css/style.scss'
import { RootState } from '@/store';
import { useNavigate } from 'react-router-dom';
import clipImg from '@/assets/img/clip_img.png'
import iconHurry from '@/assets/img/icon_hurry.png'
import ApiUtil from "@/api/api.util.ts";
import ApiConfig from "@/api/api.config.ts";
import { useGlobalUI } from '@/contexts/GlobalUIContext'; // useGlobalUI 훅의 경로
import EasterEgg from "@/views/order/EasterEgg.tsx";



function PreviewParty() {
  const partyInfo = useSelector((state: RootState) => state.party);
  const { showLoading, hideLoading } = useGlobalUI();

  const navigate  = useNavigate();



  const onClickPreviewParty = async function(){

    if(!isShowEasterEgg()){
      const params = {
        userList : partyInfo.memberList.map(item => item.userId),
        partyName : partyInfo.partyName,
        cafeId : partyInfo.cafeId,
        endDate : partyInfo.endDate,
        endTime : partyInfo.endTime
      }
      showLoading()
      const result = await ApiUtil.put(`${ApiConfig.defaultDomain}/party/save`, params)
        .then(response => response.json())
        .then(json => {
          const resultData = json.data
          return resultData
        })
        .catch((error: any) => {
          console.error('[/order/save] Error occurred ::: ', error);
        })
        .finally(() => {
          hideLoading();
        })

      // 특정 partyId인 경우 이스터에그 처리
      if(!!result.partyId && String(result.partyId) === '157') {
        setShowEasterEggPopup(true);
      } else {
        navigate(`/party/confirm/${result.partyId}`)
      }
    }

  }

  const isShowEasterEgg = () => {
    const now = new Date();
    const koreaTime = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // 한국 시간으로 변환 (UTC+9)
    const day = koreaTime.getUTCDay();
    const hours = koreaTime.getUTCHours();
    const minutes = koreaTime.getUTCMinutes();

    const easterEggTimes = [
      { day: 1, hours: 8, minutes: 30 },
      { day: 2, hours: 13, minutes: 16 },
      { day: 3, hours: 10, minutes: 10 },
      { day: 4, hours: 14, minutes: 44 },
    ];

    const isEasterEggTime = easterEggTimes.some(
      time => time.day === day && time.hours === hours && time.minutes === minutes
    );

    if (isEasterEggTime) {
      setShowEasterEggPopup(true);
      return true;
    } else {
      return false;
    }
  }

  const formatDate = (dateString : string) => {
    const year = dateString.substring(0, 4)
    const month = dateString.substring(4, 6)
    const day = dateString.substring(6, 8)

    return `${year}/${month}/${day}`;
  };

  const formatTime = (timeString : string) => {
    const hours = timeString.substring(0, 2)
    const minutes = timeString.substring(2, 4)

    return `${hours}:${minutes}`;
  };

  const [showEasterEggPopup, setShowEasterEggPopup] = useState<boolean>(false);

  const onClickEasterEggReset = () => {
    setShowEasterEggPopup(false)
  }


  return (
    <>
    <EasterEgg
        isOpen={showEasterEggPopup}
        onClose={onClickEasterEggReset}
        isForSpecific={false}
    ></EasterEgg>
    <div id='party' className="element pbd50">
        <h1>
          생성된 파티를<br/><span className="point">확인</span>하세요.
        </h1>

        <div className="order-list-area mgt30">
            <div className="clipimg">
              <img alt="clip" src={clipImg} />
            </div>
            <div className="order-title">
              <div className="text">
                <div className="title">{partyInfo.partyName}</div>
                <div className="cafenm point">{partyInfo.cafeName}</div>
              </div>
              <div className="image">
                <img alt="hurry" src={iconHurry} />
              </div>
            </div>
            <div className="order-time">
              <span className="mgr5"><b>마감시간</b></span> {formatDate(partyInfo.endDate.replace(/[^0-9]/g, ""))} {formatTime(partyInfo.endTime.replace(/[^0-9]/g, ""))}
            </div>

            <div className="order-list-detail">
              <div className="title"><b>파티원 <span className="point">{partyInfo.memberList.length}</span>명</b></div>
              <div className="list">
                <ul>
                {partyInfo.memberList.map((item, index) =>
                  <li key={index+1}>{index+1}. {item.name} {item.rank}({item.team})</li>
                )}
                </ul>
              </div>
            </div>
        </div>

        <footer id="footer" className="bg_white">
          <div className="large-btn" onClick={onClickPreviewParty}>
              파티생성
          </div>
        </footer>

      </div>
    </>

  )
}

export default PreviewParty
