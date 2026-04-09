const grid = document.querySelector("#grid");

function darken(box) {
    box.style.opacity -= 0.1;
}

function createGrid(squareSize) {
    for (let row = 0; row < squareSize; row++) {
        for (let col = 0; col < squareSize; col++) {
            let div = document.createElement("div");
            div.style.backgroundColor = "#e5e5e5";
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.opacity = 1;
            div.className = "box";
            div.addEventListener('mouseenter', () => {
                darken(div);
            })
            grid.appendChild(div);
        }
    }
}

createGrid(16);