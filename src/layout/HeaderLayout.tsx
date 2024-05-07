import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux";
import { RootState } from "@/store";
import backIcon from "@/assets/img/icon_back.png"
import xIcon from "@/assets/img/icon_x.png"

function HeaderLayout({ children }: { children: ReactNode}) {
  const userInfo = useSelector((state: RootState) => state.order);

  const location = useLocation();
  const navigate = useNavigate();
  const isHiddenBackbtn = location.pathname.includes("/party/select") || location.pathname.includes("/order/member");

  const onClickBack = () => {
    navigate(-1);
  };

  const onClickClose = () => {
    const confirmResult = window.confirm('진행 중인 내용이 모두 사라집니다!\n종료하시겠습니까?')
    if(!confirmResult) {
      return
    }

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
  };

  return (
    <div>
      <div id="header">
        { !isHiddenBackbtn ? <img onClick={onClickBack} className="back_ic" src={backIcon} /> : ''}
        <img onClick={onClickClose} className="x_ic" src={xIcon} />
      </div>
      {children}
    </div>
  );
}

export default HeaderLayout;