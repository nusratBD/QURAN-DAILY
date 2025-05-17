import { allSurah, specificSurah } from "./api.js";
import { surahDetail } from "./layout.js";
//All Surah Button Click Event
const surahName=document.getElementById("surahName");
const surahContainer=document.getElementById("surahContainer");
document.addEventListener("DOMContentLoaded",()=>{
    allSurah().then(datas=>{
    datas.forEach((data, index) => {
        const allSurahBtn=document.querySelectorAll(".surahListBtn");
       const surahBtn=document.getElementById(index+1);
        surahBtn.addEventListener("click",async(e)=>{
            surahName.textContent="Loading....";
            surahContainer.innerHTML="";
            allSurahBtn.forEach(btn=>btn.classList.remove("surahListBtnActive"));
            e.target.classList.add("surahListBtnActive");
            await specificSurah(index+1).then(data=>{
                localStorage.setItem("my-surah", JSON.stringify(data));
                surahDetail(data);
                })
        })
    });
})
})
//BookMark
//Toggle Button Action for Mobile View
const surahList=document.getElementById("surahList");
document.getElementById("toggleBtn").addEventListener("click",()=>{
    surahList.classList.toggle('toggle');
})

