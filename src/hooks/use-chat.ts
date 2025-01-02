import { useState } from 'react';
import { ChatMessage, ChatResponse } from '@/types/chat';
import { INITIAL_MESSAGE, CHAT_RESPONSES } from '@/lib/constants/chat';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [userInput, setUserInput] = useState('');

  const addMessage = (message: Omit<ChatMessage, 'id'>) => {
    setMessages((prev) => [
      ...prev,
      { ...message, id: Date.now().toString() },
    ]);
  };

  const handleChoiceSelect = (choice: string) => {
    addMessage({ message: choice, isUser: true });

    setTimeout(() => {
      const response = CHAT_RESPONSES[choice as keyof typeof CHAT_RESPONSES] || {
        message: 'Please describe how we can help you:',
        choices: [],
      } as ChatResponse;
      
      addMessage({
        message: response.message as string,
        choices: response.choices,
      });
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage({ message: userInput, isUser: true });
    setUserInput('');

    setTimeout(() => {
      addMessage({
        message: 'Thank you for your message. Our team will get back to you shortly.',
      });
    }, 500);
  };

  return {
    messages,
    userInput,
    setUserInput,
    handleChoiceSelect,
    handleSubmit,
  };
}
