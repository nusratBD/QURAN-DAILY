import { allSurah } from "./api.js";
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