const form = document.flightForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(form.firstName)
    console.log(form.lastName)

    console.log(form.gender.value)

    console.log(form.city.value)

    // console.log(form.dietary)

    const checkedInputs = []
    for(let i = 0; i < form.dietary.length; i++){
        if(form.dietary[i].checked){
            checkedInputs.push(form.dietary[i].value)
        }
    }
    console.log(checkedInputs)
})