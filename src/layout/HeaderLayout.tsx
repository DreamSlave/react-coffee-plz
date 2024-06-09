import { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux";
import { RootState } from "@/store";
import backIcon from "@/assets/img/icon_back.png"
import xIcon from "@/assets/img/icon_x.png"
import ConfirmForClose from '@/component/ConfirmForClose'


function HeaderLayout({ children }: { children: ReactNode}) {
  const userInfo = useSelector((state: RootState) => state.order);

  const location = useLocation();
  const navigate = useNavigate();
  const isHiddenBackbtn = location.pathname.includes("/party/select") || location.pathname.includes("/order/member");
  const [isConfirmOccur, setIsConfirmOccur] = useState(false)

  const onClickBack = () => {
    navigate(-1);
  };

  const onClickClose = () => {
    handleConfirmOccur()
  };

  const handleConfirmOccur = () => {
    setIsConfirmOccur(!isConfirmOccur)
  }

  return (
    <div>
      <div id="header">
        { !isHiddenBackbtn ? <img onClick={onClickBack} className="back_ic" src={backIcon} /> : ''}
        <img onClick={onClickClose} className="x_ic" src={xIcon} />
        {isConfirmOccur && <ConfirmForClose onClose={handleConfirmOccur}></ConfirmForClose>}
      </div>
      {children}
    </div>
  );
}

export default HeaderLayout;