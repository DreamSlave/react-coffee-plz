import '@/App.css'
import "@/assets/css/style.scss"
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'

const Entrance = lazy(() => import('./views/Entrance'))
const SelectMenu = lazy(() => import('./views/order/SelectMenu'))
const SelectPartyMember = lazy(() => import('./views/party/SelectPartyMember'))

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
