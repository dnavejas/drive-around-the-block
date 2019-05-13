let increment = 5;

function tick() {
    let car = document.querySelector('#car'); //get reference to car
    checkDistance(car, increment);
    // drive(car, increment); //move the car left
}
function moveRight(element, increment) {
    let props = getProps(element); //get the positional information you need to move an element
    element.style.left = (props.left + increment) + 'px'; //move element
}
function moveDown(element,increment){
    // increment = 8;
    let props = getProps(element); //get the positional information you need to move an element
    element.style.top = (props.top + increment) + 'px'; //move element
}
function moveLeft(element,increment){
    increment =+ increment + 10;
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
function checkDistance(element, increment){
    let props = getProps(element);
    let cornerTR = document.querySelector(".pos-100-800");
    let trcLeft = cornerTR.offsetLeft - props.left;
    let trcTop = cornerTR.offsetTop - props.top + 30;
    let cornerBR = document.querySelector(".pos-300-800");
    let brcLeft = cornerBR.offsetLeft - props.left;
    let brcTop = cornerBR.offsetTop - props.top;
    let cornerBL = document.querySelector(".pos-300-100");
    let blcLeft = props.left - cornerBL.offsetLeft;
    console.log(blcLeft);
    let blcTop = cornerBL.offsetTop - props.top + 12;
    console.log(blcTop);
    let cornerTL = document.querySelector(".pos-100-100");
    let tlcLeft = cornerTL.offsetLeft - props.left;
    let tlcTop = props.top - cornerTL.offsetTop;
    // console.log(console);
    

    if (trcLeft <= 60 && trcTop <=10 && trcTop >= 0){
        let increment = 2;
        // console.log(increment);
        drive(car, increment);
    }
    else if (brcLeft <= 10 && brcTop <= 50){
        let increment = 2;
        // console.log(increment);
        drive(car, increment);
    }
    else if (blcLeft <= 150 && blcTop <= 5){
        console.log("test");
        let increment = 2;

        drive(car, increment); 
    }
    else drive(car, increment);

}
function drive(element, increment){
    let props = getProps(element);
    
    if(props.left >= 230 && props.top <= 120 && props.left <= 265){
        stop();
    }
    else if(props.left >= 500 && props.top >= 121 && props.top <= 135 && props.left <= 810){
        element.setAttribute("class", "");
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
