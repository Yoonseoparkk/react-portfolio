import { useNavigate } from "react-router-dom";
import BoardForm from "../../components/BoardForm";
import { BoardItem } from "../../types/board";

interface BoardFormPageProps {
  onAddItem: (item: Omit<BoardItem, "id">) => void;
}

const BoardFormPage = ({ onAddItem }: BoardFormPageProps) => {
  const navigate = useNavigate();

  const handleSubmit = (item: Omit<BoardItem, "id">) => {
    onAddItem(item);
    navigate("/board"); // 작성 후 목록 페이지로 이동
  };

  return (
    <div className="container">
      <h1 className="my-4">게시물 작성</h1>
      <BoardForm onSubmit={handleSubmit} />
    </div>
  );
};

export default BoardFormPage;