import { ChatBubble } from './chat-bubble';
import type { ChatMessage } from '@/types/chat';

interface ChatMessagesProps {
  messages: ChatMessage[];
  onChoiceSelect: (choice: string) => void;
}

export function ChatMessages({ messages, onChoiceSelect }: ChatMessagesProps) {
  return (
    <div className="p-4 h-[400px] overflow-y-auto space-y-4">
      {messages.map((msg) => (
        <ChatBubble
          key={msg.id}
          message={msg.message}
          choices={msg.choices}
          onChoiceSelect={onChoiceSelect}
          isUser={msg.isUser}
        />
      ))}
    </div>
  );
}
