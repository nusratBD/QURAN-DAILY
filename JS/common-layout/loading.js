export const loadingStart=(loader)=>{
    loader.innerHTML=`<h2 style="color:#00897b">Loading....</h2>`;
}
export const loadingStop=(loader)=>{
    loader.innerHTML="";
}