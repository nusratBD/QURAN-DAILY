import { surahDetail } from "./layout.js";
const mySurah=JSON.parse(localStorage.getItem("my-surah"));
document.addEventListener("DOMContentLoaded", async ()=>{
    if(mySurah){
        surahDetail(mySurah);
    }else{
        
    }
})
