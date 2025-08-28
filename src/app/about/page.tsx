import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Про проєкт &ldquo;Тренажери Швидкочитання&rdquo;</h1>
        
        <div className="prose prose-lg">
          <p>
            Проєкт &ldquo;Тренажери Швидкочитання&rdquo; - це колекція інтерактивних тренажерів, 
            спрямованих на розвиток навичок швидкого читання та покращення сприйняття 
            текстової інформації.
          </p>
          
          <h2>Наша місія</h2>
          <p>
            Наша місія - зробити навчання швидкому читанню доступним та ефективним 
            для кожного. Ми віримо, що здатність швидко сприймати та аналізувати 
            інформацію є критично важливою навичкою в сучасному світі.
          </p>
          
          <h2>Наші тренажери</h2>
          <p>
            Кожен з наших тренажерів фокусується на розвитку різних аспектів 
            швидкочитання:
          </p>
          
          <ul>
            <li>
              <strong>Тренажер &ldquo;Крокодил&rdquo;</strong> - тренажер для швидкісного читання, для розвитку лінійного читання.
            </li>
            <li>
              <strong>Тренажер &ldquo;Широкого погляду&rdquo;</strong> - тренажер для тренування считувати цілі слова та словосполучення.
            </li>
            <li>
              <strong>Таблиці Шульте</strong> - тренажер для розвитку периферійного зору та концентрації уваги.
            </li>
            <li>
              <strong>Тренажер &ldquo;Око в центрі&rdquo;</strong> - тренажер для покращення швидкості читання за допомогою різних технік вертикального читання.
            </li>
            <li>
              <strong>Тренажер &ldquo;Текстовий душ&rdquo;</strong> - динамічне вертикальне читання, розвиток бокового зору та уваги.
            </li>
          </ul>
          

          
          <h2>Як користуватися</h2>
          <p>
            Для використання тренажерів просто виберіть потрібний на головній 
            сторінці та натисніть кнопку &ldquo;Запустити&rdquo;. Кожен тренажер має свої 
            налаштування та інструкції, які допоможуть вам отримати максимальну 
            користь від тренувань.
          </p>
          
          <p>
            Регулярні тренування з нашими тренажерами допоможуть вам значно 
            підвищити швидкість читання та покращити розуміння прочитаного.
          </p>
          
          <h2>Підтримка проєкту</h2>
          <p>
            Друзі щиро дякуємо що коритсуєтесь нашими тренажерами. Ми не збираємось на цьому зупинятись, і плануємо розробляти ще нові тренажери та ігри з розвитку Уваги, Концентрації та Швидкого читання.
          </p>
          <p>
            Підтримати проєкт можна за посиланнями:
          </p>
          <ul>
            <li>
              <a href="https://secure.wayforpay.com/payment/s2ef274df0741" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>WayForPay - https://secure.wayforpay.com/payment/s2ef274df0741</a>
            </li>
            <li>
              <a href="https://send.monobank.ua/jar/4ZpgQ8xpWR" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Monobank - https://send.monobank.ua/jar/4ZpgQ8xpWR</a>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">Повернутися на головну</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
