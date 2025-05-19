import { getReadingSurah } from "../localStorage/localStorage.js";

const surahListDiv = document.getElementById("surahList");
const readingSurah=getReadingSurah();

export const showSurahList=(surah,index)=>{
    //If the Surah exist in the localStorage, the button will be activated automatically
    if(readingSurah.surahNo==index+1){
        surahListDiv.innerHTML += `<button class="surahListBtn surahListBtnActive" id="${index+1}">${index + 1}. ${surah.surahName}</button>`;
    }
        else{
            surahListDiv.innerHTML += `<button class="surahListBtn" id="${index + 1}">${index + 1}. ${surah.surahName}</button>`;
        }
        //The Selected Surah will automatically scroll to the top
        const selctedSurah=document.getElementById(readingSurah.surahNo);
        if(selctedSurah){
            selctedSurah.scrollIntoView();
        }
}