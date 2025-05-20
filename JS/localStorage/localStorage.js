export const setlocalStorage=(name,surah)=>{
    localStorage.setItem(name,JSON.stringify(surah));
}
export const getlocalStorage=(name)=>{
    const getReadingSurah=JSON.parse(localStorage.getItem(name))||[];
    return getReadingSurah;
}
export const setSingleStorage=(name, value)=>{
    localStorage.setItem(name, value);
}
export const getSingleStorage=(name)=>{
    const getStorage=localStorage.getItem(name);
    return getStorage;
}