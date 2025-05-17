//Loading Default Mode Before Clicking
const body=document.getElementById("body");
let getMode=localStorage.getItem("mode");
document.addEventListener("DOMContentLoaded",()=>{
    if(getMode=="night"){
    body.classList.add("mode");
}else{
    body.classList.remove("mode");
}
})
//Mode Change when clicking on the button
document.getElementById("mode").addEventListener("click",()=>{
    if(getMode=="night"){
        localStorage.setItem("mode", "day");
    }else{
        localStorage.setItem("mode", "night");
    }
    body.classList.toggle("mode");
})