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

function getMeme() {
    return gMeme;
}

function onChooseFontType() {
    var elFontOption = document.querySelector('.change-font-select option');
    console.log( elFontOption.value);
}



function onChoosePic(id){
    gMeme.selectedImgId = id
    drawImg()
}


function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
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

function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
}

function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
}

function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}



function drawOtherLines1() {
    gMeme.selectedLineIdx = 0;
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    drawText(gMeme.lines[0].txt, 250, gCurrOneHeigt);
    gMeme.selectedLineIdx = 2;
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    drawText(gMeme.lines[2].txt, 250, 250);
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gMeme.selectedLineIdx = 1;

}

function drawOtherLines2() {
    gMeme.selectedLineIdx = 0;
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    drawText(gMeme.lines[0].txt, 250, gCurrOneHeigt);
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gMeme.selectedLineIdx = 1;
    drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gMeme.selectedLineIdx = 2;
}

function drawOtherLines() {
    gMeme.selectedLineIdx = 1;
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    drawText(gMeme.lines[1].txt, 250, gCurrTwoHeigt);
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gMeme.selectedLineIdx = 2;
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    drawText(gMeme.lines[2].txt, 250, 250);
    gMeme.selectedLineIdx = 0;
}



function lineDown() {
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



function lineUp() {
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


function renderCanvas() {
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
            drawText(gMeme.lines[2].txt, 250, gCurrthreeHeigt);
            drawOtherLines2()
        }
    }
}



function switchLine() {
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