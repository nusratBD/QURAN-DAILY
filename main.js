import { surahDetail } from "./layout.js";
const mySurah=JSON.parse(localStorage.getItem("my-surah"));
document.addEventListener("DOMContentLoaded", async ()=>{
    if(mySurah){
        await surahDetail(mySurah);
    }else{
        
    }
})
