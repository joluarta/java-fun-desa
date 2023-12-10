// DESAFIO DIVS 👇
const btnBlue = document.getElementById('blue-div')
const btnRed = document.getElementById('red-div')
const btnGreen = document.getElementById('green-div')
const btnYellow = document.getElementById('yellow-div')

let booleanVariable = false
btnBlue.addEventListener('click', () => {
    if (booleanVariable == false) {
        btnBlue.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnBlue.style.backgroundColor = 'blue'
        booleanVariable = false
    }
})

btnRed.addEventListener('click', () => {
    if (booleanVariable == false) {
        btnRed.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnRed.style.backgroundColor = 'red'
        booleanVariable = false
    }
})

btnGreen.addEventListener('click', () => {
    if (booleanVariable == false) {
        btnGreen.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnGreen.style.backgroundColor = 'green'
        booleanVariable = false
    }
})

btnYellow.addEventListener('click', () => {
    if (booleanVariable == false) {
        btnYellow.style.backgroundColor = 'black'
        booleanVariable = true
    }
    else if (booleanVariable === true) {
        btnYellow.style.backgroundColor = 'yellow'
        booleanVariable = false
    }
})



// DESAFIO INPUT 👇
const input = document.getElementById('input')
input.addEventListener('input', () => {
    let globalVariable = ''
    if (input.value === 'a') {
        globalVariable = 'rosado'
        console.log(globalVariable)
    }
    if (input.value === 's') {
        globalVariable = 'naranja'
        console.log(globalVariable)
    }
    if (input.value === 'd') {
        globalVariable = 'celeste'
        console.log(globalVariable)
    }

})