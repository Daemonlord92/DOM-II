// Your code goes here
//Selectors
let imgHide = document.querySelector('.intro img')
const navStop = document.querySelectorAll('.nav-link')
const imgFlip = document.querySelector('.img-content img')
const body = document.querySelector('body')
const desitnationColor = document.querySelectorAll('.destination')
const headerColorChange = document.querySelectorAll('h2')

//Events
imgHide.addEventListener('mouseenter', function(){
	imgHide.style.opacity = '0.0';
	imgHide.style.transition = "all 0.3s"	
})

imgHide.addEventListener('mouseleave', function(){
	imgHide.style.opacity = '1'
})

imgFlip.addEventListener('click', () => {
	imgFlip.style.transform = "scaleX(-1)";
	event.stopPropagation();
})

imgFlip.addEventListener('dblclick', () => {
	imgFlip.style.transform = "scaleX(1)";
})

navStop.forEach(title => {
	title.addEventListener('click', (event) => {
		event.preventDefault()
		console.log('Debug')
	})
})

body.addEventListener('click', () => {
	body.style.backgroundColor = '#af111c';
	body.style.transition = 'all 0.5s';
})

body.addEventListener('dblclick', () => {
	body.style.backgroundColor = 'white';
})

desitnationColor.forEach(title => {
	title.addEventListener('click', (event) => {
		event.target.style.backgroundColor = 'purple';
		event.target.style.color = 'red';
	})
})

headerColorChange.forEach(title => {
	title.addEventListener('click', (event) => {
		event.target.style.color = '#967272'
		event.target.transition = 'all 0.3s'
	})
})