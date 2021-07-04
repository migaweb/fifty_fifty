const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {

    const length = e.target.value.length
    const blurValue = 20 - length * 2
    
    background.style.filter = `blur(${Math.max(0, blurValue)}px)`
})