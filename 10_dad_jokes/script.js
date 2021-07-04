const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const url = 'https://icanhazdadjoke.com/'
    const config = {
        headers: { 'Accept': 'application/json' }
    }

    const res = await fetch(url, config)
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}