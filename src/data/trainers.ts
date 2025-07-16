

export interface Trainer {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  launchUrl: string;
  infoUrl: string;
  repoUrl: string;
  techStack: string[];
  features: string[];
}

export const trainers: Trainer[] = [
  {
    id: "crocodile-speed-reader",
    title: "Тренажер \"Крокодил\"",
    description: "Тренажер для швидкісного читання, для розвитку лінійного читання",
    imageUrl: "https://urielskiy.github.io/speed-reading-hub/icons/crocodile.svg",
    launchUrl: "https://urielskiy.github.io/crocodile-speed-reader/",
    infoUrl: "/trainers/crocodile-speed-reader",
    repoUrl: "https://github.com/Urielskiy/crocodile-speed-reader.git",
    techStack: ["Vite", "React", "TypeScript", "Framer Motion"],
    features: [
      "Тренування швидкого читання через зникаючі слова",
      "Налаштування швидкості зникнення",
      "Сучасний інтерфейс з анімаціями",
      "Різні режими тренування",
      "Статистика прогресу"
    ]
  },
  {
    id: "speed-reading-trainer",
    title: "Тренажер \"Широкого погляду\"",
    description: "Тренажер для тренування считувати цілі слова та словосполучення",
    imageUrl: "https://urielskiy.github.io/speed-reading-hub/icons/speedway.svg",
    launchUrl: "https://urielskiy.github.io/speed-reading-trainer/#/",
    infoUrl: "/trainers/speed-reading-trainer",
    repoUrl: "https://github.com/Urielskiy/speed-reading-trainer",
    techStack: ["React", "TypeScript", "Material UI", "Firebase"],
    features: [
      "Різноманітні вправи для тренування",
      "Відстеження прогресу",
      "Налаштування складності",
      "Режим тренування та тестування"
    ]
  },
  {
    id: "schulte-table",
    title: "Таблиці Шульте",
    description: "Тренажер для розвитку периферійного зору та концентрації уваги",
    imageUrl: "https://urielskiy.github.io/speed-reading-hub/icons/schulte-table.svg",
    launchUrl: "https://urielskiy.github.io/schulte-table/",
    infoUrl: "/trainers/schulte-table",
    repoUrl: "https://github.com/Urielskiy/schulte-table",
    techStack: ["React", "TypeScript", "Material UI"],
    features: [
      "Налаштування розміру таблиці",
      "Різні режими складності",
      "Таймер для відстеження швидкості",
      "Статистика результатів"
    ]
  },
  {
    id: "schulte-letter-tables",
    title: "Буквена Таблиця Шульте",
    description: "Тренажер для розвитку периферійного зору та концентрації уваги з використанням букв українського та англійського алфавіту",
    imageUrl: "/icons/schulte-letter.svg",
    launchUrl: "https://urielskiy.github.io/schulte-letter-tables/",
    infoUrl: "/trainers/schulte-letter-tables",
    repoUrl: "https://github.com/Urielskiy/schulte-letter-tables",
    techStack: ["React", "TypeScript", "CSS"],
    features: [
      "Таблиці з буквами замість цифр",
      "Відстеження історії результатів",
      "Налаштування розміру таблиці",
      "Тренування алфавітного пошуку",
      "Розвиток периферійного зору"
    ]
  },
  {
    id: "studio-master",
    title: "Тренажер \"Око в центрі\"",
    description: "Тренажер для покращення швидкості читання за допомогою різних технік вертикального читання",
    imageUrl: "https://urielskiy.github.io/speed-reading-hub/icons/eye-of-horus.svg",
    launchUrl: "https://urielskiy.github.io/Eye_Center/",
    infoUrl: "/trainers/studio-master",
    repoUrl: "https://github.com/Urielskiy/studio-master",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    features: [
      "Налаштування швидкості читання (WPM)",
      "Вибір кількості слів у рядку",
      "Вибір кількості рядків для показу",
      "Налаштування розміру шрифту",
      "Інтеграція з Firebase для зберігання даних",
      "Статистика прочитаного тексту"
    ]
  }
];
