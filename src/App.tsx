import '@/App.css'
import "@/assets/css/style.scss"
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'

const Entrance = lazy(() => import('./views/Entrance'))
const SelectMenu = lazy(() => import('./views/order/SelectMenu'))
const SelectPartyMember = lazy(() => import('./views/party/SelectPartyMember'))
const SaveParty = lazy(() => import('./views/party/SaveParty'))
const OrderDetail = lazy(() => import('./views/order/OrderDetail'))
const OrderPopup = lazy(() => import('./views/order/OrderPopup'))
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
const DesignPreviewParty = lazy(() => import('./views_design/party/PreviewParty'))
const DesignConfirmParty = lazy(() => import('./views_design/party/ConfirmParty'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Wait a moment...</div>}>
      <Routes>
        <Route
          path="/*"
          element={
            <NoHeaderLayout>
              <Routes>
                <Route path="/entrance" element={<Entrance />} />
              </Routes>
            </NoHeaderLayout>
          } />
          <Route
            path="/order/*"
            element={
              <HeaderLayout>
                <Routes>
                  <Route path="/menu" element={<SelectMenu/>}></Route>
                  <Route path="/detail" element={<OrderDetail />} />
                  <Route path="/detail/popup" element={<OrderPopup />} />
                  <Route path="/detail/member" element={<OrderMember />} />
                </Routes>
              </HeaderLayout>
            }
          ></Route>
          <Route
            path="/party/*"
            element={
              <HeaderLayout>
                <Routes>
                  <Route path="/select" element={<SelectPartyMember />} />
                  <Route path="/save" element={<SaveParty />} />
                  <Route path="/preview" element={<PreviewParty />} />
                  <Route path="/confirm" element={<ConfirmParty />} />
                </Routes>
              </HeaderLayout>
            } 
          ></Route>
        </Routes>
        <Routes>
          //퍼블리싱 화면
        <Route
          path="design/*"
          element={
            <NoHeaderLayout>
              <Routes>
                <Route path="/entrance" element={<DesignEntrance />} />
              </Routes>
            </NoHeaderLayout>
          } />
          <Route
            path="design/order/*"
            element={
              <NoHeaderLayout>
                <Routes>
                  <Route path="/menu" element={<DesignSelectMenu/>}></Route>
                  <Route path="/detail" element={<DesignOrderDetail />} />
                  <Route path="/detail/popup" element={<DesignOrderPopup />} />
                  <Route path="/detail/member" element={<DesignOrderMember />} />
                </Routes>
              </NoHeaderLayout>
            }
          ></Route>
          <Route
            path="design/party/*"
            element={
              <NoHeaderLayout>
                <Routes>
                  <Route path="/select" element={<DesignSelectPartyMember />} />
                  <Route path="/save" element={<DesignSaveParty />} />
                  <Route path="/preview" element={<DesignPreviewParty />} />
                  <Route path="/confirm" element={<DesignConfirmParty />} />
                </Routes>
              </NoHeaderLayout>
            } 
          ></Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
