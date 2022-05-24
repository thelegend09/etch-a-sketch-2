let PenColorCurrent = "#333"
let PenColorPrevious = "#333"
let PenColorTwiceRemoved = "#333"


// main
const main = document.querySelector("main");
const gridContainer = document.querySelector(".grid-container");


// SET PEN COLORS
// https://developer.mozilla.org/en-US/docs/web/api/window/getcomputedstyle
// const penColorArray = [ "#586ba4", "#324376", "#f5dd90", "#f68e5f", "#f76c5e", 
//  "#b9e3c6", "#59c9a5", "#d81e5b", "#23395b", "#fffd98"];

const penColors = Array.from(document.querySelectorAll(".pen-color"));

penColors.forEach(penColor => penColor.addEventListener("click", () => {
    let actualBackgroundColor = window.getComputedStyle(penColor);
    currentPenColor = actualBackgroundColor.getPropertyValue("color");
    // main.style.backgroundColor = currentPenColor;

}));



//  SET GRID COLORS

const gridColors = Array.from(document.querySelectorAll(".grid-color"));

gridColors.forEach(gridColor => gridColor.addEventListener("click", () => {
    let actualBackgroundColor = window.getComputedStyle(gridColor);
    gridContainer.style.backgroundColor = actualBackgroundColor.getPropertyValue("color");
}));



// MODIFIER KEYS BUTTONS

const toggleModifierKeys = document.querySelector(".mod-keys");
const modifierKeysSection = document.querySelector(".modifier-keys-section");

toggleModifierKeys.addEventListener("click", () => {
    modifierKeysSection.classList.toggle("greyed-out")

});

// On mouseover, add a new class to the square
function mouseoverMagic() {
    const items = Array.from(document.querySelectorAll('.grid-item'));

    items.forEach(item => item.addEventListener('mouseover', () => {

        if (isModKeysActive = true) {
            if (window.event.ctrlKey) {
                item.classList.remove("colorItRed");
                item.classList.remove("colorItYellow");
                item.classList.add("colorItBlue");
            } else if (window.event.shiftKey) {
                item.classList.add("colorItRed")
                item.classList.remove("colorItYellow");
                item.classList.remove("colorItBlue");
            } else {
                item.classList.add("colorItYellow")
                item.classList.remove("colorItRed");
                item.classList.remove("colorItBlue");
            }
        }


    }));
}