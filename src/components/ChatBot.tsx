import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'options' | 'recommendation';
  options?: string[];
}

interface QuickAction {
  text: string;
  response: string;
  followUp?: string[];
}

const quickActions: QuickAction[] = [
  {
    text: 'Что такое телесная терапия?',
    response: 'Телесная терапия - это подход, который работает с взаимосвязью между телом и эмоциями. Мы помогаем освободиться от физических зажимов и эмоциональных блоков через дыхание, движение и осознанность.',
    followUp: ['Как проходят сессии?', 'Кому подходит?', 'Записаться на консультацию']
  },
  {
    text: 'Сколько стоит сессия?',
    response: 'Индивидуальная сессия (90 минут) стоит 5000₽, групповое занятие (2 часа) - 2500₽. Первая консультация может быть проведена со скидкой 20%.',
    followUp: ['Записаться на сессию', 'Узнать о пакетах', 'Групповые занятия']
  },
  {
    text: 'Как проходят сессии?',
    response: 'Сессия начинается с беседы о ваших потребностях. Затем мы работаем с дыханием, мягкими движениями и телесной осознанностью. Все проходит в безопасной и поддерживающей атмосфере.',
    followUp: ['Что взять с собой?', 'Противопоказания', 'Записаться на сессию']
  },
  {
    text: 'Есть ли противопоказания?',
    response: 'Телесная терапия мягкая и безопасная. Однако при серьезных психических расстройствах, острых состояниях или беременности рекомендуется предварительная консультация с врачом.',
    followUp: ['Записаться на консультацию', 'Индивидуальный подход', 'Задать вопрос специалисту']
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Привет! Я помогу ответить на ваши вопросы о телесной терапии. Что вас интересует?',
      sender: 'bot',
      timestamp: new Date(),
      type: 'options',
      options: quickActions.map(action => action.text)
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addMessage = (text: string, sender: 'user' | 'bot', type: 'text' | 'options' | 'recommendation' = 'text', options?: string[]) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      sender,
      timestamp: new Date(),
      type,
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickAction = (actionText: string) => {
    addMessage(actionText, 'user');
    
    setTimeout(() => {
      const action = quickActions.find(a => a.text === actionText);
      if (action) {
        addMessage(action.response, 'bot');
        
        if (action.followUp) {
          setTimeout(() => {
            addMessage('Что ещё вас интересует?', 'bot', 'options', action.followUp);
          }, 1000);
        }
      } else {
        addMessage('Спасибо за ваш вопрос! Для более подробной консультации рекомендую записаться на индивидуальную сессию.', 'bot', 'recommendation');
      }
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, 'user');
    setInputValue('');
    
    setTimeout(() => {
      if (inputValue.toLowerCase().includes('запис')) {
        addMessage('Отлично! Для записи на сессию вы можете воспользоваться формой на сайте или связаться со мной напрямую по телефону +7 (999) 123-45-67.', 'bot', 'recommendation');
      } else if (inputValue.toLowerCase().includes('цена') || inputValue.toLowerCase().includes('стоимость')) {
        handleQuickAction('Сколько стоит сессия?');
      } else if (inputValue.toLowerCase().includes('групп')) {
        addMessage('Групповые занятия проходят каждые выходные. В группе максимум 8 человек, что создает интимную и безопасную атмосферу для работы.', 'bot', 'options', ['Записаться в группу', 'Расписание групп', 'Индивидуальная сессия']);
      } else {
        addMessage('Благодарю за вопрос! Для получения персональной консультации рекомендую записаться на индивидуальную сессию, где мы сможем обсудить ваши потребности детально.', 'bot', 'options', ['Записаться на сессию', 'Узнать больше', 'Связаться с терапевтом']);
      }
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="MessageCircle" className="h-6 w-6" />
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-12 -left-20 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
            >
              Задать вопрос
              <div className="absolute bottom-0 right-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary transform translate-y-full"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: 20, y: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            exit={{ scale: 0, opacity: 0, x: 20, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="bg-card border-border shadow-xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Heart" className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-montserrat">Помощник</CardTitle>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-muted-foreground">онлайн</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0"
                  >
                    <Icon name="X" className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <ScrollArea className="h-80 px-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${message.sender === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary'} rounded-lg px-3 py-2`}
                        >
                          <p className="text-sm">{message.text}</p>
                          {message.type === 'options' && message.options && (
                            <div className="mt-3 space-y-2">
                              {message.options.map((option, index) => (
                                <Button
                                  key={index}
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleQuickAction(option)}
                                  className="w-full justify-start text-left h-auto p-2 text-xs bg-background/50 hover:bg-background/80"
                                >
                                  {option}
                                </Button>
                              ))}
                            </div>
                          )}
                          {message.type === 'recommendation' && (
                            <div className="mt-2">
                              <Badge variant="secondary" className="text-xs">
                                Рекомендация
                              </Badge>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-border">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Задайте ваш вопрос..."
                      className="flex-1 text-sm"
                    />
                    <Button 
                      size="sm" 
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="px-3"
                    >
                      <Icon name="Send" className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Для персональной консультации рекомендуем записаться на сессию
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;