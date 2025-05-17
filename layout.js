//Specific Surah Detail Layout
const surahName = document.getElementById("surahName");
const surahContainer = document.getElementById("surahContainer");
const allBookMarks = localStorage.getItem("book-mark") || [];
export const surahDetail = async (data) => {
    surahName.textContent = `${data.surahNo}. ${data.surahName}`;
    data.arabic1.forEach((arabic, index) => {
        surahContainer.innerHTML += `
        <div class="ayah" data-index="${index+1}" id="${data.surahName}${index+1}">
            <p><strong>${index + 1}.</strong> ${arabic}</p>
  <p>${data.english[index]}</p>
  ${allBookMarks
                .filter(mark => mark.name === data.surahName && mark.id == index + 1)
                .length > 0
                ? `<button id="${data.surahName}-${index + 1}" disabled>⭐ Bookmark</button>`
                : `<button id="${data.surahName}-${index + 1}">⭐ Bookmark</button>`
            }
    <button id="" title="Play Audio">🎧</button>
    <button title="View Tafsir" id="">📖</button>
        </div>
            `;
    })
    console.log(data);
    const callback=(entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                console.log(entry.target.dataset.index);
                localStorage.setItem(data.surahName, entry.target.dataset.index)
            }
        })
    }
    const option={threshold:1.0};
    const observer=new IntersectionObserver(callback, option);
    document.querySelectorAll(".ayah").forEach(ayah=>observer.observe(ayah));
    //Scroll to last post
    const lastRead=localStorage.getItem(data.surahName);
    if(lastRead){
        const lastAyah=document.getElementById(data.surahName+lastRead);
        if(lastAyah){
            lastAyah.scrollIntoView({
                behavior:"instant",
                block:"center"
            })
        }
    }
}