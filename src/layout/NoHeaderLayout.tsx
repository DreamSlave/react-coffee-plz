import { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function HeaderLayout({ children }: { children: ReactNode}) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {

      // const handleBackButton = (event: PopStateEvent) => {
        if(location.pathname.startsWith('/party/confirm')) {
          navigate(`/entrance`, {replace: true})
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



  return (
    <div>
      {children}
    </div>
  );
}

export default HeaderLayout;