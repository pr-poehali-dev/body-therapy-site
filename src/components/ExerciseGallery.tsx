import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Exercise {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Легкий' | 'Средний' | 'Продвинутый';
  category: 'breathing' | 'movement' | 'mindfulness';
  image: string;
  instructions: string[];
  benefits: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Диафрагмальное дыхание',
    description: 'Основа телесной терапии - глубокое дыхание животом для снятия напряжения',
    duration: '5-10 минут',
    difficulty: 'Легкий',
    category: 'breathing',
    image: 'img/2cf4bb6b-25b5-497a-a49e-897ae316af98.jpg',
    instructions: [
      'Лягте на спину, одну руку положите на грудь, другую на живот',
      'Медленно вдыхайте через нос, чувствуя как поднимается живот',
      'Выдыхайте через рот, позволяя животу опуститься',
      'Повторяйте ритмично в течение 5-10 минут'
    ],
    benefits: [
      'Снижение уровня стресса',
      'Улучшение концентрации',
      'Нормализация давления',
      'Расслабление мышц'
    ]
  },
  {
    id: 2,
    title: 'Мягкие движения',
    description: 'Плавные движения тела для освобождения эмоциональных блоков',
    duration: '15-20 минут',
    difficulty: 'Средний',
    category: 'movement',
    image: 'img/f01d0e39-b04d-47d1-89e3-938d16fc377a.jpg',
    instructions: [
      'Встаньте прямо, ноги на ширине плеч',
      'Начните с медленных круговых движений головой',
      'Переходите к плечам, рукам, корпусу',
      'Двигайтесь интуитивно, следуя потребностям тела'
    ],
    benefits: [
      'Освобождение от зажимов',
      'Улучшение подвижности',
      'Эмоциональная разрядка',
      'Повышение энергии'
    ]
  },
  {
    id: 3,
    title: 'Телесная осознанность',
    description: 'Практика внимательного наблюдения за ощущениями в теле',
    duration: '10-15 минут',
    difficulty: 'Легкий',
    category: 'mindfulness',
    image: 'img/f1d7f26a-ec72-4fc3-a662-ca0211c24c9e.jpg',
    instructions: [
      'Сядьте удобно, закройте глаза',
      'Направьте внимание на макушку головы',
      'Медленно сканируйте все тело сверху вниз',
      'Замечайте ощущения без попыток их изменить'
    ],
    benefits: [
      'Развитие телесной чувствительности',
      'Снижение тревожности',
      'Улучшение сна',
      'Укрепление связи с телом'
    ]
  }
];

const categories = {
  breathing: { name: 'Дыхание', icon: 'Wind', color: 'bg-blue-500' },
  movement: { name: 'Движение', icon: 'Waves', color: 'bg-green-500' },
  mindfulness: { name: 'Осознанность', icon: 'Sparkles', color: 'bg-purple-500' }
};

const ExerciseGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const filteredExercises = selectedCategory === 'all' 
    ? exercises 
    : exercises.filter(exercise => exercise.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легкий': return 'bg-green-100 text-green-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Продвинутый': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-4xl font-montserrat font-bold text-foreground mb-4">
          Интерактивная галерея упражнений
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Изучите базовые техники телесной терапии, которые можно выполнять самостоятельно
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('all')}
          className="font-montserrat"
        >
          Все упражнения
        </Button>
        {Object.entries(categories).map(([key, category]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(key)}
            className="font-montserrat"
          >
            <Icon name={category.icon as any} className="mr-2 h-4 w-4" />
            {category.name}
          </Button>
        ))}
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredExercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border/40 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="relative">
                  <img 
                    src={exercise.image} 
                    alt={exercise.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={getDifficultyColor(exercise.difficulty)}>
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <div className={`${categories[exercise.category].color} w-8 h-8 rounded-full flex items-center justify-center`}>
                      <Icon 
                        name={categories[exercise.category].icon as any} 
                        className="h-4 w-4 text-white" 
                      />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="font-montserrat text-lg">{exercise.title}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" className="mr-2 h-4 w-4" />
                    {exercise.duration}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full font-montserrat"
                        onClick={() => setSelectedExercise(exercise)}
                      >
                        <Icon name="Play" className="mr-2 h-4 w-4" />
                        Начать упражнение
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="font-montserrat text-2xl">{exercise.title}</DialogTitle>
                        <DialogDescription className="text-base">{exercise.description}</DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <img 
                          src={exercise.image} 
                          alt={exercise.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-montserrat font-semibold text-lg mb-3">Инструкции</h4>
                            <ol className="space-y-2">
                              {exercise.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span className="text-sm">{instruction}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          
                          <div>
                            <h4 className="font-montserrat font-semibold text-lg mb-3">Польза</h4>
                            <ul className="space-y-2">
                              {exercise.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                  <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center space-x-4">
                            <Badge className={getDifficultyColor(exercise.difficulty)}>
                              {exercise.difficulty}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Icon name="Clock" className="mr-1 h-4 w-4" />
                              {exercise.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExerciseGallery;