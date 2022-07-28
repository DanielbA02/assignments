function sortedOfAge(arr){
    arr.reduce(function(final, age){
        if(age > 18){
            final.listAge++
        }
        return final
    }, {listAge: 0})
    
    .map(people => `<li> ${people.firstName}  ${people.lastName} is ${people.age} </li>`)
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/
