'use strict'

var gCtx;
var gCanvas;

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I love football',
            size: 34,
            align: 'center',
            color: 'red'
        }
    ]
}


function onChoosePic(id){
    // console.log(id);
    // console.log(gMeme.selectedImgId);
    gMeme.selectedImgId = id
    // console.log(gMeme.selectedImgId);
    drawImg()
}


function drawText(text, x, y) {
    gCtx.strokeStyle = gMeme.lines.color;
    // console.log(gMeme.lines[gMeme.selectedLineIdx].color);
    gCtx.fillStyle = 'white'
    gCtx.lineWidth = '2'
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px IMPACT`
    gCtx.textAlign = `${gMeme.lines[gMeme.selectedLineIdx].align}`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}



function drawImg() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    // You may clear part of the canvas
    // gCtx.clearRect(50, 50, 225, 225)
}
