import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-blue-600" />
              </div>
              <span className="text-white font-bold text-xl">ROBLOX ZONE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-white hover:text-orange-300 transition-colors"
              >
                Главная
              </a>
              <a
                href="#games"
                className="text-white hover:text-orange-300 transition-colors"
              >
                Игры
              </a>
              <a
                href="#news"
                className="text-white hover:text-orange-300 transition-colors"
              >
                Новости
              </a>
              <a
                href="#tournaments"
                className="text-white hover:text-orange-300 transition-colors"
              >
                Турниры
              </a>
              <a
                href="#contacts"
                className="text-white hover:text-orange-300 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button
              variant="outline"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Мир <span className="text-orange-400">ROBLOX</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Погрузись в удивительный мир блочных приключений! Играй, создавай и
            побеждай в лучших играх Роблокс.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg"
            >
              <Icon name="Trophy" size={20} className="mr-2" />
              Турниры
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section id="games" className="py-16 px-4 bg-white/10 backdrop-blur-lg">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <Icon
              name="Star"
              size={32}
              className="inline mr-3 text-yellow-400"
            />
            Популярные игры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src="/img/611ee2d9-b759-42af-a8b2-3dec2fdc4005.jpg"
                  alt="Futuristic City"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white">Future City</CardTitle>
                  <Badge className="bg-green-500 text-white">Онлайн</Badge>
                </div>
                <CardDescription className="text-white/80 mb-4">
                  Строй город будущего с друзьями
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70">
                    <Icon name="Users" size={16} className="mr-1" />
                    <span>2.3K игроков</span>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Играть
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src="/img/8c7c21a6-f0a3-4bd5-884b-cfa0fa8081e2.jpg"
                  alt="Adventure World"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white">Adventure Quest</CardTitle>
                  <Badge className="bg-green-500 text-white">Онлайн</Badge>
                </div>
                <CardDescription className="text-white/80 mb-4">
                  Магические приключения и сокровища
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70">
                    <Icon name="Users" size={16} className="mr-1" />
                    <span>1.8K игроков</span>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Играть
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src="/img/2393cd1a-d971-4c44-8bb6-b4855d26069c.jpg"
                  alt="Racing Championship"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white">Speed Racing</CardTitle>
                  <Badge className="bg-red-500 text-white">Турнир</Badge>
                </div>
                <CardDescription className="text-white/80 mb-4">
                  Чемпионат по гонкам на выживание
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70">
                    <Icon name="Users" size={16} className="mr-1" />
                    <span>3.1K игроков</span>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Играть
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Updates & Items */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <Icon
              name="Sparkles"
              size={32}
              className="inline mr-3 text-yellow-400"
            />
            Игровые обновления
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New Items Collection */}
            <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src="/img/24cac24f-2ffc-4401-979a-fd782e04f702.jpg"
                  alt="New Items Collection"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white">Новые предметы</CardTitle>
                  <Badge className="bg-green-500 text-white">Доступно</Badge>
                </div>
                <CardDescription className="text-white/80 mb-4">
                  Крутые шляпы, мечи и аксессуары для твоего персонажа
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70">
                    <Icon name="Package" size={16} className="mr-1" />
                    <span>15+ предметов</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-purple-500 hover:bg-purple-600"
                  >
                    Посмотреть
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Legendary Items */}
            <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src="/img/4ce568df-9f28-4492-a829-a4725451539c.jpg"
                  alt="Legendary Items"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white">Легендарные вещи</CardTitle>
                  <Badge className="bg-yellow-500 text-white">Редкие</Badge>
                </div>
                <CardDescription className="text-white/80 mb-4">
                  Эксклюзивные предметы с особыми эффектами
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70">
                    <Icon name="Crown" size={16} className="mr-1" />
                    <span>5 предметов</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-yellow-500 hover:bg-yellow-600"
                  >
                    Получить
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Seasonal Items */}
            <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src="/img/93ababf6-8d48-4b4a-866e-1a52c0be5f49.jpg"
                  alt="Seasonal Items"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white">Сезонные вещи</CardTitle>
                  <Badge className="bg-orange-500 text-white">Лето</Badge>
                </div>
                <CardDescription className="text-white/80 mb-4">
                  Праздничные костюмы и летние аксессуары
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    <span>До 31 июля</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Items Showcase */}
          <div className="mt-12 bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              <Icon
                name="Star"
                size={24}
                className="inline mr-2 text-yellow-400"
              />
              Рекомендуемые предметы
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Crown" size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">
                  Золотая корона
                </h4>
                <p className="text-white/70 text-sm">999 R$</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">Молния-меч</h4>
                <p className="text-white/70 text-sm">1499 R$</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">Крылья любви</h4>
                <p className="text-white/70 text-sm">799 R$</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">Щит героя</h4>
                <p className="text-white/70 text-sm">1199 R$</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Tournaments */}
      <section id="news" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* News */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Icon
                  name="Newspaper"
                  size={28}
                  className="mr-3 text-blue-400"
                />
                Новости
              </h2>
              <div className="space-y-6">
                <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-blue-500 text-white">
                        Обновление
                      </Badge>
                      <span className="text-white/70 text-sm">
                        2 часа назад
                      </span>
                    </div>
                    <CardTitle className="text-white mb-2">
                      Новый сезон в Adventure Quest
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Добавлены новые локации, персонажи и магические предметы
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-green-500 text-white">Событие</Badge>
                      <span className="text-white/70 text-sm">
                        1 день назад
                      </span>
                    </div>
                    <CardTitle className="text-white mb-2">
                      Летний фестиваль игр
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Участвуй в специальных событиях и получай уникальные
                      награды
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tournaments */}
            <div id="tournaments">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Icon
                  name="Trophy"
                  size={28}
                  className="mr-3 text-yellow-400"
                />
                Турниры
              </h2>
              <div className="space-y-6">
                <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-red-500 text-white">Активный</Badge>
                      <div className="text-white/70 text-sm">
                        Призовой фонд: 50,000₽
                      </div>
                    </div>
                    <CardTitle className="text-white mb-2">
                      Чемпионат по гонкам
                    </CardTitle>
                    <CardDescription className="text-white/80 mb-4">
                      Соревнуйся с лучшими гонщиками и выиграй главный приз
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-white/70 text-sm">
                        <Icon name="Clock" size={14} className="inline mr-1" />
                        Осталось: 3 дня
                      </div>
                      <Button size="sm" className="bg-red-500 hover:bg-red-600">
                        Участвовать
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-orange-500 text-white">Скоро</Badge>
                      <div className="text-white/70 text-sm">
                        Призовой фонд: 100,000₽
                      </div>
                    </div>
                    <CardTitle className="text-white mb-2">
                      Битва строителей
                    </CardTitle>
                    <CardDescription className="text-white/80 mb-4">
                      Покажи свои навыки строительства в грандиозном турнире
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-white/70 text-sm">
                        <Icon name="Clock" size={14} className="inline mr-1" />
                        Начало: 15 июля
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white/20"
                      >
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="py-16 px-4 bg-white/10 backdrop-blur-lg"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <Icon
              name="MessageCircle"
              size={32}
              className="inline mr-3 text-green-400"
            />
            Связаться с нами
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Напиши нам
              </h3>
              <div className="space-y-4">
                <Input
                  placeholder="Твоё имя"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Textarea
                  placeholder="Твоё сообщение"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[120px]"
                />
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Присоединяйся
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-lg">
                  <Icon
                    name="MessageSquare"
                    size={24}
                    className="text-blue-400"
                  />
                  <div>
                    <div className="text-white font-semibold">Discord</div>
                    <div className="text-white/70 text-sm">
                      Общайся с игроками
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-lg">
                  <Icon name="Users" size={24} className="text-blue-400" />
                  <div>
                    <div className="text-white font-semibold">Telegram</div>
                    <div className="text-white/70 text-sm">
                      Новости и обновления
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-lg">
                  <Icon name="Youtube" size={24} className="text-red-400" />
                  <div>
                    <div className="text-white font-semibold">YouTube</div>
                    <div className="text-white/70 text-sm">Стримы и обзоры</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={16} className="text-blue-600" />
            </div>
            <span className="text-white font-bold">ROBLOX ZONE</span>
          </div>
          <p className="text-white/70 text-sm">
            © 2024 ROBLOX ZONE. Все права защищены. Не аффилированы с Roblox
            Corporation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
