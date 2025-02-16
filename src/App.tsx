import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Board from "./pages/board/Board";
import BoardFormPage from "./pages/board/BoardFormPage";
import { BoardItem } from "./types/board";
import "./App.css";
import "./styles/Home.css"

const App = () => {
  const [items, setItems] = useState<BoardItem[]>([]);
  const [idCounter, setIdCounter] = useState(1);

  const addItem = (item: Omit<BoardItem, "id">) => {
    setItems([...items, { id: idCounter, ...item }]);
    setIdCounter(idCounter + 1);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              Yoonseo Park
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/board">-</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board items={items} onDelete={deleteItem} />} />
            <Route path="/board/new" element={<BoardFormPage onAddItem={addItem} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;