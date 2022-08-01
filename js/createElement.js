function createElement(type, classe, id) {
    try {
        const element = document.createElement(type)

        if (classe != undefined) element.className = classe
        if (id != undefined) element.id = id

        return element
    } catch (e) {
        console.log(e)
    }
}