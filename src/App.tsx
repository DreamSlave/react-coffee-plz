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
                  
                </Routes>
              </HeaderLayout>
            } 
          ></Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
