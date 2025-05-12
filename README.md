# Faculty App (Expo + React Native)

## 🇬🇧 English

A modern, multilingual mobile app for university/faculty information, built with **React Native** and **Expo**. The app features dynamic search with suggestions, beautiful UI, and support for both Arabic and English.

---

### 🚀 Features
- **Multilingual**: Full support for Arabic (RTL) and English (LTR) with instant language switching.
- **Dynamic Search**: Typeahead suggestions for departments, news, and faculty members.
- **Modern UI**: Clean, responsive design with custom components and icons.
- **Department & Faculty Directory**: Browse departments, faculty, news, and events.
- **Quick Links**: Easy access to key sections.
- **Map & Calendar**: Campus map and academic events.
- **Offline-Ready**: Works well on both iOS, Android, and web.

---

### 📂 Folder Structure
```
.
├── app/                # App entry points, navigation, screens
│   ├── (tabs)/         # Main tabbed screens (Home, Map, Calendar, News, About)
│   └── ...
├── components/         # Reusable UI and home components
├── constants/          # Colors, layout, and other constants
├── data/               # Static data (departments, news, events, faculty, ...)
├── hooks/              # Custom hooks (translation, language context, ...)
├── translations/       # i18n translation files (ar.ts, en.ts)
├── assets/             # Images and static assets
├── utils/              # Utility functions (i18n config, ...)
├── android/            # Native Android project
├── ...
```

---

### 🛠️ Getting Started
**Prerequisites:**
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

**Installation:**
```bash
git clone <repo-url>
cd <project-folder>
yarn install # or npm install
```

**Running the App:**
```bash
yarn start # or npm start
```
- Scan the QR code with Expo Go (iOS/Android) or run on web.

---

### 🌐 Localization
- All translations are in `translations/ar.ts` and `translations/en.ts`.
- Add new languages by creating a new file and updating `utils/i18n.ts`.
- Language can be switched instantly from the header.

---

### 🔍 Search & Suggestions
- Search bar on the home screen provides instant suggestions for:
  - Departments
  - News
  - Faculty members
- Suggestions are clickable and navigate to the relevant detail page.
- Easily extend to support more data types (events, courses, ...).

---

### ✨ Customization
- **Colors & Layout**: Edit in `constants/Colors.ts` and `constants/Layout.ts`.
- **Data**: Update or extend in the `data/` folder.
- **UI Components**: Reusable components in `components/ui/`.
- **Add new sections**: Create a new screen in `app/(tabs)/` and add to navigation.

---

### 🤝 Credits
- Built with [Expo](https://expo.dev/), [React Native](https://reactnative.dev/), and [i18n-js](https://github.com/fnando/i18n-js).
- Icons by [Lucide](https://lucide.dev/).
- UI inspired by modern university/faculty apps.

---

### 📄 License
MIT

---

## 🇸🇦 العربية

تطبيق حديث متعدد اللغات لإدارة وعرض معلومات الكلية/الجامعة، مبني باستخدام **React Native** و**Expo**. يتميز التطبيق ببحث ديناميكي واقتراحات فورية وواجهة عصرية ودعم كامل للغتين العربية والإنجليزية.

---

### 🚀 المميزات
- **تعدد اللغات**: دعم كامل للعربية (من اليمين لليسار) والإنجليزية (من اليسار لليمين) مع تبديل فوري للغة.
- **بحث ديناميكي**: اقتراحات فورية للأقسام، الأخبار، وأعضاء هيئة التدريس أثناء الكتابة.
- **واجهة عصرية**: تصميم نظيف ومتجاوب مع مكونات وأيقونات مخصصة.
- **دليل الأقسام وأعضاء هيئة التدريس**: تصفح الأقسام، أعضاء هيئة التدريس، الأخبار، والفعاليات.
- **روابط سريعة**: وصول سريع لأهم أقسام التطبيق.
- **خريطة وجدول فعاليات**: خريطة الحرم الجامعي وجدول الفعاليات الأكاديمية.
- **يعمل بدون إنترنت**: متوافق مع iOS وAndroid والويب.

---

### 📂 هيكل المجلدات
```
.
├── app/                # نقاط دخول التطبيق والتنقل والشاشات
│   ├── (tabs)/         # الشاشات الرئيسية (الرئيسية، الخريطة، التقويم، الأخبار، عن الكلية)
│   └── ...
├── components/         # مكونات الواجهة القابلة لإعادة الاستخدام
├── constants/          # الألوان والتخطيطات والثوابت
├── data/               # بيانات ثابتة (الأقسام، الأخبار، الفعاليات، أعضاء هيئة التدريس ...)
├── hooks/              # هوكس مخصصة (الترجمة، إدارة اللغة ...)
├── translations/       # ملفات الترجمة (ar.ts, en.ts)
├── assets/             # الصور والملفات الثابتة
├── utils/              # دوال مساعدة (إعدادات الترجمة ...)
├── android/            # مشروع أندرويد الأصلي
├── ...
```

---

### 🛠️ بدء الاستخدام
**المتطلبات:**
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) أو npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

**التثبيت:**
```bash
git clone <repo-url>
cd <project-folder>
yarn install # أو npm install
```

**تشغيل التطبيق:**
```bash
yarn start # أو npm start
```
- امسح كود QR بتطبيق Expo Go (iOS/Android) أو شغل على الويب.

---

### 🌐 الترجمة
- جميع الترجمات في `translations/ar.ts` و `translations/en.ts`.
- لإضافة لغة جديدة: أنشئ ملف ترجمة جديد وعدل `utils/i18n.ts`.
- يمكن تبديل اللغة فورياً من الترويسة.

---

### 🔍 البحث والاقتراحات
- شريط البحث في الشاشة الرئيسية يوفر اقتراحات فورية لـ:
  - الأقسام
  - الأخبار
  - أعضاء هيئة التدريس
- الاقتراحات قابلة للضغط وتنتقل بك لصفحة التفاصيل.
- يمكن التوسعة بسهولة لدعم أنواع بيانات أخرى (فعاليات، كورسات ...).

---

### ✨ التخصيص
- **الألوان والتخطيط**: عدل في `constants/Colors.ts` و `constants/Layout.ts`.
- **البيانات**: حدث أو أضف بيانات جديدة في مجلد `data/`.
- **مكونات الواجهة**: جميع المكونات القابلة لإعادة الاستخدام في `components/ui/`.
- **إضافة أقسام جديدة**: أنشئ شاشة جديدة في `app/(tabs)/` وأضفها للتنقل.

---

### 🤝 الشكر
- تم بناء التطبيق باستخدام [Expo](https://expo.dev/)، [React Native](https://reactnative.dev/)، و[i18n-js](https://github.com/fnando/i18n-js).
- الأيقونات من [Lucide](https://lucide.dev/).
- واجهة مستوحاة من تطبيقات الجامعات الحديثة.

---

### 📄 الرخصة
MIT 