/* Timer */

const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const nextTime = new Date(`August 14 2024 00:00:00`)

const timer = document.querySelector('#timer');

function updateCounter() {
	const currentTime = new Date();
	const diff = nextTime - currentTime;


	const hoursLeft = Math.floor(diff / 1000 / 60 / 60);
	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	const secondsLeft = Math.floor(diff / 1000) % 60;


	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter();

setInterval(updateCounter, 1000);


/* Go-To */

window.onload = () => {
	window.onscroll = function(e) {
		let winY = window.scrollY;
		if (winY > 300) {
			progressBar();
			scrollbarAnimation();
			winY = null;
		}
	};

	const scrollBtn = document.querySelector('.showBtn')

	window.onscroll = () => {
		if (window.scrollY > 900) {
			scrollBtn.classList.remove('showBtn--hide');
		} else if(window.scrollY < 900) {
			scrollBtn.classList.add('showBtn--hide');
		}
	};

	scrollBtn.onclick = () => {
		window.scrollTo(0, 0);
	}
};

/* Header Burger */

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

//market click

document.getElementById('marketplacePage_click').onclick = function() {
	window.location.href = 'marketplace.html';
};