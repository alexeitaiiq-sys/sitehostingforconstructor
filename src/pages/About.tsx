import { ArrowRight, Shield, Recycle, FlaskConical, Stethoscope, Droplet, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full bg-stone-50">
      {/* Hero Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-6">
            Наука. Природа. Результат.
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-medium">
            СкинФарм — это не просто уходовая косметика, а космецевтическая лаборатория, созданная для тех, кто ценит доказательный подход к здоровью кожи. Мы объединяем биохимические исследования, натуральные активы и строгий дерматологический контроль.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Наша философия</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow text-center group">
            <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FlaskConical size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Прозрачность</h3>
            <p className="text-stone-600 leading-relaxed">
              Полный INCI-состав и точная концентрация всех активных компонентов указаны на каждой упаковке. Мы ничего не скрываем от наших клиентов.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow text-center group">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Безопасность</h3>
            <p className="text-stone-600 leading-relaxed">
              Все продукты проходят независимое тестирование на гипоаллергенность. Мы принципиально не тестируем косметику на животных.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow text-center group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Recycle size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Устойчивость</h3>
            <p className="text-stone-600 leading-relaxed">
              Перерабатываемая стеклянная и PET-упаковка, этичный sourcing ингредиентов и стремление к углеродно-нейтральному производству.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как создаётся формула</h2>
            <p className="text-stone-400 text-lg">Каждый продукт проходит строгий путь от идеи до полки, чтобы гарантировать эффективность.</p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Исследование',
                desc: 'Глубокий анализ дерматологических потребностей и современных биотехнологий.',
                icon: <Stethoscope size={24} />,
              },
              {
                step: '02',
                title: 'Разработка',
                desc: 'Подбор синергичных активов и создание базы в нашей московской лаборатории.',
                icon: <FlaskConical size={24} />,
              },
              {
                step: '03',
                title: 'Тестирование',
                desc: 'Клинические пробы на добровольцах (In Vivo) в течение 28 дней под контролем врачей.',
                icon: <Droplet size={24} />,
              },
              {
                step: '04',
                title: 'Запуск',
                desc: 'Получение сертификатов ISO и ГОСТ, строгий контроль качества партии, доставка.',
                icon: <Star size={24} />,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 group">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-stone-800 border-2 border-stone-700 flex items-center justify-center text-rose-400 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-500 transition-all">
                    {item.icon}
                  </div>
                  {idx !== 3 && <div className="w-0.5 h-16 bg-stone-800 my-2"></div>}
                </div>
                <div className="bg-stone-800/50 p-8 rounded-3xl flex-grow border border-stone-700/50 hover:bg-stone-800 transition-colors backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-rose-400 font-mono font-bold text-xl">{item.step}</span>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-stone-300 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/catalog"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-500 transition-all text-lg shadow-lg shadow-rose-600/20"
            >
              Узнать больше о технологиях в каталоге <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
