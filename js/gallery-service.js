'use strict'


var gImgs = [
    { id: 0, url: './imgs/meme-imgs (square)/0.jpg', keywords: ['happy'] },
    { id: 1, url: './imgs/meme-imgs (square)/1.jpg', keywords: ['happy'] },
    { id: 2, url: './imgs/meme-imgs (square)/2.jpg', keywords: ['happy'] },
    { id: 3, url: './imgs/meme-imgs (square)/3.jpg', keywords: ['happy'] },
    { id: 4, url: './imgs/meme-imgs (square)/4.jpg', keywords: ['happy'] },
    { id: 5, url: './imgs/meme-imgs (square)/5.jpg', keywords: ['happy'] },
    { id: 6, url: './imgs/meme-imgs (square)/6.jpg', keywords: ['happy'] },
    { id: 7, url: './imgs/meme-imgs (square)/7.jpg', keywords: ['happy'] },
    { id: 8, url: './imgs/meme-imgs (square)/8.jpg', keywords: ['happy'] },
    { id: 9, url: './imgs/meme-imgs (square)/9.jpg', keywords: ['happy'] },
    { id: 10, url: './imgs/meme-imgs (square)/10.jpg', keywords: ['happy'] },
    { id: 11, url: './imgs/meme-imgs (square)/11.jpg', keywords: ['happy'] },
    { id: 12, url: './imgs/meme-imgs (square)/12.jpg', keywords: ['happy'] },
    { id: 13, url: './imgs/meme-imgs (square)/13.jpg', keywords: ['happy'] },
    { id: 14, url: './imgs/meme-imgs (square)/14.jpg', keywords: ['happy'] },
    { id: 15, url: './imgs/meme-imgs (square)/15.jpg', keywords: ['happy'] },
    { id: 16, url: './imgs/meme-imgs (square)/16.jpg', keywords: ['happy'] },
    { id: 17, url: './imgs/meme-imgs (square)/17.jpg', keywords: ['happy'] },
    { id: 18, url: './imgs/meme-imgs (square)/18.jpg', keywords: ['happy'] }
];

function renderGallery() {
    var elGallery = document.querySelector('.gallery-container')
    var strHtml = '';
    gImgs.forEach(({ id }) => {
        strHtml += `<img id="${id}" class="img" onclick="onChoosePic(${id})" src="./imgs/meme-imgs (square)/${id}.jpg" alt="">`
    })
    elGallery.innerHTML = strHtml;
}

 function toggleMenu() {
     document.body.classList.toggle('menu-open')
 }

 
function choosePic(id) {
    var elMemeEditor = document.querySelector('.main-editor');
    elMemeEditor.classList.remove('none');
    elMemeEditor.classList.add('grid');
    var elGallery = document.querySelector('.grid-container');
    elGallery.classList.remove('grid');
    elGallery.classList.add('none')
    gMeme.selectedImgId = id
    
}