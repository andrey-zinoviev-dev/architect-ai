import { MessageProps } from "@/app/interfaces/interfaces";

export default function Message(props: MessageProps) {
  return <div>{props.text}</div>
}