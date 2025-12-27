import { MessageProps } from "@/app/interfaces/interfaces";

export default function Message(props: MessageProps) {
  return <div className={`message ${props.role === "user" ? "user" : "assistant"}`}>{props.text}</div>
}