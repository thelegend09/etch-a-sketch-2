// main
const main = document.querySelector("main");




// INITIALIZE COLORS
let PenColorCurrent = "#000"
let PenColorCtrl = "#000"
let PenColorShift = "#000"



// SET PEN COLORS (https://developer.mozilla.org/en-US/docs/web/api/window/getcomputedstyle)

const penColors = Array.from(document.querySelectorAll(".pen-color"));
const iconPenColorShift = document.querySelector(".pen-color-shift");
const iconPenColorCtrl = document.querySelector(".pen-color-ctrl");



// What happens when I click on a Pen color
penColors.forEach(penColor => penColor.addEventListener("click", () => {
    let actualBackgroundColor = window.getComputedStyle(penColor);

    if ((window.event.ctrlKey) && (!(modifierKeysSection.classList.contains("greyed-out")))) {
        PenColorCtrl = actualBackgroundColor.getPropertyValue("color");
        iconPenColorCtrl.style.color = PenColorCtrl;

    } else if ((window.event.shiftKey) && (!(modifierKeysSection.classList.contains("greyed-out")))) {
        PenColorShift = actualBackgroundColor.getPropertyValue("color");
        iconPenColorShift.style.color = PenColorShift;
    } else if (window.event.altKey) {
        
    }
    
    else { 
        PenColorCurrent = actualBackgroundColor.getPropertyValue("color");
        gridContainer.style.outlineColor = PenColorCurrent;
    }


}));

// Make changes to the modifier keys section (if they not greyed out)
function colorHistory() {
    if (!(modifierKeysSection.classList.contains("greyed-out"))) {
        PenColorShift = PenColorCtrl;
        PenColorCtrl = PenColorCurrent;


    }

};

// Make the hover color the same as the PenColorCurrent
// https://codepen.io/ybentz/pen/RwPoeqb

//  SET GRID COLORS
const gridColors = Array.from(document.querySelectorAll(".grid-color"));
const gridContainer = document.querySelector(".grid-container");
const gridItems = Array.from(document.querySelectorAll(".grid-item"))



// What happens when I click on a Grid color
gridColors.forEach(gridColor => gridColor.addEventListener("click", () => {
    let newBackgroundColor = window.getComputedStyle(gridColor);
    newBackgroundColor = newBackgroundColor.getPropertyValue("color");

    gridItems.forEach(gridItem => gridItem.style.backgroundColor = newBackgroundColor)



    // gridContainer.style.backgroundColor = 
}));



// MODIFIER KEYS BUTTONS
const toggleModifierKeys = document.querySelector(".mod-keys");
const modifierKeysSection = document.querySelector(".modifier-keys-section");


toggleModifierKeys.addEventListener("click", () => {
    iconPenColorCtrl.style.color = "#808080"
    iconPenColorShift.style.color = "#808080"
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

const backToWhite = document.querySelector("color-picker")



function mouseoverMagic() {
    const items = Array.from(document.querySelectorAll('.grid-item'));

    items.forEach(item => item.addEventListener("mouseover", () => {
        if (!(modifierKeysSection.classList.contains("greyed-out"))) {
            if (window.event.ctrlKey) {
                item.style.backgroundColor = PenColorCtrl;
            } else if (window.event.shiftKey) {
                item.style.backgroundColor = PenColorShift;
            } else {
                item.style.backgroundColor = PenColorCurrent;
            }
        } else {
            item.style.backgroundColor = PenColorCurrent;
        }

    }));
}



// GET RANDOM COLOR
//  get random number 

const btnRandom = document.querySelector(".random-color")

btnRandom.addEventListener("click", () => {
    let randomColor = getRandomColor();

    if ((window.event.ctrlKey) && (!(modifierKeysSection.classList.contains("greyed-out")))) {
        PenColorCtrl = randomColor
        iconPenColorCtrl.style.color = PenColorCtrl;

    } else if ((window.event.shiftKey) && (!(modifierKeysSection.classList.contains("greyed-out")))) {
        PenColorShift = randomColor
        iconPenColorShift.style.color = PenColorShift;
    } else {
        PenColorCurrent = randomColor
        gridContainer.style.outlineColor = PenColorCurrent;
    }
});

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function getRandomColor() {
    return 'rgb(' + random(0, 255) + ', ' + random(0, 255) + ', ' + random(0, 255) + ')';
}