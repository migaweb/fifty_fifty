const btn = document.getElementById('btn')
const overlay = document.querySelector('.busy-overlay')

btn.addEventListener('click', _ => {
    setTimeout(() => {
        overlay.style.display = 'flex'
        overlay.classList.add('loading')

        setTimeout(() => {
            overlay.style.display = 'none'
            overlay.classList.remove('loading')
        }, 5000)
    }, 1000)
})