# Etch-a-Sketch

This is the "Etch-a-Sketch" project assigment from the Foundation program of The Odin Project. See [here](https://www.theodinproject.com/lessons/foundations-etch-a-sketch#assignment).

## Features
- [x] Etching in black
- [x] Etching in different colors
- [x] Etching with a random color
- [x] Etching with different colors using keyboard shortcuts
- [x] Toggle shortcuts
- [x] Change grid size
- [x] Nice UI
- [x] Rickroll (try middle clicking somewhere)
- [x] Change grid color


## What I learned
- In Javascript, if you want to get (let’s say) the color of an item by using the property of a variable you obtained with document.querySelector, you will only get the inline style, not the CSS.
```css
p {color: blue;}
```
```javascript
const textColor = document.querySelector("p");
console.log(textColor.style.color); 
// Expected result "blue" or the HEX or RGB equivalent. 
// Actual result = ""
```
You actually have to get the computed style:
```javascript
const textColor = document.querySelector("p");
let realColor = window.getComputedStyle(textColor);
console.log(realColor.getPropertyValue("color"));
// Result = "rgb(0, 0, 255)"
```
- I learned how to toggle classes (for the modifier keys)
- I learned how to generate colors at random
- I learned about CSS transitions
- I learned how to use modifier keys during clicks in Event listeners.


## What I need to work on
- I need to really master arrow functions
- I need to commit more often
- I need to make more meaningful commit messages
