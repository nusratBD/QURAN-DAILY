const surahListDiv = document.getElementById("surahList");
export const showSurahList=(surah,index)=>{
surahListDiv.innerHTML += `<button class="surahListBtn" id="${index + 1}">${index + 1}. ${surah.surahName}</button>`;
}