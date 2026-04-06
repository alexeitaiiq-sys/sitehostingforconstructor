import { Link } from 'react-router-dom';
import { Microscope, Leaf, Clock, MapPin, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function Home() {
  const benefits = [
    {
      icon: <Microscope size={32} className="text-rose-500 mb-4" />,
      title: 'Научный подход',
      desc: 'Формулы разработаны совместно с дерматологами и биохимиками.',
    },
    {
      icon: <Leaf size={32} className="text-emerald-500 mb-4" />,
      title: 'Чистый состав',
      desc: 'Без парабенов, силиконов и агрессивных отдушек.',
    },
    {
      icon: <Clock size={32} className="text-amber-500 mb-4" />,
      title: 'Результат за 14 дней',
      desc: 'Клинические испытания подтверждают видимый эффект.',
    },
    {
      icon: <MapPin size={32} className="text-indigo-500 mb-4" />,
      title: 'Российское производство',
      desc: 'Собственная лаборатория в Москве, контроль каждой партии.',
    },
  ];

  const bestsellers = [
    {
      id: 'serum-1',
      name: 'Сыворотка «Гиалурон+Пептиды»',
      desc: 'Глубокое увлажнение и лифтинг-эффект.',
      price: '2 490 ₽',
      image: './images/serum.jpg',
      tag: 'Хит продаж',
    },
    {
      id: 'cream-1',
      name: 'Крем-барьер «Церамид-Комплекс»',
      desc: 'Восстановление защитного слоя кожи.',
      price: '2 890 ₽',
      image: './images/cream.jpg',
    },
    {
      id: 'tonic-1',
      name: 'Тоник-эксфолиант «PHA-Гликоль»',
      desc: 'Мягкое обновление без раздражения.',
      price: '1 690 ₽',
      image: './images/tonic.jpg',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-100 min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-center bg-cover" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl bg-white/60 p-8 sm:p-12 rounded-3xl backdrop-blur-lg border border-white/50 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 text-rose-800 text-sm font-semibold mb-8 uppercase tracking-wide">
              <ShieldCheck size={16} /> Дерматологически протестировано
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
              СкинФарм — космецевтика <br/>
              <span className="text-rose-600">нового поколения</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed mb-10 font-medium">
              Клинически протестированные формулы для лица и тела. Эффект, подтверждённый исследованиями. Забота, вдохновлённая природой.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/catalog"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-semibold hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/20 transition-all text-lg"
              >
                Перейти в каталог <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-stone-900 rounded-full font-semibold hover:bg-stone-50 border border-stone-200 transition-all text-lg"
              >
                О лаборатории
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight">Философия доказательной красоты</h2>
            <p className="text-lg text-stone-600">Мы объединили передовые биотехнологии и силу растительных экстрактов, чтобы создать уход, который действительно работает.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-stone-50 hover:bg-rose-50/50 transition-colors border border-stone-100 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">Хиты продаж</h2>
              <p className="text-lg text-stone-600">Выбор наших клиентов и дерматологов</p>
            </div>
            <Link to="/catalog" className="hidden sm:flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors">
              Смотреть все <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group flex flex-col">
                <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-rose-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {product.tag}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-6 flex-grow">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-stone-900">{product.price}</span>
                    <button className="p-3 bg-stone-100 text-stone-900 rounded-full hover:bg-rose-600 hover:text-white transition-colors">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors">
              Смотреть весь каталог <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -left-40 top-0 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-stone-900 rounded-3xl p-10 sm:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ваша кожа скажет спасибо</h2>
            <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">
              Подпишитесь на нашу рассылку, чтобы получить персонализированный гид по типу кожи и <span className="text-rose-400 font-semibold">скидку 10% на первый заказ</span>.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Ваш email адрес"
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-500 transition-colors whitespace-nowrap shadow-lg shadow-rose-600/30"
              >
                Получить гайд
              </button>
            </form>
            <p className="text-xs text-stone-500 mt-6">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Никакого спама, только польза.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
