const grid = document.querySelector("#grid");
const resizeButton = document.querySelector("#resize-button");
const shakeButton = document.querySelector("#shake-button")
const gridWidth = 640;


grid.style.width = `${gridWidth}px`;


function darken(box) {
    box.style.opacity -= 0.1;
}

function clean(boxes) {
    boxes.forEach(box => {
        box.style.opacity = 1;
    });
}

function createGrid(squareNumber) {
    //clear box before populating
    grid.innerHTML = "";
    const boxSize = gridWidth/squareNumber;

    //fill up the grid space
    for (let row = 0; row < squareNumber; row++) {
        for (let col = 0; col < squareNumber; col++) {
            let div = document.createElement("div");
            div.style.backgroundColor = "#e5e5e5";
            div.style.width = `${boxSize}px`;
            div.style.height = `${boxSize}px`;
            div.style.opacity = 1;
            div.className = "box";
            div.addEventListener("mouseenter", () => {
                darken(div);
            })
            grid.appendChild(div);
        }
    }
}

createGrid(16);

resizeButton.addEventListener("click", () => {
    const input = prompt("Enter a count of boxes per row 16-100", "16");
    let squareNumber = Number(input);

    if (squareNumber  < 16) {
        squareNumber = 16;
    } else if (squareNumber > 100) {
        squareNumber = 100;
    }
    createGrid(squareNumber);
})

shakeButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    clean(boxes);
})