const gridContainer = document.querySelector("#grid-container");

const correctDifferences = [3, 6, 9];

let score = 0;

for (let i = 1; i <= 9; i++) {
    const box = document.createElement("div");

    box.classList.add("grid-box");

    box.dataset.number = i;

    box.addEventListener("click", function () {

        const boxNumber = Number(box.dataset.number);

        if (correctDifferences.includes(boxNumber)) {
            score++;
            //console.log("Correct!");
            console.log("Score:", score);

            box.style.backgroundColor = "rgba(0,255,0,0.3)";
        } 
        else {
           // console.log("Wrong!");
        }

    });

    gridContainer.appendChild(box);
}