'use strict'



function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
}



function onChoosePic(id) {
    gMeme.selectedImgId = id
    drawImg()
}


function onDrawText() {
    // var img = document.getElementById(`${gMeme.selectedImgId}`)
    // drawImg()
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(onInput(), 250, 60)
    }
    // setTimeout(function () {
    //     drawText(onInput(), 250, 60)
    // }, 2)
}

function onInput() {
    var elTxtInput = document.querySelector('.text-line');
    return elTxtInput.value;
}

