import { Message } from './types/guestbook';

const API_BASE_URL = "http://localhost:8080"
  
  // 메시지 가져오기
  export const fetchMessages = async (): Promise<Message[]> => {
    const response = await fetch(`${API_BASE_URL}/guestbook/list`);
    if (!response.ok) throw new Error("데이터 불러오기 실패");
    return response.json();
  };
  
  // 새로운 메시지 추가하기
  export const postMessage = async (name: string, content: string): Promise<Message> => {
    const response = await fetch(`${API_BASE_URL}/guestbook/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    });
  
    if (!response.ok) throw new Error("메시지 추가 실패");
    return response.json();
  };