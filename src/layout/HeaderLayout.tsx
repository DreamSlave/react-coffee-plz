import { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux";
import { RootState } from "@/store";
import backIcon from "@/assets/img/icon_back.png"
import xIcon from "@/assets/img/icon_x.png"
import { useGlobalUI } from '@/contexts/GlobalUIContext'; // useGlobalUI 훅의 경로

function HeaderLayout({ children }: { children: ReactNode}) {
  const { requestConfirm, closeConfirm } = useGlobalUI()
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHiddenBackbtn = location.pathname.includes("/party/select") || location.pathname.includes("/order/member");
  const userInfo = useSelector((state: RootState) => state.order);

  
  // 브라우저 back 버튼 감지
  //type1
  useEffect(() => {
    const handleBackButton = () => {
      // const handleBackButton = (event: PopStateEvent) => {
        if(location.pathname.startsWith('/order/complete')) {
          navigate(`/order/${userInfo.partyNo}`, {replace: true})
        } else {
          navigate(-1)
        }
      }
      
      window.addEventListener('popstate', handleBackButton)
      return () => {
        window.removeEventListener('popstate', handleBackButton)
      }
      
    }, [location, navigate])
    //type2(react-router-dom v6 에서는 불가)
    /* useEffect(() => {
      const unlisten = navigate.listen(({action, location}) => {
        if(action === 'POP' && location.pathname.startsWith('/order/complete')) {
          navigate(`/order/${userInfo.partyNo}`, {replace: true})
        }
      })
  
      return () => {
        unlisten()
      }
    }, [navigate]) */
    
    const onClickBack = () => {
    if(location.pathname.startsWith('/order/complete')) {
      navigate(`/order/${userInfo.partyNo}`, {replace: true})
    } else {
      navigate(-1)
    }
  };

  const cancelConfirm = () => {
    closeConfirm()
  }

  const doConfirm = () => {
    let goRouterPath = ''

    const pathname = location.pathname

    if(pathname.startsWith("/party/select") || pathname.startsWith("/party/save") || pathname.startsWith("/party/preview")) {
      goRouterPath = "/entrance"
    } else if(pathname.startsWith("/order/member") || pathname.startsWith("/order/menu") || pathname.startsWith("/order/complete")) {
      goRouterPath = `/order/${userInfo.partyNo}`
    }

    navigate(goRouterPath);
    closeConfirm()
  }

  return (
    <div>
      <div id="header">
        { !isHiddenBackbtn ? <img onClick={onClickBack} className="back_ic" src={backIcon} /> : ''}
        <img className="x_ic" src={xIcon}
          onClick={() => requestConfirm("진행중인 내용이 모두 사라집니다!<br>종료하시겠습니까?", doConfirm, cancelConfirm)}/>
      </div>
      {children}
    </div>
  );
}

export default HeaderLayout;