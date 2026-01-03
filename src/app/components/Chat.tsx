"use client";

import { useState } from "react";
import { MessageProps } from "@/app/interfaces/interfaces";
import Message from "./Message";
import { fixedQuestions } from "@/utils/utils";

export default function Chat() {
  //test messages
  const [messages, setMessages] = useState<MessageProps[]>([

  ]);

  const [input, setInput] = useState<string>("");

  //functions
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: MessageProps = {
      id: Math.ceil(Math.random() * 1000).toString(),
      text: input,
      role: "user",
    };

    // Добавляем пользовательское сообщение в состояние
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput(""); // Очищаем поле ввода

    // Преобразуем сообщения в формат GPTMessage
    // Убираем system message - он может вызывать шаблонные ответы
    const gptMessages = updatedMessages.map((message) => ({
      role: message.role as "user" | "assistant",
      text: message.text,
    }));

    console.log(
      "Sending messages to API:",
      JSON.stringify(gptMessages, null, 2)
    );

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: gptMessages }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке сообщения");
      }

      const data = await response.json();
      const assistantMessage: MessageProps = {
        id: Math.ceil(Math.random() * 1000).toString(),
        text: data.response || "Ошибка: нет ответа от модели",
        role: "assistant",
      };

      // Добавляем ответ ассистента в состояние
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Ошибка:", error);
      const errorMessage: MessageProps = {
        id: Math.ceil(Math.random() * 1000).toString(),
        text: "Произошла ошибка при отправке сообщения. Попробуйте еще раз.",
        role: "assistant",
      };
      setMessages([...updatedMessages, errorMessage]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      {/* <Message
        id={Math.ceil(Math.random() * 1000).toString()}
        key={Math.ceil(Math.random() * 1000).toString()}
        text={fixedQuestions}
        role="assistant"
      /> */}
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleInputChange} />
        <button type="submit">Отправить</button>
      </form>
    </>

  );
}
