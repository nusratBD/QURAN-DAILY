import { getSingleStorage, setSingleStorage } from "../../localStorage/localStorage.js";

const surahName=document.getElementById("surah-name");
const surahContainer=document.getElementById("surahContainer");
export const surahLayout=(data)=>{
    surahName.textContent=""
    surahContainer.innerHTML="";
  surahName.textContent = `${data.surahNo}. ${data.surahName}`;
    data.arabic1.forEach((arabic, index) => {
        surahContainer.innerHTML += `
        <div class="ayah" id="${data.surahName}${index+1}" data-index="${data.surahName}${index-1}">
            <p><strong>${index + 1}.</strong> ${arabic}</p>
  <p>${data.english[index]}</p>
 <button id="${data.surahName}-${index + 1}">⭐ Bookmark</button>
            <button id="" title="Play Audio">🎧</button>
            <button title="View Tafsir" id="">📖</button>
                </div>
                    `;
    })
    const callback=(entris)=>{
        entris.forEach(entry=>{
            if(entry.isIntersecting){
                document.querySelectorAll(".ayah").forEach(ayah=>ayah.classList.remove("active"));
                setSingleStorage("last-read", entry.target.dataset.index);
            }
            document.getElementById(entry.target.id).classList.add("active");
            entry.target.classList.add("active");
    })
    }
    const option={threshold:1.0};
    const observer=new IntersectionObserver(callback, option);
    document.querySelectorAll(".ayah").forEach(ayah=>observer.observe(ayah));
    //Scroll to the last read ayah
    const lastRead=getSingleStorage("last-read");
    if(lastRead){
        const lastAyah=document.getElementById(lastRead);
        if(lastAyah){
            lastAyah.classList.add("active");
            lastAyah.scrollIntoView();
        }
    }
}