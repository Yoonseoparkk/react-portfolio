import ProjectSection from "../components/ProjectSection";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="my-4">Yoonseo Park</h1>
        <p> Welcome to My Place 😊</p>
        <div className="mt-10">
          <ProjectSection />
        </div>
      </div>
    </div>
  );
};

export default Home;