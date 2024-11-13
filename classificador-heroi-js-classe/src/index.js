import { Hero } from "./hero.js"

const hero = document.querySelector("[data-js='hero']")
const xp = document.querySelector("[data-js='xp']")
const result = document.querySelector("[data-js='result']")
const level = document.querySelector("[data-js='level']")

level.addEventListener("submit", e => {
    e.preventDefault()
    const heroi = hero.value
    const xpValue = xp.value
    const heroLevel = new Hero(heroi, xpValue)
    result.innerHTML = heroLevel.heroLevel()
    hero.value = ""
    xp.value = ""
})