'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChatHeader } from './chat-header';
import { ChatMessages } from './chat-messages';
import { ChatInput } from './chat-input';
import { useChat } from '@/hooks/use-chat';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, userInput, setUserInput, handleChoiceSelect, handleSubmit } = useChat();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        className={cn(
          'h-12 w-12 rounded-full shadow-lg',
          isOpen && 'bg-[#58552D]'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] bg-white rounded-lg shadow-xl border border-gray-200">
          <ChatHeader />
          <ChatMessages messages={messages} onChoiceSelect={handleChoiceSelect} />
          <ChatInput
            value={userInput}
            onChange={setUserInput}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
