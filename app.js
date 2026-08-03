const startButton = document.querySelector("#start-button");

const startScreen = document.querySelector("#start-screen");
const difficultyScreen = document.querySelector("#difficulty-screen");
const gameScreen = document.querySelector("#game-screen");

const easyButton = document.querySelector("#easy-button");
const mediumButton = document.querySelector("#medium-button");
const hardButton = document.querySelector("#hard-button");

const levelName = document.querySelector("#level-name");

const originalImage = document.querySelector("#original-image");
const changedImage = document.querySelector("#changed-image");
const scoreDisplay = document.querySelector("#score");
const differencesDisplay = document.querySelector("#differences-left");



const gridContainer = document.querySelector("#grid-container");

let correctDifferences = [2, 6, 9];

let score = 0;
let gridSize = 9;
let differencesLeft = 3;

function createGrid() {

    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(gridSize)}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${Math.sqrt(gridSize)}, 1fr)`;

    for (let i = 1; i <= gridSize; i++) {

        const box = document.createElement("div");

        box.classList.add("grid-box");

        box.dataset.number = i;


        box.addEventListener("click", function () {

            const boxNumber = Number(box.dataset.number);

            if (correctDifferences.includes(boxNumber)) {

                score++;
                 differencesLeft--;
                scoreDisplay.textContent = score;
                differencesDisplay.textContent = "Differences left: " + differencesLeft;


                //console.log("Score:", score);

                box.style.backgroundColor = "rgba(0,255,0,0.3)";

            }

        });


        gridContainer.appendChild(box);

    }
}

createGrid();
// Start Button
startButton.addEventListener("click", function () {

    startScreen.style.display = "none";

    difficultyScreen.style.display = "block";

});


// Easy Level
easyButton.addEventListener("click", function () {

    difficultyScreen.style.display = "none";

    gameScreen.style.display = "block";

    levelName.textContent = "Easy Level";

    originalImage.src = "./imges/easy one.png";
    changedImage.src = "./imges/easy two.png";
    gridSize = 9;
createGrid();

});


// Medium Level
mediumButton.addEventListener("click", function () {

    difficultyScreen.style.display = "none";

    gameScreen.style.display = "block";

    levelName.textContent = "Medium Level";

    originalImage.src = "./imges/mid one .png";
    changedImage.src = "./imges/mid two.png";
    gridSize = 9;
createGrid();
     
    correctDifferences = [2, 3, 7, 8, 9];

});


// Hard Level
hardButton.addEventListener("click", function () {

    difficultyScreen.style.display = "none";

    gameScreen.style.display = "block";

    levelName.textContent = "Hard Level";

    originalImage.src = "./imges/difcult one.png";
    changedImage.src = "./imges/difuclt two .png";
gridSize = 25;
createGrid();
correctDifferences = [2, 7, 9, 10, 12,20,21,22,23,24];
});