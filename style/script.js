let abross = document.getElementById("clickbtn")
abross.addEventListener("click", aboss);

let overlay = document.querySelector("#overlay")
overlay.addEventListener("click", aboss)
function aboss(e) {
    let ono = abross.classList.toggle("change")
    let owo = ono.toString()
    owo.indexOf("change");
    if (owo == "true") {
        openMenu()
    } else if (owo == "false") {
        closeMenu()
    }
}
function openMenu() {
    let comot = document.querySelector(".header-nav")
    comot.classList.add("sm")
    let remo = document.querySelector("#overlay")
    remo.classList.add("overlay");
}
function closeMenu() {
    let comot = document.querySelector(".header-nav")
    comot.classList.remove("sm")
    let remo = document.querySelector("#overlay")
    remo.classList.remove("overlay");
}