var button = document.querySelector("#clicker")
var counter = document.querySelector("#counter")
var buttonCount = localStorage.getItem("clicknum") || 0;

if (buttonCount){
    counter.textContent = buttonCount
} else {
    counter.textContent = "0"
}

console.log(button)

button.addEventListener("click", function(e){
    getNumber = counter.innerHTML
    getNumber ++
    counter.textContent = getNumber;
    localStorage.setItem("clicknum", getNumber)
    console.log(getNumber)
})

localstorage.setItem("count", "1");
localstorage.setItem(parseInt(localStorage.getItem("count")) + 1);

const count = JSON.parse(localStorage.getItem("count"))