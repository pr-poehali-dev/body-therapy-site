import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import AnimatedSection from '@/components/AnimatedSection';
import ExerciseGallery from '@/components/ExerciseGallery';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingType, setBookingType] = useState<'individual' | 'group'>('individual');

  const timeSlots = [
    '10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'
  ];

  const testimonials = [
    {
      name: 'Мария В.',
      text: 'Благодаря телесной терапии я научилась слышать свое тело и справляться со стрессом. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Андрей К.',
      text: 'Групповые занятия помогли мне раскрыться и найти внутреннюю гармонию. Атмосфера очень поддерживающая.',
      rating: 5
    },
    {
      name: 'Елена С.',
      text: 'Индивидуальные сессии дали потрясающий результат. Чувствую себя более уверенной и спокойной.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-montserrat font-bold text-primary">Телесная Терапия</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О методе</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#exercises" className="text-foreground hover:text-primary transition-colors">Упражнения</a>
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">Записаться</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 px-4 text-center bg-gradient-to-br from-soft-cream to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Flower" className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h2 className="text-5xl font-montserrat font-bold text-foreground mb-6 leading-tight">
              Обретите гармонию
              <br />
              <span className="text-primary">души и тела</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Телесная терапия — это путь к глубокому пониманию себя через работу с телесными ощущениями, 
              эмоциями и дыханием. Создайте безопасное пространство для исцеления и роста.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-3 rounded-full">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Записаться на сессию
              </Button>
              <Button variant="outline" size="lg" className="font-montserrat font-semibold px-8 py-3 rounded-full">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Узнать больше
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animation="slide-in-left">
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-montserrat font-bold text-foreground mb-4">
                Что такое телесная терапия?
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Телесно-ориентированная терапия работает с мудростью тела, помогая освободиться 
                от напряжений и блоков, восстановить естественный поток энергии.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border/40 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Wind" className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-montserrat">Дыхательные техники</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Глубокое дыхание помогает активировать естественные процессы самоисцеления 
                    и освободиться от эмоциональных блоков.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/40 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Waves" className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-montserrat">Работа с движением</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Мягкие движения и позы помогают телу выразить скрытые эмоции 
                    и восстановить естественную пластичность.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/40 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Sparkles" className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-montserrat">Осознанность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Развитие телесной осознанности позволяет лучше понимать свои потребности 
                    и создавать здоровые границы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection animation="slide-in-right">
        <section id="services" className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-montserrat font-bold text-foreground mb-4">
                Услуги
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Выберите формат работы, который лучше всего подходит именно вам
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-border/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat text-center">Индивидуальные сессии</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Персональная работа один на один
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Продолжительность: 90 минут</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Target" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Индивидуальный подход к вашим запросам</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Конфиденциальность и безопасность</span>
                  </div>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">5 000 ₽</div>
                    <Button className="w-full bg-primary hover:bg-primary/90 font-montserrat font-semibold">
                      Записаться на сессию
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Users" className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat text-center">Групповые занятия</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Работа в поддерживающей группе
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Продолжительность: 2 часа</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Heart" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Поддержка и энергия группы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Sparkles" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Максимум 8 участников</span>
                  </div>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-accent mb-2">2 500 ₽</div>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-montserrat font-semibold">
                      Присоединиться к группе
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Exercise Gallery Section */}
      <AnimatedSection animation="fade-in">
        <section id="exercises" className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <ExerciseGallery />
          </div>
        </section>
      </AnimatedSection>

      {/* Booking Section */}
      <AnimatedSection animation="scale-in">
        <section id="booking" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-montserrat font-bold text-foreground mb-4">
                Записаться на консультацию
              </h3>
              <p className="text-xl text-muted-foreground">
                Выберите удобное время для первой встречи
              </p>
            </div>
            
            <Card className="bg-card border-border/40 shadow-lg">
              <CardHeader>
                <div className="flex justify-center space-x-4 mb-6">
                  <Button
                    variant={bookingType === 'individual' ? 'default' : 'outline'}
                    onClick={() => setBookingType('individual')}
                    className="font-montserrat"
                  >
                    <Icon name="User" className="mr-2 h-4 w-4" />
                    Индивидуально
                  </Button>
                  <Button
                    variant={bookingType === 'group' ? 'default' : 'outline'}
                    onClick={() => setBookingType('group')}
                    className="font-montserrat"
                  >
                    <Icon name="Users" className="mr-2 h-4 w-4" />
                    В группе
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-montserrat font-semibold mb-4">Выберите дату</h4>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      locale={ru}
                      className="rounded-md border border-border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-montserrat font-semibold mb-4">Выберите время</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className="font-montserrat"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <Input placeholder="Введите ваше имя" className="border-border" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" className="border-border" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                        <Textarea 
                          placeholder="Расскажите о ваших потребностях или вопросах" 
                          className="border-border"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold">
                        {bookingType === 'individual' ? 'Индивидуальная сессия' : 'Групповое занятие'}
                      </p>
                      {selectedDate && selectedTime && (
                        <p className="text-muted-foreground">
                          {format(selectedDate, 'dd MMMM yyyy', { locale: ru })} в {selectedTime}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">
                        {bookingType === 'individual' ? '5 000' : '2 500'} ₽
                      </p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 font-montserrat font-semibold py-3"
                    disabled={!selectedDate || !selectedTime}
                  >
                    <Icon name="Calendar" className="mr-2 h-5 w-5" />
                    Подтвердить запись
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection animation="fade-in">
        <section id="testimonials" className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-montserrat font-bold text-foreground mb-4">
                Отзывы клиентов
              </h3>
              <p className="text-xl text-muted-foreground">
                Истории трансформации и исцеления
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border/40 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-5 w-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="font-montserrat text-lg">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection animation="slide-in-left">
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-montserrat font-bold text-foreground mb-4">
                Контакты
              </h3>
              <p className="text-xl text-muted-foreground">
                Свяжитесь со мной для консультации
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Phone" className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">Телефон</h4>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">Email</h4>
                  <p className="text-muted-foreground">therapy@example.com</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MapPin" className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, 12</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Heart" className="h-8 w-8 text-background" />
              <h2 className="text-2xl font-montserrat font-bold">Телесная Терапия</h2>
            </div>
            <p className="text-background/80 mb-6">
              Путь к гармонии души и тела через осознанность и присутствие
            </p>
            <Separator className="bg-background/20 my-6" />
            <p className="text-background/60">
              © 2024 Телесная Терапия. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;