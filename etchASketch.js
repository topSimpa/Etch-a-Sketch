const grid = document.querySelector("#grid");
const resizeButton = document.querySelector("#resize-button");
const gridWidth = 640;


grid.style.width = `${gridWidth}px`;


function darken(box) {
    box.style.opacity -= 0.1;
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
    const squareNumber = Number(input);
    createGrid(squareNumber);
})
