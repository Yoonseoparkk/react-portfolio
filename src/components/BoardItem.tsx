import { BoardItem } from "../types/board";

interface BoardItemProps {
  item: BoardItem;
  onDelete: (id: number) => void; // onDelete 추가
}

const BoardItemComponent = ({ item, onDelete }: BoardItemProps) => {
  return (
    <div className="border p-3 rounded mb-2">
      <h5>{item.title}</h5>
      <p>{item.content}</p>
      <button className="btn btn-danger" onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
};

export default BoardItemComponent;
