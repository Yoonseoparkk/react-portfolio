import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/GuestBook.css";
import { fetchMessages, postMessage } from "../api";
import { Message } from "../types/guestbook";

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // 📌 1️⃣ 백엔드에서 메시지 목록 불러오기
  useEffect(() => {
    fetchMessages()
      .then(setMessages)
      .catch((error) => console.error("메시지 불러오기 실패:", error));
  }, []);

  // 📌 2️⃣ 메시지 추가 & 서버로 전송
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    try {
      const newMessage = await postMessage(name, content);
      setMessages([newMessage, ...messages]); // 최신 메시지 맨 위로
      setName("");
      setContent("");
    } catch (error) {
      console.error("메시지 추가 실패:", error);
    }
  };

  return (
    <motion.section
      ref={ref}
      className="guestbook-container"
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="guestbook-title">GuestBook</h2>

      <form className="guestbook-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="메시지를 남겨주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">메시지 남기기</button>
      </form>

      <div className="guestbook-messages">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            className="guestbook-message"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="message-header">
              <strong>{msg.name}</strong>
              <span className="message-date">{msg.date}</span>
            </div>
            <p className="message-content">{msg.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}