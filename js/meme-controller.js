'use strict'


var gCurrOneHeigt = 60;
var gCurrTwoHeigt = 440;
var gCurrthreeHeigt = 250;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
}

function onDeleteLine() {
    drawImg()
    var elTxtInput = document.querySelector('.text-line');
    elTxtInput.value = ''
    onDrawText()
}


function onAddLine(){
    // זמני
    onSwitchLine()
}

function onSwitchLine() {
    var elInputVal = document.querySelector('.text-line')
    onInput();
    if (gMeme.selectedLineIdx < 2) {
        gMeme.selectedLineIdx++
        elInputVal.value = gMeme.lines[gMeme.selectedLineIdx].txt;
    } else {
        gMeme.selectedLineIdx = 0
        elInputVal.value = gMeme.lines[gMeme.selectedLineIdx].txt;
    }
}


function onChoosePic(id) {
    gMeme.selectedImgId = id
    // gMeme.selectedLineIdx = id - 1;  
    drawImg();

}


function onLineUp() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        if (gMeme.selectedLineIdx === 0) {
            onInput()
            drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt - 1);
            gCurrOneHeigt = gCurrOneHeigt - 1;
            drawOtherLines()
        } else if (gMeme.selectedLineIdx === 1) {
            onInput()
            drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt - 1);
            gCurrTwoHeigt = gCurrTwoHeigt - 1;

            drawOtherLines1()

        } else if (gMeme.selectedLineIdx === 2) {
            onInput()
            drawText(gMeme.lines[2].txt, 250, gCurrthreeHeigt - 1);
            gCurrthreeHeigt = gCurrthreeHeigt - 1;

            drawOtherLines2()

        }
    }

}

function onLineDown() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        if (gMeme.selectedLineIdx === 0) {
            onInput()
            drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt + 1);
            gCurrOneHeigt = gCurrOneHeigt + 1;
            drawOtherLines()
        } else if (gMeme.selectedLineIdx === 1) {
            onInput()
            drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt + 1);
            gCurrTwoHeigt = gCurrTwoHeigt + 1;

            drawOtherLines1()

        } else if (gMeme.selectedLineIdx === 2) {
            onInput()
            drawText(gMeme.lines[2].txt, 250, gCurrthreeHeigt + 1);
            gCurrthreeHeigt = gCurrthreeHeigt + 1;

            drawOtherLines2()

        }
    }

}


function onIncreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        if (gMeme.selectedLineIdx === 0) {
            onInput()
            drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt);
            drawOtherLines()
        } else if (gMeme.selectedLineIdx === 1) {
            onInput()
            drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);

            drawOtherLines1()

        } else if (gMeme.selectedLineIdx === 2) {
            onInput()
            drawText(gMeme.lines[2].txt, 250, 250);

            drawOtherLines2()

        }
    }
}

function onDecreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size--
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        if (gMeme.selectedLineIdx === 0) {
            onInput()
            drawText(gMeme.lines[0].txt, 250, gCurrOneHeigt);
            drawOtherLines()
        } else if (gMeme.selectedLineIdx === 1) {
            onInput()
            drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);

            drawOtherLines1()

        } else if (gMeme.selectedLineIdx === 2) {
            onInput()
            drawText(gMeme.lines[2].txt, 250, 250);

            drawOtherLines2()

        }
    }
}


function onDrawText() {
    var img = new Image();
    img.src = `./imgs/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        if (gMeme.selectedLineIdx === 0) {
            onInput()
            drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, gCurrOneHeigt);

            drawOtherLines()

        } else if (gMeme.selectedLineIdx === 1) {
            onInput()
            drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);

            drawOtherLines1()

        } else if (gMeme.selectedLineIdx === 2) {
            onInput()
            drawText(gMeme.lines[2].txt, 250, 250);

            drawOtherLines2()

        }

    }

}


function drawOtherLines1() {
    gMeme.selectedLineIdx = 0;
    drawText(gMeme.lines[0].txt, 250, gCurrOneHeigt);
    gMeme.selectedLineIdx = 2;
    drawText(gMeme.lines[2].txt, 250, 250);
    gMeme.selectedLineIdx = 1;

}

function drawOtherLines2() {
    gMeme.selectedLineIdx = 0;
    drawText(gMeme.lines[0].txt, 250, gCurrOneHeigt);
    gMeme.selectedLineIdx = 1;
    drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);
    gMeme.selectedLineIdx = 2;
}

function drawOtherLines() {
    gMeme.selectedLineIdx = 1;
    drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);
    gMeme.selectedLineIdx = 2;
    drawText(gMeme.lines[2].txt, 250, 250);
    gMeme.selectedLineIdx = 0;
}


function onInput() {
    var elTxtInput = document.querySelector('.text-line');
    gMeme.lines[gMeme.selectedLineIdx].txt = elTxtInput.value;
}

