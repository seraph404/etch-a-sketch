// set container size
let containerSize = 600;
const container = document.querySelector('#container');
container.style.width = containerSize + "px";
container.style.height = containerSize + "px";

// draw the grid on the page
function drawGrid(gridSize) {
    const divSize = (containerSize / gridSize) - 2;
    gridSize = gridSize ** 2;

    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement('div');
        
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        container.append(div);
    }
}

drawGrid(16);