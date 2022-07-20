const Counter = () => {
    const   container = document.querySelector('.container'),
            display = document.querySelector('#display'),
            subtitle = document.querySelector(`#subtitle`),
            addButton = document.querySelector(`#add`),
            removeButton = document.querySelector(`#remove`)
    var counter = 0

    document.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            let id = e.target.id
    
            if (id === "add") counter++
            else if (id === "remove") counter--
            else counter = 0
    
            display.textContent = counter
            
            // Easter egg
            if (counter >= 0 && counter < 10) {
                addButton.style.visibility = "visible"
                removeButton.style.visibility = "visible"
                subtitle.textContent = "There you go!"
            }
            if (counter == 10) subtitle.textContent = "Ok you can stop now."
            if (counter == 50) subtitle.textContent = "Are you serious? ..."
            if (counter == 100) subtitle.textContent = "Just stop!"
            if (counter == 130) subtitle.textContent = "Ok then, keep clicking, i don't care..."
            if (counter == 170) subtitle.textContent = "I said i don't care... You're wasting your time..."
            if (counter == 200) subtitle.textContent = "It's enough! Last warning! STOP CLICKING!"
            if (counter == 230) {
                subtitle.textContent = "Is there an end?"
                addButton.textContent = "Reset"
                removeButton.textContent = "Reset"
                container.style.flexDirection = "column-reverse"
            }
            if (counter == 280) {
                subtitle.textContent = "Ok, i give up! You won... :("
                container.style.flexDirection = "column"
                addButton.textContent = "+1"
                removeButton.textContent = "-1"
            }
            if (counter == 300) {
                subtitle.textContent = "Just joking, i won! :)"
                addButton.style.visibility = "hidden"
                removeButton.style.visibility = "hidden"
            }
        }
    })
}