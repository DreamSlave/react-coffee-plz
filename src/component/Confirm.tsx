// import { useLocation, useNavigate } from 'react-router-dom';
// import { RootState } from "@/store";
// import { useSelector} from "react-redux";
import parse from 'html-react-parser'

function Confirm({ message, onConfirm, onCancel }) {
  // const userInfo = useSelector((state: RootState) => state.order);

  // const location = useLocation();
  // const navigate = useNavigate();

  /* const doConfirm = () => {

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
    onCancel()
  } */

  return (
    <div id="popup">
      <div className="popup-area">
        <div className="alert_txt">
          {parse(message)}
        </div>
        <div className='btn-area'>
          <ul>
            <li>
              <div className="large-btn bg_sub point" onClick={onCancel}>
                돌아가기
              </div>
            </li>
            <li>
              <div className="large-btn" onClick={onConfirm}>
                확인
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
