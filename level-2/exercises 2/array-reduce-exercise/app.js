function total(arr) {
    arr.reduce(function(final, num) {
            final += num
            return final
        })
}

console.log(total([1,2,3]));

function stringConcat(arr) {
    arr.reduce(function(final, num) {
            final.push(num + " " + num)
            return final
        }, [])
}

console.log(stringConcat([1,2,3]));

function totalVotes(arr) {
    arr.reduce(function(final, voter) {
            if(voter.voted){
                final++
            }
            return final
        }, 0)
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters));

function shoppingSpree(arr) {
    arr.reduce(function(final, num) {
        final += num
        return final
    })
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

function flatten(arr) {
    arr.reduce(function(final, flat) {
        final.concat(flat), []})
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));

var voters = [
{name:'Bob' , age: 30, voted: true},
{name:'Jake' , age: 32, voted: true},
{name:'Kate' , age: 25, voted: false},
{name:'Sam' , age: 20, voted: false},
{name:'Phil' , age: 21, voted: true},
{name:'Ed' , age:55, voted:true},
{name:'Tami' , age: 54, voted:true},
{name: 'Mary', age: 31, voted: false},
{name: 'Becky', age: 43, voted: false},
{name: 'Joey', age: 41, voted: true},
{name: 'Jeff', age: 30, voted: true},
{name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    arr.reduce(function(final, voter){
        if(voter.voted){
            final.didVote++
        } else {
            final.didntVote++
        }
        return final
    }, { didVote: 0, didntVote: 0 })
}

console.log(voterResults(voters));