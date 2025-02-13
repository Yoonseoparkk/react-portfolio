import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import "./App.css";
import "./styles/Home.css"

const App = () => {
  return (
    <Router>
      <div>
        {/* 네비게이션 바 */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              Yoonseo Park
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/board">방명록</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* 페이지 라우트 설정 */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;