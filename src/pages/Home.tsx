import AboutSection from "../components/AboutSection";
import GuestBook from "../components/GuestBook";
import ProjectSection from "../components/ProjectSection";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="mt-10">
          <AboutSection />
        </div>
        <div className="mt-10">
          <ProjectSection />
        </div>
        <div className="mt-10">
          <GuestBook />
        </div>
      </div>
    </div>
  );
};

export default Home;