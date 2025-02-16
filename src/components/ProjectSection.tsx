import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import "../styles/ProjectSection.css";

const projects = [
  {
    title: "쿠잉 (COOING)",
    description: "인플루언서 성장 전략을 제시하는<br />LLM 기반 개인 맞춤형 컨설팅 서비스",
    link: "https://mycooing.com",
    image: "/images/cooing.png",
  },
  {
    title: "이프 (IF)",
    description: "AI 이성과의 소개팅 경험을 제공하는<br />LLM 기반 MBTI 소개팅 시뮬레이션 게임",
    link: "https://chat-app.com",
    image: "/images/if.png",
  },
  {
    title: "잇슈 (It, Shoe)",
    description: "러닝 유저를 위한 러닝화 쇼핑<br />및 커뮤니티 플랫폼 개발 프로젝트",
    link: "https://ecommerce-example.com",
    image: "/images/itshoe.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectSection() {
  return (
    <section className="project-section-container">
      <motion.h2
        className="project-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.05 }}>
            <Card className="card">
              <img src={project.image} alt={project.title} className="card-img" />
              <CardContent className="card-content">
                <h3>{project.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-view-more">프로젝트 둘러보기</Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}