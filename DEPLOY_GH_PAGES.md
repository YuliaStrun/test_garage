# Деплой на GitHub Pages

Проект настроен на статический экспорт для GitHub Pages. Обычный `yarn build` (без переменной окружения) — это обычная сборка для продакшена с SSR. Для GitHub Pages нужна отдельная сборка с базовым путём.

## Шаг 1. Сборка под GitHub Pages

Имя репозитория на GitHub должно совпадать с базовым путём. Например, репозиторий `garage-radio-frontend` → сайт будет по адресу `https://<username>.github.io/garage-radio-frontend/`.

**Windows (PowerShell):**
```powershell
$env:GITHUB_PAGES_BASE_PATH="/garage-radio-frontend"
yarn build
```

**Windows (cmd):**
```cmd
set GITHUB_PAGES_BASE_PATH=/garage-radio-frontend
yarn build
```

**Mac / Linux:**
```bash
GITHUB_PAGES_BASE_PATH=/garage-radio-frontend yarn build
```

После сборки в корне проекта появится папка **`out`** со статикой.

Важно: при сборке должен быть доступен ваш API (GraphQL), так как данные для главной и страницы «О проекте» подтягиваются на этапе сборки (getStaticProps).

## Шаг 2. Публикация на GitHub Pages

Сайт на GitHub Pages открывается по адресу `https://<username>.github.io/<repo-name>/`, поэтому статика должна лежать в подпапке с именем репозитория.

После сборки с `GITHUB_PAGES_BASE_PATH=/garage-radio-frontend` в `out` лежат папки `ru/`, `en/`, `_next/` и т.д. Их нужно положить в каталог **`garage-radio-frontend`** (или как называется ваш репозиторий) и уже его выложить в ветку `gh-pages`.

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path out-gh/garage-radio-frontend
Copy-Item -Path out/* -Destination out-gh/garage-radio-frontend/ -Recurse
npx gh-pages -d out-gh
```

**Mac / Linux:**
```bash
mkdir -p out-gh/garage-radio-frontend
cp -r out/* out-gh/garage-radio-frontend/
npx gh-pages -d out-gh
```

Пакет `gh-pages` (один раз):
```bash
yarn add -D gh-pages
```

В репозитории на GitHub: **Settings → Pages** → Source: ветка **gh-pages**, папка **/ (root)**.

## Шаг 3. Адрес сайта

После деплоя открывайте сайт по адресу (подставьте свой логин и имя репозитория):
- Главная (рус.): `https://<username>.github.io/garage-radio-frontend/ru/`
- Главная (англ.): `https://<username>.github.io/garage-radio-frontend/en/`
- О проекте: `https://<username>.github.io/garage-radio-frontend/ru/about/` или `.../en/about/`

Корень `https://<username>.github.io/garage-radio-frontend/` без пути может отдать 404 — это нормально, заходите сразу на `/ru/` или `/en/`.

## Обычная сборка (без GitHub Pages)

Без переменной `GITHUB_PAGES_BASE_PATH` сборка остаётся обычной (без `output: 'export'`), для деплоя на свой сервер или Vercel:

```bash
yarn build
yarn start
```
