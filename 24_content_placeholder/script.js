

const header = document.getElementById('header-img')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const dateEl = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getData() {
    
    header.innerHTML = `<img src="https://source.unsplash.com/random/500x500">`
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/30.jpg">'

    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, reiciendis!'
    nameEl.innerHTML = 'Jane Doe'
    dateEl.innerHTML = 'Oct 8, 2021'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((text) => text.classList.remove('animated-bg-text'))
    
}

setTimeout(getData, 2500);
