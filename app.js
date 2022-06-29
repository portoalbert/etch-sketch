let maindiv = document.querySelector('#main');
let squareNumber = 64
let squareRoot = squareNumber * squareNumber


gridMaker();
function gridMaker () {
    for (let i = 0; i <squareRoot; i++){
        const div = document.createElement('div')
        div.classList.add("square");
        div.addEventListener('mouseover',changeBackground);
        maindiv.appendChild(div);
    }
}

const divSquares = document.querySelectorAll("div.square")

function changeBackground(event){
    event.target.style.backgroundColor = 'red'
    
    setTimeout (function() {
        event.target.style.backgroundColor = ''
    }, 5000)
}
function gridSizer () {
    a = prompt("How many columns would you like ?",16)
    squareNumber = a
    maindiv = document.querySelector('#main');
    gridMaker ();
}


