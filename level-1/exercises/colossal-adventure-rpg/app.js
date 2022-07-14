const readline = require("readline-sync")
let isAlive = true;
const tname = readline.question("Welcome, new trainer to the world of pokemon!! What is your name? ")

let isFighting = true
const newItem = "*a new item has been added to your inventory* "
let inventory = ["Oran Berry"]
// let defeated = false
// let maxLevel = false
let trainersPokemonName = {}
// let starterPokemon = ''
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let wildPokemonName = ''
let wildPokemonAtk = ''
let wildPokemonHP = ''
// let wildPokemonHit = ''
let wildPokemonCrt = ''
let wildPokemonItem = ''
let wildPokemonItemDescription = ''
let engage = ''
let attackCounter = ''
        
class Trainerspokemon {
    constructor(pname, hp, ap, atk, crt, level, levelup) {
        this.pname = pname;
        this.hp = hp;
        this.fullhp = hp;
        this.ap = ap;
        this.atk = atk;
        this.crt = crt;
        this.level = level;
        this.levelup = levelup
    }
    // pname = readline.question("What is your pokemons name? ")

        // nextLevel(level) {
        //     return round((4 * (level ^ 3)) / 5)
        // }
        
        // levelUp(levelup) {
        //     atk = this.atk + 1
        //     hp = this.hp + 5
        // }
}

const charmander = new Trainerspokemon("Charmander", 40, 60, 35,  1, 5,)
const squirtle = new Trainerspokemon("Squirtle", 50, 50, 30, 2, 5,)
const bulbasaur = new Trainerspokemon("Bulbasaur", 60, 40, 25, 3, 5,)

function chooseStarter() {

    let pokemonOptions = ["charmander", "squirtle", "bulbasaur"]
    let starters = readline.keyInSelect(pokemonOptions,"Please choose your starting pokemon between [1] Charmander, [2] Squirtle, or [3] Bulbasuar. ")
    if (pokemonOptions[starters] === "charmander") {
        console.log("Congratulations, you have choosen Charmander!")

    } else if(pokemonOptions[starters] === "squirtle") {
        console.log("Congratulations, you have choosen Squirtle!")

    } else if(pokemonOptions[starters] === "bulbasaur") {
        console.log("Congratulations, you have choosen Bulbasuar!")

    }
    // switch(starterPokemon) {
    //     case "c":
    //         console.log("Congratulations, you have choosen Charmander!")
    //         return new Trainerspokemon("Charmander", 40, 60, 35, 1, 5,)
    //     break;
    
    //     case "s":
    //         console.log("Congratulations, you have choosen Squirtle!")
    //         return new Trainerspokemon("Squirtle", 50, 50, 30, 2, 5,)
    //     break;
    
    //     case "b":
    //         console.log("Congratulations, you have choosen Bulbasuar!")
    //         return new Trainerspokemon("Bulbasaur", 60, 40, 25, 3, 5,)
    // }
}



class Trainer {
    constructor(tname){
        this.tname = tname
        this.inventory = ["Oran Berry"]
    }
}

const player = new Trainer(tname)

class Wildpokemon {
    constructor(wname, hp, ap, atk, crt, wlevel,){
        this.wname = wname;
        this.hp = hp;
        this.ap = ap;
        this.atk = atk;
        this.crt = crt;
        this.wlevel = wlevel
        this.item = "Oran Berry"
        this.itemdescription = "it seems this berry will fully heal your pokemon."
    }
}

function wlevel() {
    Math.floor((Math.random()*5)+3)
} 

const pidgey = new Wildpokemon("Pidgey", 50, 50, 25, 2, wlevel)
const pikachu = new Wildpokemon("Pikachu", 75, 50, 30, 3, wlevel)
const rattata = new Wildpokemon("Rattata", 50, 25, 20, 1, wlevel)
const enemies = [pidgey, pikachu, rattata]

chosenStarterPokemon = chooseStarter(Trainerspokemon)

while(isAlive) {
    const action = readline.keyIn("Would you like to [w] Walk into the grass, [p] Print Inventory to see pokemon and items, or [q] Quit?" , {limit:'$<w,p,q>'})

    if(action === "w") {
        walk()
    }else if (action === "p") {
        printInventory()
        
    }else if(action === "q") {
        isAlive = false
        console.log("You quit your adventure.") 
    }
}

function walk() {
    const random = Math.floor(Math.random()*4)
    if(random === 0) {
        enemyEncounter()
    }else {
        console.log("You walk safely, lets go find some more pokemon!")
    }
}

function printInventory() {
    console.log("lets check our bag. " + player.inventory)
    console.log(Trainerspokemon)
}

// Maybe need an if else statement for shiny enemies
function enemyEncounter() {
    const random = Math.floor(Math.random() * enemies.length)
    const enemy = enemies[random]
    console.log(enemy)
    const shinyEnemy = Math.floor(Math.random()*12)
    if (enemy === shinyEnemy) {
        console.log("you found a Shiny" + wildPokemonName + "!!!")
    }else {
        console.log("you found a" + wildPokemonName + ".")
    }
    fight(enemy)
}



function fight(enemy){
    console.clear()
    wildPokemonName = enemy.wname
    wildPokemonAtk = enemy.atk
    wildPokemonHP = enemy.hp
    // wildPokemonHit = enemy.hit
    wildPokemonCrt = enemy.crt
    wildPokemonItem = enemy.item
    wildPokemonItemDescription = enemy.itemDescription
    engage = readline.keyIn(`You've encountered  ${wildPokemonName}.  (f) Fight or (r) Run? `,{limit:'$<f,r>'})
    engage = engage.toLowerCase()
    if (engage === 'f') {
        // console.clear()
        
        attack()
    }else if (engage === 'r') {
        runAway()
    }
}

function attack() {
    console.log("attack")
    while(isFighting) {
                chosenStarterPokemon = Trainerspokemon
                let attackchance = getRandomInt(2)
                let trainersPokemonName = Trainerspokemon.pname
                let trainersPokemonAtk = Trainerspokemon.atk
                // let trainersPokemonHit = Trainerspokemon.hit
                let trainersPokemonCrt = Trainerspokemon.crt
                let trainersPokemonAttack = ""
                let wildPokemonsAttack = ""
                // let trainersPokemonStrike = Math.floor((Math.random()*trainersPokemonHit)+1)
                let trainersPokemonCrit = Math.floor((Math.random()*trainersPokemonCrt)+1)
                // let wildPokemonStrike = Math.floor((Math.random()*wildPokemonHit)+1)
                let wildPokemonCrit = Math.floor((Math.random()*wildPokemonCrt)+1)
                if (attackchance === 1) {
                    if (trainersPokemonCrit === 1) {
                        trainersPokemonAttack = `land a critical attack and dealt  ${trainersPokemonAtk *2}   points of damage. The `
                        wildPokemonHP = wildPokemonHP - (trainersPokemonAtk * 2)
                        if(wildPokemonHP < 0){
                            wildPokemonHP = 0
                        }
                    }else {
                        trainersPokemonAttack = `attack the ${wildPokemonName} and dealt ${trainersPokemonAtk} points of damage. The `
                        wildPokemonHP = wildPokemonHP - trainersPokemonAtk
                        if(wildPokemonHP < 0){
                            wildPokemonHP = 0
                        }
                }
                }else {
                    trainersPokemonAttack = `miss the ${wildPokemonName} and dealt no damage.`
                }
                if (attackchance === 1) {
                    if (wildPokemonCrit === 1) {
                        wildPokemonAtk = wildPokemonAtk * 2
                        Trainerspokemon.hp = Trainerspokemon.hp - wildPokemonAtk
                        wildPokemonsAttack = `lands a critical attack dealing ${wildPokemonAtk} points of damage to your ${trainersPokemonName}.`
                    }else {
                        Trainerspokemon.hp = Trainerspokemon.hp - wildPokemonAtk
                        wildPokemonsAttack = ` attacks dealing ${wildPokemonAtk} points of damage to you.`
                    }
                }else {
                    wildPokemonsAttack = `the ${wildPokemonName}'s attack misses. `
                }
                if(Trainerspokemon.hp > 0) {
                    if(wildPokemonHP > 0) {
                        if (attackCounter > 4) {
                            console.clear()
                            attackCounter = 0
                        }
                        engage = readline.keyIn(`You dealt ${trainersPokemonAttack} to the ${wildPokemonName} and it dealt ${wildPokemonsAttack} .Your current HP is ${Trainerspokemon.hp} and the ${wildPokemonName}'s current HP is ${wildPokemonHP}. (f) Attack again or (r)Run? `,{limit:'$<f,r>'})
                        attackCounter ++
                    }else {
                        isFighting = false
                        readline.keyInPause(newItem + `it seems the ` + wildPokemonName + `has fai and droped something on the ground!`)
                        wildPokemonDrop()
                        victory()
                    }
            }else { 
            faintedtrainersPokemon()
        }
    }
}

function runAway(){
    let chance = Math.floor((Math.random()*2)+1)
    while(engage === 'r') {
        if (chance !== 1) {
            Trainerspokemon.hp = Trainerspokemon.hp - wildPokemonAtk
            engage = 'f'
            engage = readline.keyIn(`You tried to run but the ${wildPokemonName} attacks dealing ${wildPokemonAtk} hit points. Your current HP is ${Trainerspokemon.hp} and the ${wildPokemonName}'s current HP is ${wildPokemonHP}. (f) Attack or (r)Run? `,{limit:'$<f,r>'})
            if (engage === 'f') {
                attack()
            }
        }else {
            readline.keyInPause(`You managed to get away.`)
            engage = ''
        }
    }
}

function wildPokemonDrop() {
     if (wildPokemonHP = 0) {
        inventory.push(wildPokemonItem)
        readline.keyInPause(newItem + wildPokemonItem + ": " + wildPokemonItemDescription)
    }
}

function faintedtrainersPokemon() {
    if (Trainerspokemon.hp = 0){
    console.clear()
    engage = ''
    readline.keyInPause(`Your ${trainersPokemonName} fainted, however you can always start again to see if the odds are on your side!`)
        process.exit()
    }
}
// add a function that makes the value of max level true on lvl 10. add into victory function winLvl()
// function victory() {
//     console.clear()
//     // winLvl
//     // if statement for max lvl being true, keyinpause winning statement. maxLevel = readline.keyInPause(`Congragulations `+ tname +` on getting your `+ trainersPokemonName +` to max level, feel free to continue playing or quit out at this point!`)
//     process.exit()
// }

// while (trainersPokemon.hp > 0 && defeated !== true) {
//     console.clear()
//     walk()}