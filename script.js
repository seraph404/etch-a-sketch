// define numbers
const MAX_RGB = 256;
const CONTAINER_SIZE = 600;

const container = document.querySelector('#container');
const newGridButton = document.querySelector('#new-grid');
newGridButton.addEventListener('click', createNewGrid);

container.style.width = CONTAINER_SIZE + "px";
container.style.height = CONTAINER_SIZE + "px";


function draw() {
    this.style.backgroundColor = "rgb(" + colorRandomizer() + ")";
}

function generateRGBValue() {
    return Math.floor(Math.random() * MAX_RGB);
}

function colorRandomizer() {
    return `${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()}`;
}

function createNewGrid() {
    let gridSize = prompt("Enter a grid size (max 100):");
    while (gridSize !== null && gridSize > 100) {
        gridSize = prompt("Too big! Enter a number under 100:")
    }
    container.innerHTML = '';
    drawGrid(gridSize);
}

function drawGrid(gridSize) {
    const divSize = (CONTAINER_SIZE / gridSize) - 2;
    gridSize = gridSize ** 2;

    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseenter', draw);
        
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        container.append(div);
    }
}

drawGrid(16);