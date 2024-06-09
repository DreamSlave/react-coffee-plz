import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from "@/store";
import { useSelector} from "react-redux";

function ConfirmForClose({ onClose }) {
  const userInfo = useSelector((state: RootState) => state.order);

  const location = useLocation();
  const navigate = useNavigate();

  const doConfirm = () => {

    let goRouterPath = ''
    switch (location.pathname){
      case "/party/select":
      case "/party/save":
      case "/party/preview":
        goRouterPath = "/entrance"
        break
      case "/order/member":
      case "/order/menu":
        goRouterPath = `/order/${userInfo.partyNo}`
        break
    }
    navigate(goRouterPath);
    onClose()
  }

  return (
    <div id="popup">
      <div className="popup-area">
        <div className="alert_txt">
          진행중인 내용이 모두 사라집니다!<br></br>
          종료하시겠습니까?
        </div>
        <div className='btn-area'>
          <ul>
            <li>
              <div className="large-btn bg_sub point" onClick={doConfirm}>
                돌아가기
              </div>
            </li>
            <li>
              <div className="large-btn" onClick={onClose}>
                확인
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConfirmForClose;
