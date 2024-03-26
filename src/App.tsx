import '@/App.css'
import "@/assets/css/style.scss"
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'

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

function App() {
  return (
    <Router basename="/react-coffee-plz">
      <Suspense fallback={<div>Wait a moment...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/entrance" />} />

        <Route
          path="/*"
          element={
            <NoHeaderLayout>
              <Routes>
                <Route path="/entrance" element={<Entrance />} />
              </Routes>
            </NoHeaderLayout>
          }/>
        <Route
          path="/order/*"
          element={
            <Routes>
              <Route
                path="/menu"
                element={<HeaderLayout><SelectMenu /></HeaderLayout>}
              />
              <Route
                path="/complete/:partyNo/:encodedMenuNm"
                element={<HeaderLayout><CompleteMenu /></HeaderLayout>}
              />
              <Route
                path="/member"
                element={<HeaderLayout><OrderMember /></HeaderLayout>}
              />
              <Route
                path="/:partyNo"
                element={<NoHeaderLayout><OrderDetail /></NoHeaderLayout>}
              />
            </Routes>
          }
        />
          <Route
            path="/party/*"
            element={
              <Routes>
                <Route path="/select" element={<HeaderLayout><SelectPartyMember /></HeaderLayout>} />
                <Route path="/save" element={<HeaderLayout><SaveParty /></HeaderLayout>} />
                <Route path="/preview" element={<HeaderLayout><PreviewParty /></HeaderLayout>} />
                <Route path="/confirm" element={<NoHeaderLayout><ConfirmParty /></NoHeaderLayout>} />
              </Routes>
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
                  <Route path="/:partyNo" element={<DesignOrderDetail />} />
                  {/*popup은 url이 없지만 화면 확인용으로 임시로 만들어둠*/}
                  <Route path="/:partyNo/popup" element={<DesignOrderPopup />} />
                  <Route path="/:partyNo/member" element={<DesignOrderMember />} />
                  <Route path="/:partyNo/confirm" element={<DesignSelectMenuPopup/>} />
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
