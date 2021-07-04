const menuItems = document.querySelectorAll('nav ul li')
const contents = document.querySelectorAll('.content')

menuItems.forEach((menuItem, idx) => {
    menuItem.addEventListener('click', () => {
        menuItems.forEach(mi => mi.classList.remove('active'))
        menuItems[idx].classList.add('active')

        contents.forEach(content => content.classList.remove('show'))
        contents[idx].classList.add('show')
    })
})