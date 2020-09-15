const closeOverlay = function() {
    modal.classList.add('gone')
    modalOverlay.classList.add('off')
    setTimeout(function() {
        modalContainer.remove()
        modalOverlay.remove()
    }, 200)
}

const modalContainer = document.querySelector("#modal-container");
const modalOverlay = document.querySelector("#modal-overlay")
const modal = document.querySelector("#modal")

document.querySelector("#modal-closer").addEventListener('click', closeOverlay)
modalContainer.addEventListener("click", closeOverlay);

modal.addEventListener('click', function(e) {
    e.stopPropagation()
})