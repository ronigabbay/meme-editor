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