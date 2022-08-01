function createElement(type, classe, id, text) {
    try {
        const element = document.createElement(type)

        if (classe != undefined) element.className = classe
        if (id != undefined) element.id = id
        if (text != undefined) element.textContent = text

        return element
    } catch (e) {
        console.log(e)
    }
}