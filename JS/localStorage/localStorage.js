export const localStorageReadingSurah=(surah)=>{
    localStorage.setItem("currently-reading",JSON.stringify(surah));
}
export const getReadingSurah=()=>{
    const getReadingSurah=JSON.parse(localStorage.getItem("currently-reading"))||[];
    return getReadingSurah;
}