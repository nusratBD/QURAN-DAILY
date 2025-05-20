# ❌ Common Error: Static LocalStorage Data After DOM Load
## 🐞 Problem
When using localStorage.getItem("mode") outside of an event listener (e.g. at the top of the file), the retrieved value becomes static and does not update dynamically when the value in localStorage is changed later (e.g. after a button click).
### Example of the mistake:
```
let getMode = localStorage.getItem("mode");

document.getElementById("mode").addEventListener("click", () => {
    if (getMode === "night") {
        localStorage.setItem("mode", "day");
    } else {
        localStorage.setItem("mode", "night");
    }
    body.classList.toggle("mode");
});
```
In this case, getMode doesn't update after clicking the button, so it always uses the old value, causing the toggle logic to fail.
## ✅ Solution
Always retrieve the latest value from localStorage inside the event listener:
```
document.getElementById("mode").addEventListener("click", () => {
    const getMode = localStorage.getItem("mode"); // ✅ fresh value every time

    if (getMode === "night") {
        localStorage.setItem("mode", "day");
    } else {
        localStorage.setItem("mode", "night");
    }
    body.classList.toggle("mode");
});
```
This way, the logic always works with the most recent mode, and the UI updates properly on every click.

[Main Code](./static-local-storage.md)