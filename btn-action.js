import { allSurah } from "./api.js";
//All Surah Button Click Event
document.addEventListener("DOMContentLoaded",()=>{
    allSurah().then(datas=>{
    datas.forEach((data, index) => {
        const allSurahBtn=document.querySelectorAll(".surahListBtn");
       const surahBtn=document.getElementById(index+1);
        surahBtn.addEventListener("click",(e)=>{
            allSurahBtn.forEach(btn=>btn.classList.remove("surahListBtnActive"));
            e.target.classList.add("surahListBtnActive");
        })
    });
})
})
//Toggle Button Action for Mobile View
const surahList=document.getElementById("surahList");
document.getElementById("toggleBtn").addEventListener("click",()=>{
    surahList.classList.toggle('toggle');
})

