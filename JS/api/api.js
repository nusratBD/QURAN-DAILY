export const allSurahApi=async()=>{
    const res=await fetch(`https://quranapi.pages.dev/api/surah.json`);
    const datas=res.json();
    return datas;
}
export const specificSurahApi=async(surahNo)=>{
    const res=await fetch(`https://quranapi.pages.dev/api/${surahNo}.json`);
    const data=res.json();
    return data;
}
export const specificAyahApi=async(surahNo, ayahNo)=>{
const res=await fetch(`https://quranapi.pages.dev/api/${surahNo}/${ayahNo}.json`);
const data=await res.json();
return data;
}