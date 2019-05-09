let increment = 8;
function tick() {
    let car = document.querySelector('#car'); //get reference to car
    moveUp(car, increment); //move the car left
}

function moveRight(element, increment) {
    let props = getProps(element); //get the positional information you need to move an element
    console.dir(props); //check the console for what props has in it!
    element.style.left = (props.left + increment) + 'px'; //move element
}
function moveDown(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    console.dir(props); //check the console for what props has in it!
    element.style.top = (props.top + increment) + 'px'; //move element
}
function moveLeft(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    console.dir(props); //check the console for what props has in it!
    element.style.left = (props.left - increment) + 'px'; //move element
}
function moveUp(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    console.dir(props); //check the console for what props has in it!
    element.style.top = (props.top - increment) + 'px'; //move element
}
function makeTurn(element){
    let props = getProps(element);
}
