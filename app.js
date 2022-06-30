let maindiv = document.querySelector('#main');
let squareNumber = 64
let squareRoot = squareNumber * squareNumber


gridMaker();
function gridMaker () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i <squareRoot; i++){
        const div = document.createElement('div')
        div.classList.add("square");
        div.addEventListener('mouseover',changeBackground);
        fragment.appendChild(div);
    }
    maindiv.appendChild(fragment);
}

function changeBackground(event){
    event.target.style.backgroundColor = 'black'
}
function gridSizer () {
    while (maindiv.hasChildNodes()){
        maindiv.removeChild(maindiv.firstChild);
    }
    gridMaker ();
}


