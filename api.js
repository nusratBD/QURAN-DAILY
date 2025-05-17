export const allSurah=async()=>{
    const res=await fetch(`https://quranapi.pages.dev/api/surah.json`);
    const datas=res.json();
    return datas;
}
export const specificSurah=async(surahNumber)=>{
    const res=await fetch(`https://quranapi.pages.dev/api/${surahNumber}.json`);
    const data=res.json();
    return data;
}