import './App.css'
import "./assets/css/style.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'
import Entrance from './views/Entrance';
import SelectMenu from './views/order/SelectMenu';
import SelectPartyMember from './views/party/SelectPartyMember';
import OrderDetail from "@/views/order/OrderDetail";
import OrderPopup from "@/views/order/OrderPopup";

function App() {
  return (
    <Router>
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
                  <Route path="/test" element={<OrderDetail />} />
                  <Route path="/test2" element={<OrderPopup />} />
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
    </Router>
  )
}

export default App
