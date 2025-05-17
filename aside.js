import { allSurah } from "./api.js";
const loading = document.getElementById("loading");
const surahList = document.getElementById("surahList");
const mySurah=JSON.parse(localStorage.getItem("my-surah"))||[];
    
document.addEventListener("DOMContentLoaded", async() => {
    //Show All Surah
    loading.innerHTML = `<h2 style="color:#00897b">Loading....</h2>`
    await allSurah().then(datas => {
        loading.innerHTML = "";
        datas.forEach((data, index) => {
            if(mySurah.surahNo==index+1){
                surahList.innerHTML += `<button class="surahListBtn surahListBtnActive" id="${index+1}">${index + 1}. ${data.surahName}</button>`
                }else{
                surahList.innerHTML += `<button class="surahListBtn" id="${index+1}">${index+1}. ${data.surahName}</button>`;
            }
        });
    })
    //Selected Button Auto scroll to the top
    const selectedBtn=document.getElementById(mySurah.surahNo);
    if(selectedBtn){
        selectedBtn.scrollIntoView();
    }
})

