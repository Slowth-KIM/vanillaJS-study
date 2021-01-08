const body = document.querySelector("body");

const IMG_NUMBERT = 3;

function handleImgLoad(){
    
}

function painImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
    image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBERT)
    return number;
}

function init(){
    const randomNumber = genRandom();
    painImage(randomNumber);
}

init();