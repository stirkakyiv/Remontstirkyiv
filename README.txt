СТРУКТУРА
---------
Це повний сайт "Майстер Пральних — Костянтин" + матеріали бренду.

1) Сайт (для Netlify)
   - index.html (укр)
   - index-en.html (англ)
   - ne-zlyvaie-vodu.html (стаття 1)
   - pralka-gude-pry-vidzhymi.html (стаття 2)
   - style.css, script.js
   - manifest.json, sw.js
   - robots.txt, sitemap.xml
   - google-verify.html
   - favicon.ico
   - /images (лого, банери, QR)
   - /icons (іконки PWA)

2) stirmaster-card-kit/
   - card-template.png (візитка 90x50 мм)
   - logo.png
   - qr-stirmaster.png
   - README-card.txt

ДОМЕН: https://stirmasterkyiv.netlify.app
ТЕЛЕФОН: 093 536 46 50
TELEGRAM: @kostyankostyan


NETLIFY (як опублікувати сайт)
------------------------------
1. Зайди на https://app.netlify.com
2. Add new site → Deploy manually
3. Перетягни ВСЮ папку цього сайту (вміст стirmaster-full)
4. Після завантаження сайт буде доступний онлайн.


GOOGLE SEARCH CONSOLE
---------------------
1. Перейди на https://search.google.com/search-console/
2. Додай сайт як URL-prefix (встав домен https://stirmasterkyiv.netlify.app)
3. Вибери HTML-тег перевірки
4. Заміні у <head> тег:
   <meta name="google-site-verification" content="your-verification-code-here">
5. Натисни Verify
6. Додай sitemap.xml у Search Console

У root вже є google-verify.html як запасний метод перевірки.


OLX
---
Заголовок:
"Ремонт пральних машин у Києві (виїзд додому)"

Текст:
Майстер Пральних — Костянтин.
Ремонт пральних машин у Києві з виїздом до клієнта.
Оболонський, Подільський, Шевченківський, Деснянський райони.
Не зливає воду, гуде при віджимі, не гріє, не відкривається люк.
Швидко, акуратно, з гарантією.

Телефон: 093 536 46 50
Telegram: @kostyankostyan
Сайт: https://stirmasterkyiv.netlify.app

Рекомендації:
- Фото: banner-horizontal.png або card-template.png
- Ціна в OLX: "від 100 грн"
- Категорія: Побутова техніка → Ремонт → Київ


QR-КОД
------
Файл /images/qr-stirmaster.png — це QR у фірмовому стилі
(білий код на темно-синьому фоні).

QR веде на https://stirmasterkyiv.netlify.app


БАНЕРИ
------
/images/banner-telegram.png        (512x512) — аватар або логотип для Telegram
/images/banner-horizontal.png      (1200x600) — шапка Telegram, Facebook, OLX
/images/qr-stirmaster.png          (QR-код 500x500)

Поради:
- У Telegram-каналі став banner-telegram.png як фото профілю
- В OLX додавай banner-horizontal.png як фото оголошення + QR
- Можеш надрукувати QR і клеїти клієнту на пралку після ремонту


GOOGLE КАРТИ (Google My Business)
---------------------------------
1. Відкрий https://www.google.com/business/
2. "Додати бізнес"
3. Назва: "Майстер Пральних — Костянтин"
4. Категорія: "Ремонт пральних машин"
5. Місто: Київ
6. Райони: Оболонський, Подільський, Шевченківський, Деснянський
7. Телефон: 093 536 46 50
8. Сайт: https://stirmasterkyiv.netlify.app
9. Додай фото з /images/
10. Підтвердь бізнес (SMS / пошта)

Після підтвердження ти будеш показуватися в Google Картах у видачі
"ремонт пральних машин Київ" з кнопками "Подзвонити" і "Сайт".


ЯК ПЕРЕВІРИТИ ПОЗИЦІЇ В GOOGLE
------------------------------
1. Увійди в Google Search Console
2. Перейди "Результати пошуку / Performance"
3. Подивись "Запити" (Queries)
4. Дивись позиції за словами:
   "ремонт пральних машин київ",
   "пральна машина не зливає воду",
   "гуде при віджимі"
5. Якщо є покази, але мало кліків — додай такі слова в текст сайту.


ЯК ОНОВЛЮВАТИ САЙТ
------------------
1. Змінив файли? Зроби новий ZIP
2. На Netlify: зайди в сайт → Deploys → Upload new deploy
3. Перетягни новий ZIP
4. Сайт оновиться


РЕЗЕРВНА КОПІЯ
--------------
1. Створи теку backup-stirmaster
2. Скопіюй туди всі файли сайту
3. Запакуй як stirmaster-backup-2025-10-25.zip
4. Кинь собі в Telegram / Google Drive
5. Якщо щось зламається — просто перезалий цей ZIP на Netlify