let increment = 6;
function tick() {
    let car = document.querySelector('#car'); //get reference to car
    drive(car, increment); //move the car left
}
function moveRight(element, increment) {
    let props = getProps(element); //get the positional information you need to move an element
    element.style.left = (props.left + increment) + 'px'; //move element
}
function moveDown(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    element.style.top = (props.top + increment) + 'px'; //move element
}
function moveLeft(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    element.style.left = (props.left - increment) + 'px'; //move element
}
function moveUp(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    element.style.top = (props.top - increment) + 'px'; //move element
}
function getPastFinishLine(element,increment){
    let props = getProps(element); //get the positional information you need to move an element
    element.style.left = (props.left + increment) + 'px'; //move element
}
function drive(element, increment){
    let props = getProps(element);
    console.log(props);

    if(props.left >= 250 && props.top <= 120 && props.left <= 265){
        stop();
    }
    else if(props.left >= 600 && props.top >= 121 && props.top <= 135 && props.left <= 810){
        moveRight(element, increment);
    }
    else if (props.left >= 810 && props.top >= 110 && props.top <= 310){    
        element.setAttribute("class", "r90");
        moveDown(element, increment);
    } 
    else if(props.left <= 820 && props.top >= 260 && props.top <= 320 && props.left >= 115){
        element.setAttribute("class", "r180");
        moveLeft(element, increment);
    }
    else if(props.left <= 200 && props.top >= 120 && props.top <= 320){
        element.setAttribute("class", "r270");
        moveUp(element, increment);
    }
    else if(props.left >= 100 && props.top <= 120 && props.left <= 260){
        element.setAttribute("class", "");
        getPastFinishLine(element, increment);
    }
}
