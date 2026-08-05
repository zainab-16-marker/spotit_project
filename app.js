const startButton = document.querySelector("#start-button");

const startScreen = document.querySelector("#start-screen");
const difficultyScreen = document.querySelector("#difficulty-screen");
const gameScreen = document.querySelector("#game-screen");

const easyButton = document.querySelector("#easy-button");
const mediumButton = document.querySelector("#medium-button");
const hardButton = document.querySelector("#hard-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const levelName = document.querySelector("#level-name");

const originalImage = document.querySelector("#original-image");
const changedImage = document.querySelector("#changed-image");
const scoreDisplay = document.querySelector("#score");
const differencesDisplay = document.querySelector("#differences-left");
const timerDisplay = document.querySelector("#timer");

const resultIcon = document.querySelector("#result-icon");
const gridContainer = document.querySelector("#grid-container");
const resultScreen = document.querySelector("#result-screen");
const resultMessage = document.querySelector("#result-message");
const finalScore = document.querySelector("#final-score");

const timerSound = new Audio("./sounds/time.wav");
const winSound = new Audio("./sounds/win.wav");
const loseSound = new Audio("./sounds/loss.wav");
let correctDifferences = [2, 6, 9];

let score = 0;
let gridSize = 9;
let differencesLeft = 0;
let time = 60;
let timer;
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
                 box.style.pointerEvents = "none";
                scoreDisplay.textContent = score;
                differencesDisplay.textContent = differencesLeft;
                if (differencesLeft === 0) {

    clearInterval(timer);

    gameScreen.style.display = "none";

    resultScreen.style.display = "block";

    
    resultMessage.textContent = "You Win! 🎉";
    
resultIcon.textContent = "⭐🎊✨";
finalScore.textContent = "Score: " + score;
winSound.play();
confetti();
}


                //console.log("Score:", score);

                box.style.backgroundColor = "rgba(46,196,182,0.5)";

            }

        });


        gridContainer.appendChild(box);

    }
}

createGrid();


function startTimer() {
 
    clearInterval(timer);

    timer = setInterval(function () {

        time--;

        timerDisplay.textContent = time;
        timerSound.play();
        


        if (time <= 10 && time > 0) {

            timerDisplay.style.color = "#EF4444";
            timerDisplay.style.textShadow = "0 0 10px #EF4444";

        } else {

            timerDisplay.style.color = "#22D3EE";
            timerDisplay.style.textShadow = "0 0 10px #22D3EE";

        }


        if (time <= 0) {

            clearInterval(timer);

            timerDisplay.textContent = 0;
            loseSound.play();

            gameScreen.style.display = "none";

            resultScreen.style.display = "block";

            resultMessage.textContent = "Time's Up! 😢";

            resultIcon.textContent = "⏰";

            finalScore.textContent = "Score: " + score;
            

        }

    }, 1000);

}
// Start Button
startButton.addEventListener("click", function () {

    startScreen.style.display = "none";

    difficultyScreen.style.display = "block";

});


// Easy Level
easyButton.addEventListener("click", function () {

    score = 0;
    scoreDisplay.textContent = score;

    correctDifferences = [2, 6, 9];

    difficultyScreen.style.display = "none";

    gameScreen.style.display = "block";

    levelName.textContent = "Easy Level";

    originalImage.src = "./imges/easy one.png";
    changedImage.src = "./imges/easy two.png";

    differencesLeft = 3;
   differencesDisplay.textContent = differencesLeft;

    gridSize = 9;
    createGrid();

    time = 18;
    timerDisplay.textContent = time;

    startTimer();

});


// Medium Level
mediumButton.addEventListener("click", function () {

    difficultyScreen.style.display = "none";

    gameScreen.style.display = "block";

    levelName.textContent = "Medium Level";

    originalImage.src = "./imges/mid one .png";
    changedImage.src = "./imges/mid two.png";
    differencesLeft = 5;
differencesDisplay.textContent = differencesLeft;
    gridSize = 9;
createGrid();
     time = 15;
timerDisplay.textContent = time;

startTimer();

    correctDifferences = [2, 3, 7, 8, 9];

});


// Hard Level
hardButton.addEventListener("click", function () {

    difficultyScreen.style.display = "none";

    gameScreen.style.display = "block";

    levelName.textContent = "Hard Level";

    originalImage.src = "./imges/difcult one.png";
    changedImage.src = "./imges/difuclt two .png";
    differencesLeft = 7;
differencesDisplay.textContent = differencesLeft;
gridSize = 25;
createGrid();
time = 20;
timerDisplay.textContent = time;

startTimer();

correctDifferences = [2, 7,8, 9, 10, 12,20,21,22,23,24];
});


backButton.addEventListener("click", function () {

    clearInterval(timer);

    gameScreen.style.display = "none";

    difficultyScreen.style.display = "block";

});
restartButton.addEventListener("click", function () {

    clearInterval(timer);

    resultScreen.style.display = "none";

    startScreen.style.display = "block";

    score = 0;
    scoreDisplay.textContent = score;

    time = 20;
    timerDisplay.textContent = time;

    differencesLeft = 0;
   differencesDisplay.textContent = 0;
});