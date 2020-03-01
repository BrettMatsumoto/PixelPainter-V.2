'use strict';

const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = "Tupper's Self-Referential Formula";
document.body.appendChild(title);

const canvas = document.createElement('div');
canvas.id = 'canvas';
document.body.appendChild(canvas);

const makeCanvasMatrix = function (x, y) {

    for (let i = 0; i < x; i++) {
        let column = document.createElement('div');
        let columnArray = [];
        column.className = 'canvasCollumns';
        canvas.appendChild(column);
        for (let k = 0; k < y; k++) {
            let box = document.createElement('div');
            box.className = 'boxes';
            column.appendChild(box);
            columnArray.push(box);
        }
    }
};
makeCanvasMatrix(141, 17);

const description = document.createElement('h3');
description.id = 'description';
description.innerHTML = "The Tupper's Self-Referential Formula is found at {k < y < k + 17}, where the height of this graph is 17 and k equals the value found below."
document.body.appendChild(description);