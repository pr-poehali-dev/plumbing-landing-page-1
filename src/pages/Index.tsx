import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMobileMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      icon: 'Droplet',
      title: 'Устранение протечек',
      description: 'Быстрый поиск и устранение любых протечек воды'
    },
    {
      icon: 'Wrench',
      title: 'Замена труб',
      description: 'Замена старых труб на современные коммуникации'
    },
    {
      icon: 'Bath',
      title: 'Установка сантехники',
      description: 'Монтаж ванн, раковин, унитазов, смесителей'
    },
    {
      icon: 'Waves',
      title: 'Прочистка засоров',
      description: 'Устранение засоров любой сложности'
    },
    {
      icon: 'Thermometer',
      title: 'Монтаж отопления',
      description: 'Установка и обслуживание систем отопления'
    },
    {
      icon: 'Settings',
      title: 'Техобслуживание',
      description: 'Профилактика и ремонт сантехнического оборудования'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Опыт 10+ лет',
      description: 'Решаем задачи любой сложности'
    },
    {
      icon: 'Zap',
      title: 'Выезд за 1 час',
      description: 'Работаем круглосуточно'
    },
    {
      icon: 'Award',
      title: 'Гарантия 2 года',
      description: 'На все виды работ'
    },
    {
      icon: 'CheckCircle',
      title: 'Оригинальные запчасти',
      description: 'Только сертифицированные материалы'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Заявка',
      description: 'Оставьте заявку по телефону или через форму'
    },
    {
      number: '02',
      title: 'Выезд мастера',
      description: 'Приезжаем в течение 1 часа'
    },
    {
      number: '03',
      title: 'Ремонт',
      description: 'Выполняем работу быстро и качественно'
    },
    {
      number: '04',
      title: 'Оплата',
      description: 'Оплата после завершения работ'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Быстро устранили протечку в ванной. Мастер приехал через 40 минут, работу выполнил за час. Очень довольна!',
      rating: 5
    },
    {
      name: 'Дмитрий Сергеев',
      text: 'Заменили все трубы в квартире. Работали аккуратно, убрали за собой. Цена соответствует качеству.',
      rating: 5
    },
    {
      name: 'Ольга Иванова',
      text: 'Установили новую сантехнику под ключ. Профессиональный подход, все работает отлично. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" size={32} className="text-primary" />
            <span className="text-xl font-bold text-primary">СантехМастер</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#advantages" className="text-muted-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79001234567" className="text-lg font-semibold text-primary hover:text-accent transition-colors">
              +7 (900) 123-45-67
            </a>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Вызов мастера
            </Button>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={28} className="text-primary" />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={handleMobileMenuClick}
              >
                Услуги
              </a>
              <a 
                href="#advantages" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={handleMobileMenuClick}
              >
                Преимущества
              </a>
              <a 
                href="#testimonials" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={handleMobileMenuClick}
              >
                Отзывы
              </a>
              <a href="tel:+79001234567" className="text-lg font-semibold text-primary hover:text-accent transition-colors py-2">
                +7 (900) 123-45-67
              </a>
              <Button size="lg" className="bg-accent hover:bg-accent/90 w-full">
                Вызов мастера
              </Button>
            </div>
          </div>
        )}
      </header>

      <section className={`pt-32 pb-20 px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Срочный ремонт сантехники
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Выезд в течение 1 часа. Гарантия 2 года
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 h-auto">
            Заказать выезд мастера
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={40} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Оставьте заявку</h2>
          <p className="text-center text-white/80 mb-8">Мы свяжемся с вами в течение 5 минут</p>
          <Card className="bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите проблему" 
                    className="min-h-32 text-lg resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-lg h-14"
                >
                  Отправить заявку
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplets" size={28} className="text-accent" />
                <span className="text-xl font-bold">СантехМастер</span>
              </div>
              <p className="text-white/70">Профессиональные сантехнические услуги с 2013 года</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79001234567" className="hover:text-accent transition-colors">+7 (900) 123-45-67</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <a href="mailto:info@santehmaster.ru" className="hover:text-accent transition-colors">info@santehmaster.ru</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
              <p className="text-white/70">Круглосуточно, без выходных</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 СантехМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;