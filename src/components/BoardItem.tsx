import { BoardItem } from "../types/board";
import "../styles/Board.css"

interface BoardItemProps {
  item: BoardItem;
  onDelete: (id: number) => void;
}

const BoardItemComponent = ({ item, onDelete }: BoardItemProps) => {
  return (
    <div className="board-container">
      <h5>{item.title}</h5>
      <p>{item.content}</p>
      <button className="btn-delete" onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
};

export default BoardItemComponent;
