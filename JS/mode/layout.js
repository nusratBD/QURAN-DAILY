import { getSingleStorage } from "../localStorage/localStorage.js";
const body = document.getElementById("body");
const getPreviousMode = getSingleStorage("mode");

export const modeLayout=()=>{
    document.addEventListener("DOMContentLoaded", () => {
    //Mode After loading the site
    if (getPreviousMode == "night") {
        body.classList.add("mode");
    } else {
        body.classList.remove("mode");
    }
})
}