import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux";
import { RootState } from "@/store";

function HeaderLayout({ children }: { children: ReactNode}) {
  const userInfo = useSelector((state: RootState) => state.order);

  const location = useLocation();
  const navigate = useNavigate();
  const isHiddenBackbtn = location.pathname.includes("/party/select") || location.pathname.includes("/order/member");

  const onClickBack = () => {
    navigate(-1);
  };

  const onClickClose = () => {
    let goRouterPath = ''
    switch (location.pathname){
      case "/party/select":
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
        { !isHiddenBackbtn ? <img onClick={onClickBack} className="back_ic" src="/src/assets/img/icon_back.png" /> : ''}
        <img onClick={onClickClose} className="x_ic" src="/src/assets/img/icon_x.png"/>
      </div>
      {children}
    </div>
  );
}

export default HeaderLayout;