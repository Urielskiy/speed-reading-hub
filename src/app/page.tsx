import { trainers } from '@/data/trainers';
import TrainerCard from '@/components/TrainerCard';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Героїчна секція з градієнтним фоном */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/20 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-4 border-white/30 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-blur-sm bg-indigo-600/20 shadow-2xl mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 to-purple-100">
                  Розвивайте навички швидкого читання та покращуйте концентрацію уваги за допомогою колекції інтерактивних тренажерів
                </span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="px-8 py-3 bg-indigo-700/30 backdrop-blur-sm text-white font-semibold rounded-xl border border-indigo-400/30 hover:bg-indigo-700/40 transition duration-300">
                Дізнатися більше
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container py-16 px-4 sm:px-6 lg:px-8 mx-auto">
      <section id="trainers" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Наші <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Тренажери</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              id={trainer.id}
              title={trainer.title}
              description={trainer.description}
              imageUrl={trainer.imageUrl}
              launchUrl={trainer.launchUrl}
              infoUrl={trainer.infoUrl}
              features={trainer.features}
            />
          ))}
        </div>
      </section>

      <section className="mb-16 py-16 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Про <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">проєкт</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Наша мета - допомогти вам розвинути навички швидкого читання та покращити концентрацію уваги
          </p>
        </div>

        <div className="prose prose-lg mx-auto px-4 sm:px-6">
          <p className="text-lg leading-relaxed">
            Швидке читання - це набір методик, які дозволяють збільшити швидкість сприйняття текстової інформації без втрати розуміння. 
            Наші тренажери допоможуть вам розвинути ці навички через регулярні вправи та тренування.
          </p>
          <p className="text-lg leading-relaxed">
            Кожен тренажер фокусується на різних аспектах швидкочитання: розширення периферійного зору, 
            зменшення субвокалізації, покращення концентрації та багато іншого.
          </p>
          
          <div className="mt-10 flex justify-center">
            <Link href="/about" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg">
              Дізнатися більше про проєкт
            </Link>
          </div>
        </div>
      </section>
      </div>
      
      {/* Футер */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Speed Reading Hub</h3>
              <p className="text-slate-400">Розвивайте навички швидкого читання</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-indigo-300">Навігація</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-slate-300 hover:text-white transition">Головна</Link></li>
                  <li><Link href="/about" className="text-slate-300 hover:text-white transition">Про проєкт</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-indigo-300">Контакти</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:uptosmart@gmail.com" className="text-slate-300 hover:text-white transition">uptosmart@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Speed Reading Hub. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
