// import { OpenAI } from "openai";

import { GPTMessage } from "@/app/interfaces/interfaces";

export const callGPT = async (messages: GPTMessage[]) => {
  const apiKey = process.env.YANDEX_CLOUD_API_KEY;
  const folderId = process.env.YANDEX_CLOUD_FOLDER;

  if (!apiKey || !folderId) {
    throw new Error("API key or folder ID is not set");
  }

  try {
    const response = await fetch(
      "https://llm.api.cloud.yandex.net/foundationModels/v1/completion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Api-Key ${apiKey}`,
        },
        body: JSON.stringify({
          modelUri: `gpt://${folderId}/yandexgpt/rc`,
          messages: messages,
          completionOptions: {
            stream: false,
            temperature: 0.7,
            maxTokens: 1000,
          },
        }),
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", response.status, errorText);
      throw new Error(
        `Failed to fetch response: ${response.status} ${errorText}`
      );
    }
    const data = await response.json();
    console.log("API Response:", JSON.stringify(data, null, 2));
    const text =
      data?.result?.alternatives?.[0]?.message?.text ??
      "Ошибка: нет ответа от модели";

    return text;
    // return data.response.text;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(error as string);
  }
};
