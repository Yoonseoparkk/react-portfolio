import { BoardItem } from "../types/board";
import BoardItemComponent from "./BoardItem";

interface BoardListProps {
  items: BoardItem[];
  onDelete: (id: number) => void;
}

const BoardList = ({ items, onDelete }: BoardListProps) => {
  return (
    <div>
      {items.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : (
        items.map((item) => <BoardItemComponent key={item.id} item={item} onDelete={onDelete} />)
      )}
    </div>
  );
};

export default BoardList;