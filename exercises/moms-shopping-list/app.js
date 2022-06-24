// const form = document.addItem

// form.addEventListener("submit", function(event){
//     event.preventDefault()

//         let title = form.title.value
//         let listItem = document.createElement("listItem")
//         form.title.value = ""
//         listItem.textContent = title

//         const clearB = document.createElement("button")
//         clearB.setAttribute("id", "clear")
//         clearB.textContent = "X"
//         listItem.appendChild(clearB)
//         clearB.addEventListener("click", () => {
//             ul.removeChild(listItem)
//         })

//         const editB = document.createElement("button")
//         editB.setAttribute("id", "edit")
//         editB.textContent = "Edit"
//         listItem.appendChild(editB)

//         editB.addEventListener("click", () => {
//         const editI = document.createElement("input")
//         const saveB = document.createElement("button")
//         saveB.textContent = "Save"

//         listItem.removeChild(editB)
//         listItem.appendChild(editI)
//         editI.setAttribute("placeholder", listItem.textContent)
//         listItem.appendChild(saveB)
//         saveB.addEventListener("click", () => {

//             listItem.textContent = editI.value
//             listItem.appendChild(editB)
//             listItem.appendChild(clearB)
//         })
//     })
// })

const form = document.addItem

console.log(form)

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = form.title.value
    console.log(title)
    const listItem = document.createElement('li')
    console.log("List item created")
    form.title.value = ""
    listItem.textContent = title  
    
    
    document.getElementsByTagName("ul")[0].append(listItem)
    let delbtn = document.createElement("button")
    delbtn.textContent = "X"
    listItem.append(delbtn)
    delbtn.addEventListener("click", () => {
        listItem.remove("li");
    })
})