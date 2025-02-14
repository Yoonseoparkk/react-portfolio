import { useNavigate } from "react-router-dom";
import BoardList from "../../components/BoardList";
import { BoardItem } from "../../types/board";
import "../../styles/Board.css";

interface BoardProps {
  items: BoardItem[];
  onDelete: (id: number) => void;
}

const Board = ({ items, onDelete }: BoardProps) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="my-4">방명록</h1>
      <BoardList items={items} onDelete={onDelete} />
      <button className="btn-write" onClick={() => navigate("/board/new")}>
        작성하기
      </button>
    </div>
  );
};

export default Board;