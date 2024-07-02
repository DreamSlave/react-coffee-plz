import { useNavigate } from 'react-router-dom'
import "@/assets/temp-entrance/entrance.css";
import hurryImg from '@/assets/temp-entrance/entrance1.png'
import logoImg from '@/assets/temp-entrance/entrance2.png'
import { initParty } from '@/store/party';
import { useDispatch } from 'react-redux';


const Entrance = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  dispatch(initParty())


  return (
    <div className="element main_pd">
      
      <div className="cffe-plz">
        <img className="hurry" alt="Hurry" src={hurryImg} />
      </div>
      <div className="main_tit">커피주문<br/>올려주세요</div>

      <div className="main_img">
        <img className="" alt="Element" src={logoImg} />
      </div>

      <div className="large-btn" onClick={() => navigate('/party/select')}>
          파티생성하기
      </div>

    </div>
  );
};

export default Entrance
