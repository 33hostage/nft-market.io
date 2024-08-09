
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


//tabs

const tabsBtn = document.querySelectorAll('[data-tab]');

for (let btn of tabsBtn) {

	btn.addEventListener('click', function () {

		// убираем активные классы
		for (let btn of tabsBtn) {
			btn.classList.remove('active')
		}

		// добавляем активные классы
		this.classList.add('active')
	})
};
