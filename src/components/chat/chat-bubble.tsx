import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatBubbleProps {
  message: string;
  choices?: string[];
  onChoiceSelect?: (choice: string) => void;
  isUser?: boolean;
}

export function ChatBubble({ message, choices, onChoiceSelect, isUser }: ChatBubbleProps) {
  return (
    <div className={cn("flex flex-col gap-2", isUser && "items-end")}>
      <div className={cn(
        "p-4 rounded-lg max-w-[280px]",
        isUser ? "bg-[#58552D] text-white" : "bg-[#F9F9F0]"
      )}>
        <p className={cn(
          "text-sm",
          !isUser && "text-[#58552D]"
        )}>{message}</p>
      </div>
      {choices && choices.length > 0 && (
        <div className="flex flex-col gap-2">
          {choices.map((choice, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-[#58552D] justify-start"
              onClick={() => onChoiceSelect?.(choice)}
            >
              {choice}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
