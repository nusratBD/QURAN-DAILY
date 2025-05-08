import { allSurah } from "./api.js";
const loading = document.getElementById("loading");
const surahList = document.getElementById("surahList");
document.addEventListener("DOMContentLoaded", () => {
    //Show All Surah
    loading.innerHTML = `<h2 style="color:#00897b">Loading....</h2>`
    allSurah().then(datas => {
        loading.innerHTML = "";
        datas.forEach((data, index) => {
            surahList.innerHTML += `<button class="surahListBtn" id="${index+1}">${index + 1}. ${data.surahName}</button>`;
        });
    })
})