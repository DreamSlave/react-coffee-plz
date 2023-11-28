import './App.css'
import "./assets/css/style.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'
import Entrance from './views/Entrance';
import SelectPartyMember from './views/party/SelectPartyMember';

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
      </Routes>
      <Routes>
        <Route
          path="/party/*"
          element={
            <HeaderLayout>
              <Routes>
                <Route path="/select" element={<SelectPartyMember />} />
              </Routes>
            </HeaderLayout>
          } />
      </Routes>
    </Router>
  )
}

export default App
