'use strict'


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
}



function onChoosePic(id){
    gMeme.selectedImgId = id
    drawImg()
}


function onInput() {
    var elTxtInput = document.querySelector('.text-line');
    return elTxtInput.value;
}

setTimeout(function () {
    drawText(onInput(), 250, 60)
}, 5000)

