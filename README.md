# 📖 Quran Daily
Quran Daily is a simple web application that lists all Surahs (chapters) of the Quran and allows users to view detailed information by clicking on each Surah. And, also give opportunity to find specific ayah.

-----------------------------------------------------------------------

## 🚀 Features
- ✅ Display a list of all Surahs from the Quran
- ✅ Show details of each Surah on click
- ✅ Day & Night Mode
- ✅ Last Read Surah add to the Local Storage
- ✅ Ayah BookMark
- ✅ Ayah UnBookmark from BookMark List
- ✅ Loader at the time of data fetching from api
- ✅ Dynamic Ayah Search
- ✅ 100% Device Responsive
- ✅ Last read ayah tracking and auto scroll there during reload
------------------------------------------------------------------------

## 🛠️ Technologies Used

- ✅ HTML
- ✅ CSS
- ✅ JavaScript (Vanilla)
- ✅ fuse.js
- ✅ IntersectionObserver
------------------------------------------------------------------------

## API 
**Base URL:** `https://quranapi.pages.dev/api/`
// Get all surahs
fetch("https://quranapi.pages.dev/api/surah.json")

// Get Surah 2 (Al-Baqarah)
fetch("https://quranapi.pages.dev/api/surahNo.json")
### 🔍 Example 
fetch("https://quranapi.pages.dev/api/2.json")

// Get Ayah 255 from Surah 2 (Ayatul Kursi)
fetch("https://quranapi.pages.dev/api/surahNo/ayahNo.json")
### 🔍 Example 
fetch("https://quranapi.pages.dev/api/2/176.json")

------------------------------------------------------------------------


## How to Run
Just open `index.html` in browser.

----------------------------------------------------------------------

## Design Layout
-----------------------------------------------------------------------

## Live Demo
------------------------------------------------------------------------
## 🛠 Developer Notes
- [Common Errors & Fixes](./dev-notes/errors/)