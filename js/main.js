(() => {
	console.log('fired');

const  lyrics 	    = document.querySelector('.lyrics'),
       openButton = document.querySelector('.openButton'),
       closeButton = document.querySelector('.closeButton')
       trans 	    = document.querySelector('.trans'),
       openButtonBC = document.querySelector('.openButton-bc'),
       closeButtonBC = document.querySelector('.closeButton-bc');
       transDH 	    = document.querySelector('.trans-dh'),
       openButtonDH = document.querySelector('.openButton-dh'),
       closeButtonDH = document.querySelector('.closeButton-dh');

function openLyrics() {
	lyrics.classList.add('box-on');
}

function closeLyrics() {
    lyrics.classList.remove('box-on');
}

function openTrans() {
	trans.classList.add('show-trans');
}

function closeTrans() {
    trans.classList.remove('show-trans');
}

function openTransDH() {
	transDH.classList.add('show-trans');
}

function closeTransDH() {
    transDH.classList.remove('show-trans');
}

openButton.addEventListener('click', openLyrics);
closeButton.addEventListener('click', closeLyrics);
openButtonBC.addEventListener('click', openTrans);
closeButtonBC.addEventListener('click', closeTrans);
openButtonDH.addEventListener('click', openTransDH);
closeButtonDH.addEventListener('click', closeTransDH);

})();