function doubleNumbers(arr){
    doubleNum = arr.map(function(double){
        console.log(double * 2)
    })
}

console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
    stringArr = arr.map(function(num){
        return num.toString()
    })
}

console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr){
    properNames = arr.map(function(name){
        lowercase = name.toLowerCase()
        uppercase = lowercase[0].toUpperCase()
        proper =  uppercase + lowercase.substring(1,lowercase.length)
        return proper
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr){
    namesOnly = arr.map(function(profile) {
        return profile.name
    })
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))

function makeStrings(arr){
    matrixCheck = arr.map(function(profile) {
        if (profile.age > 21){
            return profile.name + " can go to the Matrix!"
        } else {
            return profile.name + " is underage!"
        }
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))

function readyToPutInTheDOM(arr){
    return arr.map((result) => {
        return "<h1>".concat(result.name).concat("</h1>").concat("<h2>").concat(result.age).concat("</h2>")
    })
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))