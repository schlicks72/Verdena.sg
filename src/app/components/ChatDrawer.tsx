import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, RotateCcw } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const API_URL = import.meta.env.PROD ? '/api/chat' : 'http://localhost:3000/api/chat';

export default function ChatDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem('verdena-chat');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Persist messages to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('verdena-chat', JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when drawer opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsStreaming(true);

    // Add empty assistant message to stream into
    const assistantMessage: Message = { role: 'assistant', content: '' };
    setMessages([...newMessages, assistantMessage]);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;

              try {
                const parsed = JSON.parse(data);
                if (parsed.text) {
                  accumulated += parsed.text;
                  setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                      role: 'assistant',
                      content: accumulated,
                    };
                    return updated;
                  });
                }
                if (parsed.error) {
                  accumulated = parsed.error;
                  setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                      role: 'assistant',
                      content: accumulated,
                    };
                    return updated;
                  });
                }
              } catch {
                // skip malformed chunks
              }
            }
          }
        }
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: "Sorry — something went wrong connecting. Try again in a moment.",
        };
        return updated;
      });
    }

    setIsStreaming(false);
  }, [input, messages, isStreaming]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    sessionStorage.removeItem('verdena-chat');
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl w-[92vw] max-w-2xl h-[85vh] max-h-[750px] z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#53354a] text-white px-6 py-5 flex justify-between items-center flex-shrink-0">
            <div>
              <Dialog.Title className="text-xl font-bold">
                Talk to Caspar
              </Dialog.Title>
              <Dialog.Description className="text-xs opacity-75 mt-1">
                AI trained on my background, voice, and thinking
              </Dialog.Description>
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  title="New conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <Dialog.Close asChild>
                <button className="hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
          >
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center max-w-sm">
                  <div className="bg-[#53354a]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👋</span>
                  </div>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">
                    Ask me about my work, experience, projects, or whether I can help with something you're working on. I'll give you a straight answer.
                  </p>
                </div>
              </div>
            )}

            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#53354a] text-white rounded-br-md'
                        : 'bg-[#f0efed] text-[#1a1a1a] rounded-bl-md'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.content.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').replace(/^---$/gm, '').replace(/^[#]+ /gm, '').replace(/^[\-\*] /gm, '')}</div>
                    {msg.role === 'assistant' && msg.content === '' && isStreaming && (
                      <div className="flex gap-1 py-1">
                        <span className="w-2 h-2 bg-[#53354a]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-[#53354a]/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-[#53354a]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input */}
          <div className="border-t border-[#e0e0e0] px-6 py-4 flex-shrink-0">
            <div className="flex gap-3 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                rows={1}
                className="flex-1 resize-none rounded-xl border border-[#e0e0e0] px-4 py-3 text-sm focus:outline-none focus:border-[#53354a] transition-colors bg-[#fafafa] min-h-[44px] max-h-[120px]"
                disabled={isStreaming}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isStreaming}
                className="bg-[#53354a] text-white w-11 h-11 rounded-xl flex items-center justify-center hover:bg-[#6b4460] transition-colors disabled:opacity-40 disabled:hover:bg-[#53354a] flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
