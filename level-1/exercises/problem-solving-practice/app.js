const array = [3 , 6, 2, 56, 32, 5, 89, 32];
var greatest = 0;

for (i = 0; i <= greatest; i++) {
    if (array[i] > greatest) {
        var greatest = array[i];
    }
}
console.log(greatest);

let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!", "!"]

function isItHere(arr, char){
    for (i = 0; i < lettersWithStrings.length; i++){
        for(let j = 0; j < lettersWithStrings[i].length; j++) {
            if([i][j] = "T") {
                console.log(lettersWithStrings[i][j])
            }
        }
    }
}

isItHere(lettersWithStrings, "T")

function isDivisble(num1, num2){
    if(num1 % num2 === 0){
        console.log("is Divisble")
    } else {
        console.log("is not divisible")
    }
}
isDivisble( 10,5)