const btnGenerate = document.getElementById("btn_generate_grid");
const selectLevel = document.querySelector("[name='select-level']");
let bombs;

btnGenerate.addEventListener("click", function () {
    const difficulty = selectLevel.value;
    bombs = generateBombsList(+difficulty);
    generateCells(+difficulty);
});

function generateCells(numCelle) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.classList.add("d-none");
    gridContainer.innerHTML = "";

    for (let i = 0; i < numCelle; i++) {
        const newCell = document.createElement("div");
        const rowsNum = Math.sqrt(numCelle);
        newCell.classList.add("cell");
        newCell.style.width = 100 / rowsNum + "%";
        newCell.textContent = i + 1;
        newCell.dataset.numCella = i + 1;
        newCell.addEventListener("click", onCellClick);
        gridContainer.append(newCell);
    }

    gridContainer.classList.remove("d-none");
}

function onCellClick() {
    const numCella = +this.dataset.numCella;

    if (bombs.includes(numCella)) {
        alert("Hai beccato una bomba! RIP!");
        this.classList.add("active");
    } else {
        this.classList.toggle("active");
    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBombsList(numCelle) {
    const bombsList = [];
    while (bombsList.length < 16) {
        const num = generateRandomNumber(1, numCelle);
        if (!bombsList.includes(num)) {
            bombsList.push(num);
        }
    }

    return bombsList;
}