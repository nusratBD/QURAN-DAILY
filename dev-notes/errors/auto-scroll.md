# 🚫 scrollIntoView() Common Errors & Solutions

## 🧠 Context
While working on auto-scrolling to a selected Surah button using `scrollIntoView()`, I encountered two issues. Below are the errors, causes, and solutions for future reference.

---

## ❌ Error 1: Directly chaining `.scrollIntoView()` during element selection

### Code:
```js
const selctedSurah = document.getElementById(readingSurah.surahNo).scrollIntoView();
//Inside of showSurahList() function
```
### 🔍 Problem:
The button which was selected before loading, didn't scroll on the top after loading
### ⚠️ Reason:
The target button that we are finding, doesn't create yet.

------------------------------------------------------------------------
## ❌ Error 2: Directly chaining `.scrollIntoView()` during element selection

### Code:
```js
if(selectedSurah){
    selectedSurah.scrollIntoView();
}
//selectedSurah is out of  showSurahList() function
```
### 🔍 Problem:
The button which was selected before loading, didn't scroll on the top after loading
### ⚠️ Reason:
The target button that we are finding, doesn't create yet.

------------------------------------------------------------------------
## ✅ Fix
```js
const  showSurahList=()=>{
    //Create Button
    const selctedSurah = document.getElementById(readingSurah.surahNo);
    if(selectedSurah){
    selectedSurah.scrollIntoView();
}
}

```
### ✅ Original Solution:
[surah-list-layout](../../JS/aside/surah-list-layout.js)