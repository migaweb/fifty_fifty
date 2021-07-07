const openBtn = document.getElementById('btn-open')
const closeBtn = document.getElementById('btn-close')
const leftEl = document.querySelector('.nav')

openBtn.addEventListener('click', toggleSideMenu)
closeBtn.addEventListener('click', toggleSideMenu)

function toggleSideMenu() {
    openBtn.classList.toggle('hidden')
    closeBtn.classList.toggle('hidden')
    leftEl.classList.toggle('small')
}