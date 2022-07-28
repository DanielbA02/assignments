const form1 = document["form1"]
const form2 = document["form2"]
const form3 = document["form3"]

function add(firstNum, secondNum) {
    return parseInt(firstNum) + Number(secondNum)
    }

function sub(firstNum, secondNum) {
    return parseInt(firstNum) - Number(secondNum)
    }

function mult(firstNum, secondNum) {
    return parseInt(firstNum) * Number(secondNum)
    }

form1.addEventListener("submit", function(event){ 
    event.preventDefault()

    const firstNum = form1.firstNum.value
    const secondNum = form1.secondNum.value

    form1.firstNum.value = ""
    form1.secondNum.value = ""

    const h1 = document.createElement("h1")
    h1.textContent = firstNum + "+" + secondNum + " " + "= " + (add(firstNum,secondNum))
    document.getElementsByTagName("body")[0].append(h1)
})

form2.addEventListener("submit", function(event){ 
    event.preventDefault()

    const firstNum = form2.firstNum.value
    const secondNum = form2.secondNum.value

    form2.firstNum.value = ""
    form2.secondNum.value = ""

    const h1 = document.createElement("h1")
    h1.textContent = firstNum + "-" + secondNum + " " + "= " + (sub(firstNum,secondNum))
    document.getElementsByTagName("body")[0].append(h1)
})

form3.addEventListener("submit", function(event){ 
    event.preventDefault()

    const firstNum = form3.firstNum.value
    const secondNum = form3.secondNum.value

    form3.firstNum.value = ""
    form3.secondNum.value = ""

    const h1 = document.createElement("h1")
    h1.textContent = firstNum + "*" + secondNum + " " + "= " + (mult(firstNum,secondNum))
    document.getElementsByTagName("body")[0].append(h1)
})