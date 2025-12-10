export interface MessageProps {
  id: string;
  text: string;
  role: 'user' | 'assistant';
}

export interface GPTMessage {
  role: "system" | "user" | "assistant";
  text: string;
}