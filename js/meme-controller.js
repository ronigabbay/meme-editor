'use strict'


var gCurrOneHeigt = 60;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
}



function onChoosePic(id) {
    gMeme.selectedImgId = id
    drawImg()
}


function onLineUp(){
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        

        onInput()
        drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt - 1)
    }
    
    gCurrOneHeigt = gCurrOneHeigt - 1;
}

function onLineDown() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
       
        onInput()
        drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt + 1)
    }
    
    gCurrOneHeigt = gCurrOneHeigt + 1;
}


function onIncreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size ++
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
       
        onInput()
        drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt)
    }
}

function onDecreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size --
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    
        onInput()
        drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt)
    }
}

function onDrawText() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        onInput()
        drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, 60);
        
        
        drawText(gMeme.lines[1].txt, 250, 440)
    }

}

function onInput() {
    var elTxtInput = document.querySelector('.text-line');
    gMeme.lines[gMeme.selectedLineIdx].txt = elTxtInput.value;
}

