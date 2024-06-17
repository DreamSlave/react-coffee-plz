import { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux";
import { RootState } from "@/store";
import backIcon from "@/assets/img/icon_back.png"
import xIcon from "@/assets/img/icon_x.png"
import { useGlobalUI } from '@/contexts/GlobalUIContext'; // useGlobalUI 훅의 경로


function HeaderLayout({ children }: { children: ReactNode}) {
  const { requestConfirm } = useGlobalUI()

  const location = useLocation();
  const navigate = useNavigate();
  const isHiddenBackbtn = location.pathname.includes("/party/select") || location.pathname.includes("/order/member");


  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div id="header">
        { !isHiddenBackbtn ? <img onClick={onClickBack} className="back_ic" src={backIcon} /> : ''}
        <img className="x_ic" src={xIcon}
          onClick={() => requestConfirm("Are you sure?", () => console.log("Confirmed!"), () => console.log("Cancelled!"))}/>
      </div>
      {children}
    </div>
  );
}

export default HeaderLayout;