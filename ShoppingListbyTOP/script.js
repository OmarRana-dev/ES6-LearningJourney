const list = document.querySelector("ul")
const input = document.querySelector("input")
const addButton = document.querySelector("button")

addButton.addEventListener("click", function() {
    const listItem = document.createElement("li")
    const container = document.createElement("span")
    const deleteBtn = document.createElement("button")

    container.textContent = input.value;
    listItem.appendChild(container)
    deleteBtn.textContent = "Delete"
    listItem.appendChild(deleteBtn)
    list.appendChild(listItem)
    input.value = ""
    
    deleteBtn.addEventListener("click", function() {
        list.removeChild(listItem)
    })

    input.focus()
})



