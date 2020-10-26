'use strict'


var gCurrOneHeigt = 60;
var gCurrTwoHeigt = 440;
var gCurrthreeHeigt = 250;

function onInit() {
    renderGallery()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
}



function onChangeColor() {
    var elInputColor = document.querySelector('.input-color');
    gMeme.lines[gMeme.selectedLineIdx].color = elInputColor.value

}

function onDeleteLine() {
    drawImg()
    var elTxtInput = document.querySelector('.text-line');
    elTxtInput.value = ''
    onDrawText()
}


function onAddLine() {
    const meme = getMeme();
    if (meme.selectedLineIdx === 2) return;
    if (gMeme.lines[gMeme.selectedLineIdx + 1].txt) return;
    switchLine()
}



function onSwitchLine() {
    var elInputVal = document.querySelector('.text-line')
    onInput();
    if (gMeme.selectedLineIdx < 2 && gMeme.lines[gMeme.selectedLineIdx + 1].txt) {
        gMeme.selectedLineIdx++
            elInputVal.value = gMeme.lines[gMeme.selectedLineIdx].txt;
    } else {
        gMeme.selectedLineIdx = 0
        elInputVal.value = gMeme.lines[gMeme.selectedLineIdx].txt;
    }
}

function onChoosePic(id) {
    choosePic(id)
    drawImg();
}



function onReturnToGallery() {
    var elMemeEditor = document.querySelector('.main-editor');
    elMemeEditor.classList.remove('grid');
    elMemeEditor.classList.add('none');
    var elGallery = document.querySelector('.grid-container');
    elGallery.classList.remove('none')
    elGallery.classList.add('grid');
}


function onLineUp() {
    lineUp()
}


function onLineDown() {
    lineDown()
}



function onChangeFontSize(diff) {
    changeFontSize(diff);
    renderCanvas();
}




function onDrawText() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        if (gMeme.selectedLineIdx === 0) {
            gCtx.strokeStyle = 'green';
            onInput()
            drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt);
            gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
            drawOtherLines()

        } else if (gMeme.selectedLineIdx === 1) {
            gCtx.strokeStyle = 'green';
            onInput()
            drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);
            gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
            drawOtherLines1()

        } else if (gMeme.selectedLineIdx === 2) {
            gCtx.strokeStyle = 'green';
            onInput()
            drawText(gMeme.lines[2].txt, 250, 250);
            gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
            drawOtherLines2()
        }

    }

}

function OnReady() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
        onInput()
        if (gMeme.selectedLineIdx === 0) {
            drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt);
            drawOtherLines()
        } else if (gMeme.selectedLineIdx === 1) {
            drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);
            drawOtherLines1()
        } else if (gMeme.selectedLineIdx === 2) {
            drawText(gMeme.lines[2].txt, 250, 250);
            drawOtherLines2()
        }
    }
}



function onInput() {
    var elTxtInput = document.querySelector('.text-line');
    gMeme.lines[gMeme.selectedLineIdx].txt = elTxtInput.value;
}