const CreateComponent = () => {
    try {
        const container = document.querySelector('.container')
        const display = createElement('p', 'display isColored hasShadow', 'display', '0')
        const buttonsContainer = createElement('div', 'buttons-container')
        const addButton = createElement('button', 'add', 'add', '+1') 
        const removeButton = createElement('button', 'remove', 'remove', '-1')
        const resetButton = createElement('button', 'reset', 'reset', 'Reset')

        buttonsContainer.append(addButton, removeButton, resetButton)
        container.append(display, buttonsContainer)
    } catch (e) {
        console.log(e)
    }
}