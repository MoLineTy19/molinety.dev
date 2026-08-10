# molinety.dev

Персональное портфолио fullstack-разработчика. Бэкенд на Python и Go,
фронтенд на React/Next.js. Сайт сделан с нуля: дизайн-система, адаптив,
анимации, доступность.

**[molinety.ru](https://molinety.ru)**

## Стек

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (дизайн-токены через `@theme`)
- **motion** (framer-motion) для анимаций
- **lucide-react** для иконок

## Что внутри

| Секция | Что делает |
| --- | --- |
| Hero | Поле частиц на canvas, typing-эффект, метрики |
| TopNav | Sticky-навигация, мобильное меню, статус «открыт к предложениям» |
| About | Карточки стека и таймлайн пути |
| Skills | 6 категорий: языки, backend Python, backend Go, frontend, БД, инфра |
| Projects | Карточки реальных проектов с фичами и ссылками на репозитории |
| Contact | Четыре канала связи |
| 404 | Кастомная страница в фирменном тёмном стиле |

## Структура

```
app/
├── components/
│   ├── hero/          hero-секция и её части
│   ├── nav/           верхняя навигация
│   ├── about/         о себе + таймлайн
│   ├── skills/        сетка стека
│   ├── projects/      карточки проектов
│   ├── contact/       контакты
│   ├── footer/        подвал
│   └── icons/         кастомные иконки (GithubIcon)
├── globals.css        дизайн-токены, темы, keyframes
├── layout.tsx         корневой layout, метаданные, шрифты
└── page.tsx           главная страница
```

Данные проектов и стека лежат в `app/components/projects/projects-data.ts`
и `app/components/skills/skills-data.ts`. Чтобы добавить проект или
навык, редактируй эти файлы.

## Запуск

Нужен Node.js 18+.

```bash
npm install
npm run dev
```

Открой `http://localhost:3000`.

Сборка:

```bash
npm run build
npm start
```

## Доступность

- Видимый focus-ring при клавиатурной навигации
- `prefers-reduced-motion`: анимации и частицы отключаются
- Контраст текста под WCAG AA
- Единственный `<h1>` на странице, семантические `<section>` и `<nav>`

## Лицензия

MIT. Код можно использовать свободно с указанием автора.
