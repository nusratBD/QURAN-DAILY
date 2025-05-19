export const removeBtnActiveClass=()=>{
const allSurahBtn=document.querySelectorAll(".surahListBtn");
allSurahBtn.forEach(btn=>btn.classList.remove("surahListBtnActive"));
}
export const activateClickedSurah=(clickedBtn)=>{
    clickedBtn.classList.add("surahListBtnActive");
}