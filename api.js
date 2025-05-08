export const allSurah=async()=>{
    const res=await fetch(`https://quranapi.pages.dev/api/surah.json`);
    const datas=res.json();
    return datas;
}