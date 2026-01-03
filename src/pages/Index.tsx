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
      description: 'Быстро найду и устраню любые протечки воды'
    },
    {
      icon: 'Wrench',
      title: 'Замена труб',
      description: 'Поменяю старые трубы на современные'
    },
    {
      icon: 'Bath',
      title: 'Установка сантехники',
      description: 'Установлю ванны, раковины, унитазы, смесители'
    },
    {
      icon: 'Waves',
      title: 'Прочистка засоров',
      description: 'Прочищу засоры любой сложности'
    },
    {
      icon: 'Thermometer',
      title: 'Монтаж отопления',
      description: 'Установлю и настрою систему отопления'
    },
    {
      icon: 'Settings',
      title: 'Техобслуживание',
      description: 'Проведу профилактику и починю оборудование'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Опыт 10+ лет',
      description: 'Решу задачу любой сложности'
    },
    {
      icon: 'Zap',
      title: 'Приеду за 1 час',
      description: 'Работаю круглосуточно'
    },
    {
      icon: 'Award',
      title: 'Гарантия 2 года',
      description: 'На все виды работ'
    },
    {
      icon: 'CheckCircle',
      title: 'Качественные материалы',
      description: 'Использую проверенные запчасти'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Звонок',
      description: 'Позвоните или напишите мне в мессенджер'
    },
    {
      number: '02',
      title: 'Выезд',
      description: 'Приеду в течение 1 часа'
    },
    {
      number: '03',
      title: 'Ремонт',
      description: 'Сделаю работу быстро и качественно'
    },
    {
      number: '04',
      title: 'Оплата',
      description: 'Оплатите после проверки результата'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Максим быстро устранил протечку в ванной. Приехал через 40 минут, работу сделал за час. Очень довольна!',
      rating: 5
    },
    {
      name: 'Дмитрий Сергеев',
      text: 'Поменял все трубы в квартире. Работал аккуратно, убрал за собой. Цена честная.',
      rating: 5
    },
    {
      name: 'Ольга Иванова',
      text: 'Установил новую сантехнику под ключ. Профессионал своего дела, все работает отлично. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" size={32} className="text-primary" />
            <span className="text-xl font-bold text-primary">Сантехник Макс</span>
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
            <a href="tel:+79016670370" className="text-lg font-semibold text-primary hover:text-accent transition-colors">
              +7 (901) 667-03-70
            </a>
            <div className="flex gap-2">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="https://t.me/+79016670370" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="https://vk.me/79016670370" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  VK
                </a>
              </Button>
            </div>
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
              <a href="tel:+79016670370" className="text-lg font-semibold text-primary hover:text-accent transition-colors py-2">
                +7 (901) 667-03-70
              </a>
              <Button size="lg" className="bg-accent hover:bg-accent/90 w-full" asChild>
                <a href="https://t.me/+79016670370" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full" asChild>
                <a href="https://vk.me/79016670370" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать VK
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <section className={`pt-32 pb-20 px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Сантехник с опытом 10+ лет
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Приеду в течение 1 часа. Даю гарантию 2 года
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 h-auto" asChild>
              <a href="https://t.me/+79016670370" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={24} className="mr-2" />
                Telegram
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 h-auto" asChild>
              <a href="https://vk.me/79016670370" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={24} className="mr-2" />
                VK Мессенджер
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Что я делаю</h2>
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
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Почему выбирают меня</h2>
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
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Как я работаю</h2>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-lg h-14"
                    asChild
                  >
                    <a href="https://t.me/+79016670370" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" size={20} className="mr-2" />
                      Telegram
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white text-lg h-14"
                    asChild
                  >
                    <a href="https://vk.me/79016670370" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      VK
                    </a>
                  </Button>
                </div>
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
                <span className="text-xl font-bold">Сантехник Макс</span>
              </div>
              <p className="text-white/70">Частный мастер-сантехник с опытом с 2013 года</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79016670370" className="hover:text-accent transition-colors">+7 (901) 667-03-70</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  <a href="https://t.me/+79016670370" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Telegram</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  <a href="https://vk.me/79016670370" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">VK Мессенджер</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
              <p className="text-white/70">Круглосуточно, без выходных</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Сантехник Макс. Частный мастер.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;