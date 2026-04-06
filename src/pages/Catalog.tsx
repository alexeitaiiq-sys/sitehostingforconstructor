import { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Все');

  const filters = ['Все', 'Увлажнение', 'Восстановление', 'Очищение', 'Анти-эйдж', 'Для тела'];

  const products = [
    {
      id: 'serum-1',
      name: 'Сыворотка «Гиалурон+Пептиды»',
      categories: ['Увлажнение', 'Анти-эйдж'],
      activeIngredients: '2% гиалуроновая кислота, Matrixyl 3000, ниацинамид',
      action: 'Глубокое увлажнение, разглаживание мимических морщин, укрепление матрикса',
      price: '2 490 ₽',
      image: '/images/serum.jpg',
      tag: 'Хит',
    },
    {
      id: 'cream-1',
      name: 'Крем-барьер «Церамид-Комплекс»',
      categories: ['Восстановление', 'Увлажнение'],
      activeIngredients: 'Церамиды NP/AP/EOP, сквалан, аллантоин',
      action: 'Восстановление липидного барьера, снятие покраснений, защита от внешних факторов',
      price: '2 890 ₽',
      image: '/images/cream.jpg',
      tag: 'Must have',
    },
    {
      id: 'tonic-1',
      name: 'Тоник-эксфолиант «PHA-Гликоль»',
      categories: ['Очищение', 'Восстановление'],
      activeIngredients: '5% глюконолактон, 2% молочная кислота, экстракт зелёного чая',
      action: 'Мягкое отшелушивание, выравнивание тона, антиоксидантная защита',
      price: '1 690 ₽',
      image: '/images/tonic.jpg',
    },
    {
      id: 'body-1',
      name: 'Лосьон-эмолент «Пантенол+»',
      categories: ['Для тела', 'Восстановление'],
      activeIngredients: '5% D-пантенол, масло ши, мочевина',
      action: 'Устранение шелушений, глубокое питание кожи тела, успокаивающий эффект',
      price: '1 890 ₽',
      image: '/images/cream.jpg',
      tag: 'Новинка',
    },
  ];

  const filteredProducts = activeFilter === 'Все'
    ? products
    : products.filter(p => p.categories.includes(activeFilter));

  return (
    <div className="w-full bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-6">
            Подберите уход по задаче
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-medium">
            Наши формулы разработаны для прицельного решения дерматологических проблем. Выберите то, что нужно вашей коже сегодня.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group flex flex-col">
              <div className="relative aspect-square bg-stone-100 overflow-hidden">
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-rose-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.categories.map(cat => (
                    <span key={cat} className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-stone-900 mb-4">{product.name}</h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Активные компоненты</h4>
                    <p className="text-sm font-medium text-stone-700">{product.activeIngredients}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Действие</h4>
                    <p className="text-sm text-stone-600">{product.action}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                  <span className="text-2xl font-bold text-stone-900">{product.price}</span>
                  <button className="flex items-center justify-center w-12 h-12 bg-stone-100 text-stone-900 rounded-full hover:bg-rose-600 hover:text-white transition-colors group/btn">
                    <ShoppingBag size={20} className="group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">В этой категории пока пусто</h3>
            <p className="text-stone-600 mb-8">Попробуйте выбрать другую задачу или посмотрите все продукты.</p>
            <button
              onClick={() => setActiveFilter('Все')}
              className="px-8 py-4 bg-stone-900 text-white font-semibold rounded-full hover:bg-rose-600 transition-colors"
            >
              Смотреть все
            </button>
          </div>
        )}
      </section>

      {/* Philosophy Banner */}
      <section className="py-24 bg-stone-900 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Не уверены, что выбрать?</h2>
          <p className="text-lg text-stone-400 mb-10">
            Изучите нашу философию и процесс создания формул, чтобы понять, как работает доказательная космецевтика.
          </p>
          <Link
            to="/about"
            className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full font-semibold hover:bg-rose-600 hover:text-white transition-all text-lg"
          >
            О лаборатории СкинФарм <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
