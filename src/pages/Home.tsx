import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="my-4">Yoonseo Park</h1>
        <p> Welcome to My Place 😊</p>
        <Link to="/board">
          <button className="btn-board">방명록 작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;