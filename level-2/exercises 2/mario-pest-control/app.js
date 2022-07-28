const goombaForm = document.getElementById("goomba-form")
const bobombForm = document.getElementById("bobomb-form")
const cheepCheepForm = document.getElementById("cheep-cheep-form")

const goomba = document.getElementById("goomba")
const bobomb = document.getElementById("bobomb")
const cheepCheep = document.getElementById("cheepCheep")

const outputBox = document.getElementById("output")

const clear = document.getElementById("clear-button")
const submit = document.getElementById("submit-button")

function addAll(num1, num2, num3) {
    let num11 = parseInt(num1)*5
    let num22 = parseInt(num2)*7
    let num33 = parseInt(num3)*11

    return parseInt(num11) + Number(num22) + Number(num33)
}

submitBtn.addEventListener("click", event => {
    let goomba = goombainput.value
    let bomb = bombinput.value
    let cheep = cheepinput.value

    if(goomba === ""){
        alert("Please fill in the number of Goombas caught, if none type 0")
        return false
    } else if (bomb === ""){
        alert("Please fill in the number of Bop-ombs caught, if none type 0")
        return false
    } else if (cheep === ""){
        alert("Please fill in the number of Cheep-Cheeps caught, if none type 0")
        return false
    }

    let all = addAll(goomba,bomb,cheep)
    outputBox.append(all)
    cheepinput.value = ""
    bombinput.value = ""
    goombainput.value = ""
})

clearBtn.addEventListener("click", event => {
    outputBox.value = ""
})