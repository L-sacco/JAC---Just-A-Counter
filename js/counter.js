const Counter = () => {
    const container = document.querySelector('.container')
    const   subtitle = document.querySelector(`#subtitle`),
    add = document.querySelector(`#add`),
    remove = document.querySelector(`#remove`)
    var counter = 0
    document.addEventListener('click', (e) => {
        if (e.target.matches('button')) {

            let id = e.target.id
    
            if (id === "add") counter++
            else if (id === "remove") counter--
            else counter = 0
    
            display.textContent = counter
    
            if (counter >= 0 && counter < 9) {
                add.style.visibility = "visible"
                remove.style.visibility = "visible"
                subtitle.textContent = "There you go!"
            }
            if (counter > 9) subtitle.textContent = "Ok you can stop now."
            if (counter > 49) subtitle.textContent = "Are you serious? ..."
            if (counter > 99) subtitle.textContent = "Just stop!"
            if (counter > 149) subtitle.textContent = "Ok then, keep clicking, i don't care..."
            if (counter > 199) subtitle.textContent = "I said i don't care... You're wasting your time..."
            if (counter > 249) subtitle.textContent = "It's enough! Last warning! STOP CLICKING!"
            if (counter > 299 ) {
                subtitle.textContent = "Is there an end?"
                add.textContent = "Reset"
                remove.textContent = "Reset"
                container.style.flexDirection = "column-reverse"
            }
            if (counter > 319) {
                subtitle.textContent = "Ok, i give up! You won... :("
                container.style.flexDirection = "column"
                add.textContent = "+1"
                remove.textContent = "-1"
            }
            if (counter > 332) {
                subtitle.textContent = "Just joking, i won! :)"
                add.style.visibility = "hidden"
                remove.style.visibility = "hidden"
            }
        }
    })
}