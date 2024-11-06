import { heroLevel } from "./hero.js"

const level = document.querySelector('[data-js="level"]')
const hero = document.querySelector('[data-js="hero"]')
const xp = document.querySelector('[data-js="xp"]')
const result = document.querySelector('[data-js="result"]')

level.addEventListener("submit", (event) => {
    event.preventDefault()
    const heroi = hero.value
    const xpValue = xp.value
    const nivel = heroLevel(heroi, xpValue)
    result.innerHTML = nivel
    level.reset()
})