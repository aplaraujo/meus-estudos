import { heroLevel } from "../src/hero.js"

describe("Hero level", () => {
    it("should return 'O heroi de nome Dwaim está no nível de Radiante'", () => {
        const heroi = "Dwaim"
        const xp = 48595
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Dwaim está no nível de Radiante")
    })

    it("should return 'O heroi de nome Ziborn está no nível de Radiante'", () => {
        const heroi = "Ziborn"
        const xp = 10474
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Ziborn está no nível de Radiante")
    })

    it("should return 'O heroi de nome Maztea está no nível de Radiante'", () => {
        const heroi = "Maztea"
        const xp = 10889
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Maztea está no nível de Radiante")
    })

    it("should return 'O heroi de nome Gilzoy está no nível de Radiante'", () => {
        const heroi = "Gilzoy"
        const xp = 29218
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Gilzoy está no nível de Radiante")
    })

    it("should return 'O heroi de nome Nebuose está no nível de Platina'", () => {
        const heroi = "Nebuose"
        const xp = 7177
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Nebuose está no nível de Platina")
    })

    it("should return 'O heroi de nome Tuazi está no nível de Radiante'", () => {
        const heroi = "Tuazi"
        const xp = 45477
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Tuazi está no nível de Radiante")
    })

    it("should return 'O heroi de nome Dreypi está no nível de Prata'", () => {
        const heroi = "Dreypi"
        const xp = 4114
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Dreypi está no nível de Prata")
    })

    it("should return 'O heroi de nome Hurim está no nível de Radiante'", () => {
        const heroi = "Hurim"
        const xp = 37362
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Hurim está no nível de Radiante")
    })

    it("should return 'O heroi de nome Pipya está no nível de Bronze'", () => {
        const heroi = "Pipya"
        const xp = 1430
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Pipya está no nível de Bronze")
    })

    it("should return 'O heroi de nome Malborn está no nível de Radiante'", () => {
        const heroi = "Malborn"
        const xp = 12097
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Malborn está no nível de Radiante")
    })

    it("should return 'O heroi de nome Maztea está no nível de Radiante'", () => {
        const heroi = "Maztea"
        const xp = 10889
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Maztea está no nível de Radiante")
    })

    it("should return 'O heroi de nome Kifaorish está no nível de Ascendente'", () => {
        const heroi = "Kifaorish"
        const xp = 8362
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Kifaorish está no nível de Ascendente")
    })

    it("should return 'O heroi de nome Nozis está no nível de Bronze'", () => {
        const heroi = "Nozis"
        const xp = 1429
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Nozis está no nível de Bronze")
    })

    it("should return 'O heroi de nome Bapta está no nível de Prata'", () => {
        const heroi = "Bapta"
        const xp = 4349
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Bapta está no nível de Prata")
    })

    it("should return 'O heroi de nome Rosi está no nível de Prata'", () => {
        const heroi = "Rosi"
        const xp = 4218
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Rosi está no nível de Prata")
    })

    it("should return 'O heroi de nome Dagon está no nível de Prata'", () => {
        const heroi = "Dagon"
        const xp = 3408
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Dagon está no nível de Prata")
    })

    it("should return 'O heroi de nome Durgal está no nível de Radiante'", () => {
        const heroi = "Durgal"
        const xp = 38843
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Durgal está no nível de Radiante")
    })

    it("should return 'O heroi de nome Ishen está no nível de Prata'", () => {
        const heroi = "Ishen"
        const xp = 2818
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Ishen está no nível de Prata")
    })

    it("should return 'O heroi de nome Bazurt está no nível de Radiante'", () => {
        const heroi = "Bazurt"
        const xp = 10931
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Bazurt está no nível de Radiante")
    })

    it("should return 'O heroi de nome Curuas está no nível de Prata'", () => {
        const heroi = "Curuas"
        const xp = 3159
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Curuas está no nível de Prata")
    })

    it("should return 'O heroi de nome Gimgoza está no nível de Bronze'", () => {
        const heroi = "Gimgoza"
        const xp = 1641
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Gimgoza está no nível de Bronze")
    })

    it("should return 'O heroi de nome Bemea está no nível de Prata'", () => {
        const heroi = "Bemea"
        const xp = 4349
        const nivel = heroLevel(heroi, xp)
        expect(nivel).toEqual("O heroi de nome Bemea está no nível de Prata")
    })
})