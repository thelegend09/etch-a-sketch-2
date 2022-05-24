// main
const main = document.querySelector("main");




// INITIALIZE COLORS
let PenColorCurrent = "#000"
let PenColorPrevious = "#000"
let PenColorTwiceRemoved = "#000"



// SET PEN COLORS (https://developer.mozilla.org/en-US/docs/web/api/window/getcomputedstyle)

const penColors = Array.from(document.querySelectorAll(".pen-color"));
const iconTwiceRemovedColor = document.querySelector(".twice-removed-color");
const iconPreviousColor = document.querySelector(".previous-color");


// What happens when I click on a Pen color
penColors.forEach(penColor => penColor.addEventListener("click", () => {
    let actualBackgroundColor = window.getComputedStyle(penColor);
    colorHistory();
    PenColorCurrent = actualBackgroundColor.getPropertyValue("color");
    console.log(currentPenColor);

}));

// Make changes to the modifier keys section (if they not greyed out)
function colorHistory() {
    if (!(modifierKeysSection.classList.contains("greyed-out"))) {
        PenColorTwiceRemoved = PenColorPrevious;
        PenColorPrevious = PenColorCurrent;
        iconPreviousColor.style.color = PenColorPrevious;
        iconTwiceRemovedColor.style.color = PenColorTwiceRemoved;
    }

};



//  SET GRID COLORS
const gridColors = Array.from(document.querySelectorAll(".grid-color"));
const gridContainer = document.querySelector(".grid-container");

// What happens when I click on a Grid color
gridColors.forEach(gridColor => gridColor.addEventListener("click", () => {
    let actualBackgroundColor = window.getComputedStyle(gridColor);
    gridContainer.style.backgroundColor = actualBackgroundColor.getPropertyValue("color");
}));



// MODIFIER KEYS BUTTONS
const toggleModifierKeys = document.querySelector(".mod-keys");
const modifierKeysSection = document.querySelector(".modifier-keys-section");


toggleModifierKeys.addEventListener("click", () => {
    iconPreviousColor.style.color = "#808080"
    iconTwiceRemovedColor.style.color = "#808080"
    modifierKeysSection.classList.toggle("greyed-out")

});


// SLIDER (https://www.w3schools.com/howto/howto_js_rangeslider.asp)
var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");

buildSquares(slider.value)

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    removeLastChild(gridContainer);
    buildSquares(this.value);
}

function removeLastChild(myNode) {
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

}




// DRAWING 



function buildSquares(squareNumber) {
    if (squareNumber > 100) {
        alert("Try something lower than 100.")
        numberOfSquares = prompt("How many squares do you want?");
        buildSquares(numberOfSquares);
        return
    }

    squaredSquareNumber = squareNumber ** 2

    for (let x = 0; x < squaredSquareNumber; x++) {
        const gridElement = document.createElement('div');
        gridContainer.appendChild(gridElement);
        gridElement.classList.add("grid-item");
    }

    gridContainer.style.gridTemplateColumns = "repeat(" + squareNumber + ", 1fr)";

    mouseoverMagic();
}




function mouseoverMagic() {
    const items = Array.from(document.querySelectorAll('.grid-item'));

    items.forEach(item => item.addEventListener('mouseover', () => {
        if (isModKeysActive = true) {
            if (window.event.ctrlKey) {
                item.style.backgroundColor = PenColorPrevious;
            } else if (window.event.shiftKey) {
                item.style.backgroundColor = PenColorTwiceRemoved;
            } else {
                item.style.backgroundColor = PenColorCurrent;
            }
        }
        else {
            item.style.backgroundColor = PenColorCurrent;
        }

    }));
}



// GET RANDOM COLOR
//  get random number 
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function randomColor() {
    return 'rgb(' + random(0, 255) + ', ' + random(0, 255) + ', ' + random(0, 255) + ')';
}