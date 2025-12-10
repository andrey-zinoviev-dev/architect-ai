import { NextResponse, NextRequest } from "next/server";
import { callGPT } from "@/app/services/openaiService";
import { GPTMessage } from "@/app/interfaces/interfaces";

export async function POST(request: NextRequest) {
  const { messages }: { messages: GPTMessage[] } = await request.json();
  const response = await callGPT(messages);
  return NextResponse.json({ response });
}