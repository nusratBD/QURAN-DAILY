import { getlocalStorage } from "../../localStorage/localStorage.js"
import { surahLayout } from "./surah-detail-layout.js";
const loader=document.getElementById("loading");
document.addEventListener("DOMContentLoaded",async()=>{
const currentlyReadingSurah=await getlocalStorage("currently-reading");
surahLayout(currentlyReadingSurah);
})