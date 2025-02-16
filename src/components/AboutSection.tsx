import { motion } from "framer-motion";
import "../styles/AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <motion.h2
        className="about-section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.img
          src='/images/avatar-yoonseopark.png'
          alt="Profile"
          className="profile-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="about-section-description">
            안녕하세요!<br />
            사용자 경험을 고려한 UI/UX 중심의 <strong>프론트엔드 개발자 박윤서</strong>입니다.<br />
            React, TypeScript, TailwindCSS를 활용해 보기 편안하며<br />
            성능 좋은 웹 애플리케이션을 만드는 것을 좋아합니다 😊
          </p>

          <motion.div
            className="tech-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion"].map((tech) => (
              <span key={tech} className="tech-item">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}