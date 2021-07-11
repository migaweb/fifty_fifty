var btns = document.querySelectorAll('.send')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('active')
    
        setTimeout(() => {
            btn.classList.remove('active')
        }, 5000);
    })
})
