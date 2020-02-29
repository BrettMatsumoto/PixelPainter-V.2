'use strict';

let mainCanvas = document.createElement('div');
mainCanvas.id = 'mainCanvas';
document.body.appendChild(mainCanvas);

let pixelMatrix = [];
let rowCount = 10;
let colCount = 10;

const makeCanvasGrid = (x, y) => {
    for (let i = 0; i < y; i++) {
        let column = document.createElement('div');
        let columArr = [];
        column.className = 'gridColumn';
        mainCanvas.appendChild(column);
        for (let j = 0; j < x; j++) {
            let row = document.createElement('div');
            row.className = 'gridRow';
            column.appendChild(row);
            columArr.push(row);
        }
    }
    pixelMatrix.push(columArr);
}
makeCanvasGrid(numRows, numColumns);