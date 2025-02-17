import { Message } from './types/guestbook';

const API_BASE_URL = "http://localhost:8080"
  
  // 📌 1️⃣ 모든 메시지 가져오기
  export const fetchMessages = async (): Promise<Message[]> => {
    const response = await fetch(`${API_BASE_URL}/api/guestbook`);
    if (!response.ok) throw new Error("데이터 불러오기 실패");
    return response.json();
  };
  
  // 📌 2️⃣ 새로운 메시지 추가하기
  export const postMessage = async (name: string, content: string): Promise<Message> => {
    const response = await fetch(`${API_BASE_URL}/api/guestbook`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    });
  
    if (!response.ok) throw new Error("메시지 추가 실패");
    return response.json();
  };