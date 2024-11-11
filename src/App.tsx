import '@/App.css'
import "@/assets/css/style.scss"
import '@/assets/css/all.css'
// import '@/assets/css/style.scss'
import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'
import notfoundImg from '@/assets/img/notfound_img.png'
import loadingGif from '@/assets/img/loading.gif' 

const Entrance = lazy(() => import('./views/Entrance'))
const SelectMenu = lazy(() => import('./views/order/SelectMenu'))
const CompleteMenu = lazy(() => import('./views/order/CompleteMenu'))
const SelectPartyMember = lazy(() => import('./views/party/SelectPartyMember'))
const SaveParty = lazy(() => import('./views/party/SaveParty'))
const OrderDetail = lazy(() => import('./views/order/OrderDetail'))
const OrderMember = lazy(() => import('./views/order/OrderMember'))
const PreviewParty = lazy(() => import('./views/party/PreviewParty'))
const ConfirmParty = lazy(() => import('./views/party/ConfirmParty'))

const DesignEntrance = lazy(() => import('./views_design/Entrance'))
const DesignSelectMenu = lazy(() => import('./views_design/order/SelectMenu'))
const DesignSelectPartyMember = lazy(() => import('./views_design/party/SelectPartyMember'))
const DesignSaveParty = lazy(() => import('./views_design/party/SaveParty'))
const DesignOrderDetail = lazy(() => import('./views_design/order/OrderDetail'))
const DesignOrderPopup = lazy(() => import('./views_design/order/OrderPopup'))
const DesignOrderMember = lazy(() => import('./views_design/order/OrderMember'))
const DesignSelectMenuPopup = lazy(() => import('./views_design/order/SelectMenuPopup'))
const DesignPreviewParty = lazy(() => import('./views_design/party/PreviewParty'))
const DesignConfirmParty = lazy(() => import('./views_design/party/ConfirmParty'))

const NotFoundPage = () => {
  return (
    <div className='notfound'>
      <img src={notfoundImg} />
      <div className='notfound_box'>
        <h1>제공되지 않는<br/><span className='point'>URL</span>입니다.</h1>
        <p className='mgt10'>다시 시도해주세요!</p>
      </div>
    </div>
  )
}
const NotFoundOrderPage = () => {
  const navigate = useNavigate();
  return (
      <div className='notfound'>
          <img src={notfoundImg}/>
          <div className='notfound_box'>
              <h1>존재하지 않는<br/><span className='point'>주문화면</span>입니다.</h1>
          </div>
          <div className="confirm-area mgt30">
              <div className="go_order" onClick={() => navigate(`/entrance`)}>
                  메인으로
              </div>
          </div>
      </div>
  )
}

function App() {

    const userAgent = navigator.userAgent.toLowerCase()
    const isChongmuMobileApp = userAgent.includes('chongmutimeapp')

    return (
        <Router basename="/react-coffee-plz">
            <Suspense fallback={<div className='cfplz_loading'><img src={loadingGif}/></div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/entrance" />} />
          
          {/* Main routes */}
          
          <Route path="/entrance" element={ isChongmuMobileApp ? <HeaderLayout><Entrance /></HeaderLayout> : <NoHeaderLayout><Entrance /></NoHeaderLayout> } />

          <Route path="/order/menu"                             element={<HeaderLayout><SelectMenu /></HeaderLayout>} />
          <Route path="/order/complete/:partyNo/:encodedMenuNm/:encodedName/:encodedTeam/:encodedRank" element={<HeaderLayout><CompleteMenu /></HeaderLayout>} />
          <Route path="/order/member"                           element={<HeaderLayout><OrderMember /></HeaderLayout>} />
          <Route path="/order/:partyNo"                         element={<NoHeaderLayout><OrderDetail /></NoHeaderLayout>} />

          <Route path="/party/select"   element={<HeaderLayout><SelectPartyMember /></HeaderLayout>} />
          <Route path="/party/save"     element={<HeaderLayout><SaveParty /></HeaderLayout>} />
          <Route path="/party/preview"  element={<HeaderLayout><PreviewParty /></HeaderLayout>} />
          <Route path="/party/confirm/:partyId"  element={ isChongmuMobileApp ? <HeaderLayout><ConfirmParty /></HeaderLayout> : <NoHeaderLayout><ConfirmParty /></NoHeaderLayout> } />

          {/* Design routes */}
          <Route path="/design/entrance"                element={<NoHeaderLayout><DesignEntrance /></NoHeaderLayout>} />
          <Route path="/design/order/menu"              element={<NoHeaderLayout><DesignSelectMenu /></NoHeaderLayout>} />
          <Route path="/design/order/:partyNo"          element={<NoHeaderLayout><DesignOrderDetail /></NoHeaderLayout>} />
          <Route path="/design/order/:partyNo/popup"    element={<NoHeaderLayout><DesignOrderPopup /></NoHeaderLayout>} />
          <Route path="/design/order/:partyNo/member"   element={<NoHeaderLayout><DesignOrderMember /></NoHeaderLayout>} />
          <Route path="/design/order/:partyNo/confirm"  element={<NoHeaderLayout><DesignSelectMenuPopup /></NoHeaderLayout>} />
          <Route path="/design/party/select"            element={<NoHeaderLayout><DesignSelectPartyMember /></NoHeaderLayout>} />
          <Route path="/design/party/save"              element={<NoHeaderLayout><DesignSaveParty /></NoHeaderLayout>} />
          <Route path="/design/party/preview"           element={<NoHeaderLayout><DesignPreviewParty /></NoHeaderLayout>} />
          <Route path="/design/party/confirm"           element={<NoHeaderLayout><DesignConfirmParty /></NoHeaderLayout>} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/notfound/order"           element={<NotFoundOrderPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
