const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => {
    return arr.filter((person) => {
        return person.friendly
    })
}

const doMathSum = (a, b) => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}

Hi Kat Stark, how does it feel to be 40?

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs = (arr) => {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}

Hi Janice!

Welcome to Hawaii.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

let name = "Jacob";
let age = 20;
console.log("hello, my name is " + name + " and I am " + age + " years old.");

console.log(`hello, my name is ${name} and I am ${age} years old.`);

console.log(`hello, my name is ${name}. Next year, I will be ${age + 1} years old`);