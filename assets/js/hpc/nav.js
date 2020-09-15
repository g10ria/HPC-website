const openDrawer = function() {
    drawer.classList.add("open");
    navOverlay.classList.add("on");
}

const closeDrawer = function() {
    drawer.classList.remove("open");
    navOverlay.classList.remove("on");
}

const drawer = document.querySelector("#nav-drawer")
const navOverlay = document.querySelector("#nav-overlay")

document.querySelector("#nav-opener").addEventListener("click", openDrawer)
document.querySelector("#nav-closer").addEventListener("click", closeDrawer)
navOverlay.addEventListener("click", closeDrawer);