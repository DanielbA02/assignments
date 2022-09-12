const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    return arr.map(people => {
        return `<h1>${people}</h1>`
    })
}

console.log(peopleElements(people))

// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
