function enableScroll(){
    document.body.classList.remove("no-scroll");
}

function disableScroll(){
    document.body.classList.add("no-scroll");
}

function clearInput(input){
    input.value = "";
}

function enableHidden(input){
    input.classList.add("hidden");
}

function disableHidden(input){
    input.classList.remove("hidden");
}