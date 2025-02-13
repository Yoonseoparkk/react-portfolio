import { useState } from "react";
import BoardForm from "../components/BoardForm";
import BoardList from "../components/BoardList";
import { BoardItem } from "../types/board";

const Board = () => {
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
    <div className="container">
      <h1 className="my-4">방명록</h1>
      <BoardForm onSubmit={addItem} />
      <BoardList items={items} onDelete={deleteItem} />
    </div>
  );
};

export default Board;