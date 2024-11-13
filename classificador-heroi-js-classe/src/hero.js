export class Hero {
    constructor(hero, xp) {
        this.hero = hero
        this.xp = xp
    }

    heroLevel() {
        let level = ""
        if (this.xp <= 1000) {
            level = "Ferro"
        } else if (this.xp > 1000 && this.xp <= 2000) {
            level = "Bronze"
        } else if (this.xp > 2000 && this.xp <= 5000) {
            level = "Prata"
        } else if (this.xp > 5000 && this.xp <= 7000) {
            level = "Ouro"
        } else if (this.xp > 7000 && this.xp <= 8000) {
            level = "Platina"
        } else if (this.xp > 8000 && this.xp <= 9000) {
            level = "Ascendente"
        } else if (this.xp > 9000 && this.xp <= 10000) {
            level = "Imortal"
        } else {
            level = "Radiante"
        }
        return `O heroi de nome ${this.hero} está no nível de ${level}`
    }
}