// let output = document.querySelector('.output')
// let button = document.querySelectorAll('.button')

// let outputCalc = function(event) {
//     output.innerText = button.innerText
// }

let button0 = document.querySelector('.zero')
button0.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(0)
    output.append(newOutput)
})

let button1 = document.querySelector('.one')
button1.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(1)
    output.append(newOutput)
})

let button2 = document.querySelector('.two')
button2.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(2)
    output.append(newOutput)
})

let button3 = document.querySelector('.three')
button3.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(3)
    output.append(newOutput)
})

let button4 = document.querySelector('.four')
button4.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(4)
    output.append(newOutput)
})

let button5 = document.querySelector('.five')
button5.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(5)
    output.append(newOutput)
})

let button6 = document.querySelector('.six')
button6.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(6)
    output.append(newOutput)
}) 

let button7 = document.querySelector('.seven')
button7.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(7)
    output.append(newOutput)
})

let button8 = document.querySelector('.eight')
button8.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(8)
    output.append(newOutput)
})

let button9 = document.querySelector('.nine')
button9.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode(9)
    output.append(newOutput)
})

let buttonDecimal = document.querySelector('.decimal')
buttonDecimal.addEventListener('click', function outputCalc (){
    let output = document.querySelector('.output')
    let newOutput = document.createTextNode('.')
    output.append(newOutput)
})