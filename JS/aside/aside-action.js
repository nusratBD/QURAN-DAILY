import { allSurahApi, specificSurahApi } from "../api/api.js";
import { loadingStart, loadingStop } from "../common-layout/loading.js";
import { localStorageReadingSurah } from "../localStorage/localStorage.js";
import { activateClickedSurah, removeBtnActiveClass } from "./activate-button.js";
import { showSurahList } from "./surah-list-layout.js";
const surahList = allSurahApi();
const loader=document.getElementById("sura-list-loader");
/*---------------------------
                        Aside All action
                ----------------------------------*/
document.addEventListener("DOMContentLoaded", async () => {
    //Surah List Load on loading the site
    loadingStart(loader)
    await surahList.then(surahs => {
        surahs.forEach((surah, index) => {
            showSurahList(surah,index);
            loadingStop(loader)
        })
    });
    //Click Specific Surah
    surahList.then(surahs=>{
        surahs.forEach((surah, index)=>{
            document.getElementById(index+1).addEventListener("click",(e)=>{
                removeBtnActiveClass();
                activateClickedSurah(e.target);
                specificSurahApi(index+1).then(surah=>localStorageReadingSurah(surah))
                })
        })
    })
})
