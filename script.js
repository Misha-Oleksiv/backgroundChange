
const sel = selector => document.querySelector(selector);

sel('.text').addEventListener('click', function () {
	sel('.box').classList.add('box1');
	sel('.box2').classList.remove('box1');
})

sel('.pictures').addEventListener('click', function () {
	sel('.box2').classList.add('box1');
	sel('.box').classList.remove('box1');
})

sel('.box').addEventListener('click', function () {
	document.body.style.background = getComputedStyle(event.target).background;
});

sel('.box2').addEventListener('click', function () {
	document.body.style.background = getComputedStyle(event.target).background;
});























// const changePictures = document.querySelector('.images');
// let pictures;
// for (let i = 0; i < changePictures.children.length; i++) {
// 	picture = changePictures.children[i];
// 	picture.addEventListener('click', () => {
// 		let target = event.target;
// 		let background = target.src;
// 		document.body.style.background = `url('${background}')`;
// 	})
// }

// const changeColors = document.querySelector('.colors');
// let colors;
// for (let i = 0; i < changeColors.children.length; i++) {
// 	color = changeColors.children[i];
// 	color.addEventListener('click', () => {
// 		let target = event.target;
// 		let background =  window.getComputedStyle(target).background;
// 		document.body.style.background = background;;
// 	})
// }

// для вбдованих стилів(в HTML)-відбувається делегування 
// при встановленні onclick= 'changeColor' на батьківський елемент!

