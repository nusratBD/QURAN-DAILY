export const localStorageReadingSurah=(surah)=>{
    localStorage.setItem("currently-reading",JSON.stringify(surah));
}