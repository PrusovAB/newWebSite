let left = document.querySelector('.sliders');

let pop = document.querySelector('.pop');
console.log(pop)


window.setInterval(shadow, 1000);

function shadow() {
	setTimeout(() => {
		if (pop.style.color = 'red') {
			pop.style.color = 'blue'
		}
	}, 2000)

	setTimeout(() => {
		if (pop.style.color = 'blue') {
			pop.style.color = 'red'
		}
	}, 1000)
}



let sum = 0;

window.setInterval(slider, 4000);

function slider() {
	setTimeout(() => {
		sum += 335;
	}, 1000)
	if (sum == 2010) {
		sum = 0
	}
	let t = left.style.left = `${-sum}px`;
	console.log(t);

}



const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector(".nav");


navBtn.onclick = function () {
	menuIcon.classList.toggle('menu-icon-active');
	nav.classList.toggle('nav--mobile');
	document.body.classList.toggle('no-scroll');

}
