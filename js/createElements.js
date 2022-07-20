const CreateElements = () => {
    const container = document.querySelector('.container')
    const display = document.createElement('p')
    const buttonsContainer = document.createElement('div')
    const addButton = document.createElement('button')
    const removeButton = document.createElement('button')
    const resetButton = document.createElement('button')

    display.id = "display"
    display.className = "display isColored hasShadow"
    display.textContent = "0"
    buttonsContainer.className = "buttons-container"
    addButton.id = "add"
    addButton.textContent = "+1"
    removeButton.id = "remove"
    removeButton.textContent = "-1"
    resetButton.id = "reset"
    resetButton.textContent = "Reset"

    buttonsContainer.append(addButton, removeButton, resetButton)
    container.append(display, buttonsContainer)
}