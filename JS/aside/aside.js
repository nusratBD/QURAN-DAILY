import { allSurahApi } from "../api/api.js";
import { showSurahList } from "./surah-list.js";
const surahList = allSurahApi();
/*---------------------------
                        Aside All action
                ----------------------------------*/
document.addEventListener("DOMContentLoaded", async () => {
    //Surah List Load on loading the site
    await surahList.then(surahs => {
        surahs.forEach((surah, index) => {
            showSurahList(surah,index);
        })
    });
    //Click Specific Surah
    surahList.then(surahs=>{
        surahs.forEach((surah, index)=>{
            document.getElementById(index+1).addEventListener("click",()=>{
                console.log(index+1);
                })
        })
    })
})
