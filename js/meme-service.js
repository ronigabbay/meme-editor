'use strict'

var gCtx;
var gCanvas;

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 34,
            align: 'center',
            color: 'black'
        },
        {
            txt: '',
            size: 34,
            align: 'center',
            color: 'black'
        },
        {
            txt: '',
            size: 34,
            align: 'center',
            color: 'black'
        }
        
    ]
}

function onChooseFontType() {
    var elFontOption = document.querySelector('.change-font-select option');
    console.log( elFontOption.value);
}



function onChoosePic(id){
    gMeme.selectedImgId = id
    drawImg()
}


function drawText(text, x, y) {
    var elFontOption = document.querySelector('.change-font-select option');
    // gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px ${elFontOption.value} `
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


function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'New Meme'
}



