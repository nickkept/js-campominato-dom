const btnGenerateGrid = document.getElementById(`btn_generate_grid`);
const select = document.querySelector("select");
let bombs;
btnGenerateGrid.addEventListener(`click`, function () {
    // console.log(this);
    // const diffSelect = document.querySelector(`#diff-select`) ;
    // console.log(select);
    // console.log(numCells);
    // const numCells = document.getElementById(`num-cells`);
    if (select.value == 7) {
        alert(`Are you sure?`)
    } else if (select.value == 10) {
        alert(`Don't be a pu**y`)
    }
    const difficulty = select.value;
    // console.log(difficulty);
    bombs = generateBombsList( difficulty );
    generateGrid(difficulty);
    // console.log(numCells.value);
});

function generateGrid(difficulty) {
    const gridContainer = document.querySelector(`.grid-container`);
    gridContainer.innerHTML = ``;
    const totalCells = difficulty * difficulty;

    for (let i = 0; i < totalCells; i++) {
        const newCell = document.createElement(`div`);
        newCell.classList.add(`grid-cell`);
        newCell.style.flexBasis = `calc(100% / ${difficulty})`;
        newCell.style.width = `calc(100% / ${difficulty})`;
        newCell.textContent = i + 1;
        newCell.dataset.numCella = i + 1;
        console.log(newCell.dataset.numCella);
        newCell.addEventListener("click", onCellClick);
        // newCell.innerHTML = generateRandomNumb( 1, totalCells );
        // newCell.addEventListener(`click`, function (onCellClick) {
        //     // this.classList.toggle("bg-success");
        //     console.log(i)
        // });
        gridContainer.append(newCell);
    }
}
function onCellClick() {
    const numCella = +this.dataset.numCella;

    if (bombs.includes(numCella)) {
        alert("Hai trovato una bomba!!! Game Over!");
    }
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateBombsList(totalCells) {
        const bombsList = [];

        while (bombsList.length < 16) {
            // random numb
            const num = generateRandomNumber(1, totalCells);
            if (!bombsList.includes(num)) {
                bombsList.push(num);
            }
        }

        return bombsList;
    }
}