import { z } from 'zod';

export const ChatMessageSchema = z.object({
  id: z.string(),
  message: z.string(),
  choices: z.array(z.string()).optional(),
  isUser: z.boolean().optional(),
});

export const ChatResponseSchema = z.object({
  message: z.string(),
  choices: z.array(z.string()),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
export type ChatResponse = z.infer<typeof ChatResponseSchema>;

// export interface ChatMessage {
//   id: string;
//   message: string;
//   choices?: string[];
//   isUser?: boolean;
// }

// export interface ChatResponse {
//   message: string;
//   choices: string[];
// }