import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/GuestBook.css";

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      name,
      content,
      date: new Date().toLocaleString(),
    };

    setMessages([newMessage, ...messages]); // 최신 메시지 순
    setName("");
    setContent("");
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