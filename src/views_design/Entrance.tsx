import { useNavigate } from 'react-router-dom'
import "@/assets_design/temp-entrance/entrance.css";
import hurryImg from '@/assets/temp-entrance/entrance1.png'
import logoImg from '@/assets/temp-entrance/entrance2.png'

const Entrance = () => {
  const navigate = useNavigate()

  return (
    <div className="element main_pd">
      
      <div className="cffe-plz">
        <img className="hurry" alt="Hurry" src={hurryImg} />
      </div>
      <div className="main_tit">커피주문<br/>올려주세요</div>

      <div className="main_img">
        <img className="" alt="Element" src={logoImg} />
      </div>

      <div className="large-btn" onClick={() => navigate('/party/save')}>
          파티생성하기
      </div>

    </div>
  );
};

export default Entrance
