let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let backgroundColor = document.querySelector("body");

btn1.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = "gray"
})
btn2.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = "white"
})
btn3.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = "blue"
})
btn4.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = "yellow"
})