import { getSingleStorage, setSingleStorage } from "../../localStorage/localStorage.js";
const body = document.getElementById("body");
const getPreviousMode = getSingleStorage("mode");

document.addEventListener("DOMContentLoaded", () => {
    //Mode After loading the website
    if (getPreviousMode == "night") {
        body.classList.add("mode");
    } else {
        body.classList.remove("mode");
    }
    //Mode Change when clicking on the button
    document.getElementById("mode").addEventListener("click", () => {
        const getPreviousMode = getSingleStorage("mode");
        if (getPreviousMode == "night") {
            setSingleStorage("mode", "day");
        } else {
            setSingleStorage("mode", "night");
        }
        body.classList.toggle("mode");
    })
})
