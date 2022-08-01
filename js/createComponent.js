const CreateComponent = () => {
    try {
        const container = document.querySelector('.container')
        const display = createElement('p', 'display isColored hasShadow', 'display')
        const buttonsContainer = createElement('div', 'buttons-container')
        const addButton = createElement('button', 'add', 'add') 
        const removeButton = createElement('button', 'remove', 'remove')
        const resetButton = createElement('button', 'reset', 'reset')

        display.textContent = "0"
        addButton.textContent = "+1"
        removeButton.textContent = "-1"
        resetButton.textContent = "Reset"

        buttonsContainer.append(addButton, removeButton, resetButton)
        container.append(display, buttonsContainer)
    } catch (e) {
        console.log(e)
    }
}