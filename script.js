


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
const gridColors  = Array.from(document.querySelectorAll(".grid-color"));

gridColors.forEach(gridColor => gridColor.addEventListener("click", () => {
    let actualBackgroundColor = window.getComputedStyle(gridColor);
    gridContainer.style.backgroundColor = actualBackgroundColor.getPropertyValue("color");
}));



