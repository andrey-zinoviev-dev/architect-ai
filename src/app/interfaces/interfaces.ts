import { BuildingProjectModel } from "@/generated/prisma/models/BuildingProject";

export type BuildingProjectInterface = BuildingProjectModel;

export type BuildingProjectCreateInterface = Omit<BuildingProjectInterface, 'id' | 'createdAt' | 'updatedAt'>;

export interface MessageProps {
  id: string;
  text: string;
  role: 'user' | 'assistant';
}

export interface GPTMessage {
  role: "system" | "user" | "assistant";
  text: string;
}

