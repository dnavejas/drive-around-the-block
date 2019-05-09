let increment = 4;
function tick() {
    let car = document.querySelector('#car'); //get reference to car
    drive(car, increment); //move the car left
}

function moveRight(element, increment) {
    let props = getProps(element); //get the positional information you need to move an element
    // console.dir(props); //check the console for what props has in it!
    element.style.left = (props.left + increment) + 'px'; //move element
}
function moveDown(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    // console.dir(props); //check the console for what props has in it!
    element.style.top = (props.top + increment) + 'px'; //move element
}
function moveLeft(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    // console.dir(props); //check the console for what props has in it!
    element.style.left = (props.left - increment) + 'px'; //move element
}
function moveUp(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    // console.dir(props); //check the console for what props has in it!
    element.style.top = (props.top - increment) + 'px'; //move element
}
function drive(element, increment){
    let props = getProps(element);
    console.log(props);
    console.log(element);
    console.log(increment);
    if (props.left >= 810 && props.top >= 100 && props.top <= 310){    
        element.setAttribute("class", "r90");
        moveDown(element, increment);
    } 
    else if(props.left <= 820 && props.top >= 260 && props.top <= 315 && props.left >= 115){
        element.setAttribute("class", "r180");
        moveLeft(element, increment);
    }
    else if(props.left <= 200 && props.top >= 120 && props.top <= 315){
        element.setAttribute("class", "r270");
        moveUp(element, increment);
    }
    else if(props.left >= 350 && props.top >= 100 && props.top <= 300){
        element.setAttribute("class", "");
        moveRight(element, increment);
    }
    
    
}
