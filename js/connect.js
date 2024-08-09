
//burger

const nav = document.querySelector('#nav')
const navOpen = document.querySelector('open')

const navBtn = document.querySelector('#burger-btn')
const navBtnClose = document.querySelector('close')

navBtn.addEventListener('click', ()=> {
	nav.classList.toggle('open')
	navBtn.classList.toggle('close')
});

let html = document.querySelector('html')
navBtn.onclick = function() {
html.classList.toggle('unscroll')
}
