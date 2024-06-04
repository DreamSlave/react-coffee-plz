import '@/App.css'
import "@/assets/css/style.scss"
import '@/assets_design/css/all.css'
import '@/assets_design/css/style.scss'
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'
import notfoundImg from '@/assets/img/notfound_img.png'

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

function App() {
  return (
    <Router basename="/react-coffee-plz">
      <Suspense fallback={<div>Wait a moment...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/entrance" />} />
          
          {/* Main routes */}
          <Route path="/entrance" element={<NoHeaderLayout><Entrance /></NoHeaderLayout>} />

          <Route path="/order/menu"                             element={<HeaderLayout><SelectMenu /></HeaderLayout>} />
          <Route path="/order/complete/:partyNo/:encodedMenuNm" element={<HeaderLayout><CompleteMenu /></HeaderLayout>} />
          <Route path="/order/member"                           element={<HeaderLayout><OrderMember /></HeaderLayout>} />
          <Route path="/order/:partyNo"                         element={<NoHeaderLayout><OrderDetail /></NoHeaderLayout>} />

          <Route path="/party/select"   element={<HeaderLayout><SelectPartyMember /></HeaderLayout>} />
          <Route path="/party/save"     element={<HeaderLayout><SaveParty /></HeaderLayout>} />
          <Route path="/party/preview"  element={<HeaderLayout><PreviewParty /></HeaderLayout>} />
          <Route path="/party/confirm/:partyId"  element={<NoHeaderLayout><ConfirmParty /></NoHeaderLayout>} />

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
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
