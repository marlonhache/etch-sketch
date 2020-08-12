/*javascript*/
const container = document.querySelector('#container');
let celda, celdas, gridSize, totalWidth, celdaLado, bordersWidth; 
let cellColor = "#4056A1";
let colorFill = "mono"
//let gridSize;

container.addEventListener('mouseover',changeColor);
window.onresize = resizeCells;
createGrid();

function resizeCells() {
    bordersWidth = gridSize*2;
    celdas = document.getElementsByClassName('cells');
    totalWidth = document.getElementById('container').offsetWidth;
    celdaLado = ((totalWidth)-bordersWidth) / gridSize;
    for (let i=0; i<celdas.length; i++){
        celdas[i].style.width = celdaLado + 'px';
        celdas[i].style.height = celdaLado + 'px';
    }
}

function changeColor(){
    celdas = document.getElementsByClassName('cells');
    for (let i=0; i<celdas.length; i++){
        celdas[i].addEventListener('mouseover',()=>{
            switch(colorFill){
                case "mono":
                    celdas[i].style.backgroundColor = cellColor;
                    break;
                case "random":
                    celdas[i].style.backgroundColor = randomColors();
                    break;
            }
        })    
    }
}

function createGrid(){
    container.textContent = ''; //this removes all previous divs if there was a grid
    gridSize = document.getElementById('gridSize').value || 16;
    bordersWidth = gridSize*2;
    totalWidth = document.getElementById('container').offsetWidth;
    celdaLado = ((totalWidth)-bordersWidth) / gridSize;
    
    for (let i=0; i<(gridSize*gridSize); i++){
        celda = document.createElement('div');
        container.appendChild(celda);
        celda.classList.add('cells');
        celda.style.width = celdaLado + "px";
        celda.style.height = celdaLado + "px";
        celda.style.border = "1px solid #000000"
    }
}

function switchColors(){
    const switchBtnValue = document.getElementById('btn2').value;
    console.log(switchBtnValue);
    switch (switchBtnValue){
        case "mono":
            document.getElementById('btn2').value = "random";
            document.getElementById('btn2').innerHTML = "Monochromatic";
            colorFill = "random";
            break;
        case "random":
            document.getElementById('btn2').value = "mono";
            document.getElementById('btn2').innerHTML = "Random colors";
            colorFill = "mono";
            break;
    }
}

function randomColors(){
    let red, green, blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue= Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}