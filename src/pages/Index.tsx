import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const spendingData = [
    { date: "10.01", amount: 3200 },
    { date: "11.01", amount: 2800 },
    { date: "12.01", amount: 4100 },
    { date: "13.01", amount: 3600 },
    { date: "14.01", amount: 2900 },
    { date: "15.01", amount: 5200 },
  ];

  const categoryData = [
    { name: "Продукты", value: 15800, color: "#0EA5E9" },
    { name: "Транспорт", value: 4200, color: "#8B5CF6" },
    { name: "Развлечения", value: 3600, color: "#F97316" },
    { name: "Здоровье", value: 2800, color: "#22C55E" },
    { name: "Другое", value: 1900, color: "#94A3B8" },
  ];

  const storeComparison = [
    { store: "Пятёрочка", price: 450, savings: 0 },
    { store: "Магнит", price: 425, savings: 25 },
    { store: "Перекрёсток", price: 480, savings: -30 },
    { store: "Лента", price: 415, savings: 35 },
  ];

  const recentReceipts = [
    { id: 1, store: "Пятёрочка", date: "15.01.2026", amount: 1250, items: 8, category: "Продукты" },
    { id: 2, store: "Магнит", date: "14.01.2026", amount: 890, items: 5, category: "Продукты" },
    { id: 3, store: "Аптека", date: "13.01.2026", amount: 450, items: 3, category: "Здоровье" },
    { id: 4, store: "Кинотеатр", date: "12.01.2026", amount: 800, items: 2, category: "Развлечения" },
  ];

  const notifications = [
    { id: 1, type: "discount", title: "Скидка 30% в Магните", description: "На продукты из вашего списка", time: "2 часа назад" },
    { id: 2, type: "budget", title: "Бюджет превышен", description: "Категория 'Продукты': +15%", time: "5 часов назад" },
    { id: 3, type: "price", title: "Цена снижена", description: "Молоко в Ленте дешевле на 20₽", time: "1 день назад" },
  ];

  const totalSpent = spendingData.reduce((sum, item) => sum + item.amount, 0);
  const budget = 35000;
  const budgetUsed = (totalSpent / budget) * 100;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10 backdrop-blur-sm bg-card/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="ShoppingBag" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Умный шоппинг</h1>
                <p className="text-xs text-muted-foreground">Ваш финансовый помощник</p>
              </div>
            </div>
            <Button size="icon" variant="ghost">
              <Icon name="Bell" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <section className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Потрачено за месяц</CardTitle>
                <Icon name="TrendingDown" className="text-primary" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">28 300 ₽</div>
                <p className="text-xs text-success mt-1 flex items-center gap-1">
                  <Icon name="ArrowDown" size={12} />
                  8.2% меньше прошлого месяца
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Экономия</CardTitle>
                <Icon name="PiggyBank" className="text-success" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2 450 ₽</div>
                <p className="text-xs text-muted-foreground mt-1">За счет умных покупок</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Средний чек</CardTitle>
                <Icon name="Receipt" className="text-secondary" size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">847 ₽</div>
                <p className="text-xs text-muted-foreground mt-1">24 покупки в этом месяце</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="animate-slide-up">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Бюджет месяца</CardTitle>
                <Badge variant="outline">{budget.toLocaleString()} ₽</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Использовано</span>
                  <span className="font-semibold">{totalSpent.toLocaleString()} ₽ ({budgetUsed.toFixed(0)}%)</span>
                </div>
                <Progress value={budgetUsed} className="h-3" />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Info" size={16} />
                <span>Осталось {(budget - totalSpent).toLocaleString()} ₽ до конца месяца</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <Tabs defaultValue="analytics" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics">
              <Icon name="LineChart" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="comparison">
              <Icon name="Scale" size={16} className="mr-2" />
              Сравнение
            </TabsTrigger>
            <TabsTrigger value="receipts">
              <Icon name="Receipt" size={16} className="mr-2" />
              Чеки
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Icon name="Bell" size={16} className="mr-2" />
              Уведомления
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>График расходов</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={spendingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      formatter={(value: number) => [`${value} ₽`, 'Сумма']}
                    />
                    <Line type="monotone" dataKey="amount" stroke="#0EA5E9" strokeWidth={3} dot={{ fill: '#0EA5E9', r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Расходы по категориям</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => `${value.toLocaleString()} ₽`} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-3">
                    {categoryData.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <span className="font-semibold">{category.value.toLocaleString()} ₽</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Сравнение цен в магазинах</CardTitle>
                <p className="text-sm text-muted-foreground">Корзина из 8 товаров</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {storeComparison.map((store, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Store" className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">{store.store}</div>
                          <div className="text-2xl font-bold mt-1">{store.price} ₽</div>
                        </div>
                      </div>
                      {store.savings !== 0 && (
                        <Badge variant={store.savings > 0 ? "default" : "destructive"} className="ml-auto">
                          {store.savings > 0 ? `−${store.savings}` : `+${Math.abs(store.savings)}`} ₽
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Lightbulb" className="text-success" size={20} />
                    <span className="font-semibold text-success">Рекомендация:</span>
                  </div>
                  <p className="text-sm mt-2">Покупайте в Ленте и экономьте 35 ₽ на каждой корзине</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="receipts" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>История покупок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReceipts.map((receipt) => (
                    <div key={receipt.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Receipt" className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">{receipt.store}</div>
                          <div className="text-xs text-muted-foreground">{receipt.date} · {receipt.items} товаров</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{receipt.amount} ₽</div>
                        <Badge variant="outline" className="mt-1">{receipt.category}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Умные уведомления</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex gap-3 p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        notification.type === 'discount' ? 'bg-success/10' :
                        notification.type === 'budget' ? 'bg-warning/10' : 'bg-primary/10'
                      }`}>
                        <Icon 
                          name={notification.type === 'discount' ? 'Tag' : notification.type === 'budget' ? 'AlertTriangle' : 'TrendingDown'} 
                          className={notification.type === 'discount' ? 'text-success' : notification.type === 'budget' ? 'text-warning' : 'text-primary'} 
                          size={20} 
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{notification.title}</div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
