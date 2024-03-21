class hero {
    constructor (name, age, classType) {
        this.name = name
        this.age = age
        this.classType = classType
    }

    attack() {
        const attackType = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }

        switch (this.classType) {
            case "mago":
                console.log(`O ${this.classType} atacou usando ${attackType.mago}.`)
                break
            case "guerreiro":
                console.log(`O ${this.classType} atacou usando ${attackType.guerreiro}.`)
                break
            case "monge":
                console.log(`O ${this.classType} atacou usando ${attackType.monge}.`)
                break
            case "ninja":
                console.log(`O ${this.classType} atacou usando ${attackType.ninja}.`)
                break
            default:
                console.log(`O herói ${this.name} não possui uma classe conhecida.`)
        }
    }
}

let novoHeroi = new hero("Owen Higgins", 20, "guerreiro")

novoHeroi.attack()