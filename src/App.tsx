import './App.css'
import "./assets/css/style.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeaderLayout from './layout/HeaderLayout';
import NoHeaderLayout from './layout/NoHeaderLayout'
import Entrance from './views/Entrance';

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
                {/* 다른 페이지 라우트도 여기에 추가할 수 있음 */}
              </Routes>
            </NoHeaderLayout>
          } />
      </Routes>
    </Router>
  )
}

export default App
