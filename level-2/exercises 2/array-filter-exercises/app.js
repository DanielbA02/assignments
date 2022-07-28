function fiveAndGreaterOnly(arr) {
    fiveAndGreater = arr.filter(function(number){
        return number >= 5
    })
    console.log(fiveAndGreater)
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr) {
    evenNums = arr.filter(function(num){
        if (num % 2 === 0){
            return num
        }
    })
    console.log(evenNums)
}

console.log(evensOnly([3, 6, 8, 2]));

function fiveCharactersOrFewerOnly(arr) {
    smallWords = arr.filter(function(str){
        if (str.length <= 5){
            return str
        }
    })
    console.log(smallWords)
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

function peopleWhoBelongToTheIlluminati(arr){
    inDaClub = arr.filter(function(person){
        if (person.member){
            return person
        }
    })
    console.log (inDaClub)
}

console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

function ofAge(arr){
    oldEnough = arr.filter(function(person){
        if (person.age >= 18){
            return person
        }
    })
    console.log(oldEnough)
}

console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));