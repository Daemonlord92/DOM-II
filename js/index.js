// Your code goes here
//Selectors
let imgHide = document.querySelector('.intro img')
const navStop = document.querySelectorAll('.nav-link')
const imgFlip = document.querySelector('.img-content img')
const body = document.querySelector('body')
const desitnation = document.querySelectorAll('.destination')
const headerColorChange = document.querySelectorAll('h2')
const contentDesitnation = document.querySelector('.content-destination')

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

imgFlip.addEventListener('mouseover', () => {
	imgFlip.style.transform = 'scale(1.2)';
	imgFlip.style.transition = 'all 0.5s';
})

imgFlip.addEventListener('mouseleave', () => {
	imgFlip.style.transform = 'scale(1)';
})

navStop.forEach(title => {
	title.addEventListener('click', (event) => {
		event.preventDefault()
	})
})

body.addEventListener('click', () => {
	body.style.backgroundColor = '#af111c';
	body.style.transition = 'all 0.5s';
})

body.addEventListener('dblclick', () => {
	body.style.backgroundColor = 'white';
})

body.onresize = (event) => {
	body.style.backgroundColor = 'blue';
}

desitnation.forEach(title => {
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

headerColorChange.forEach(title => {
	title.addEventListener('mouseover', (event) => {
		event.target.style.opacity = '0.5';
		event.target.style.transition = 'all o.3s';
	})
})

contentDesitnation.addEventListener('drag', (event) =>{
	event.target.style.backgroundColor = 'pink';
})

contentDesitnation.addEventListener('copy', (event) => {
	event.target.style.color = 'blue';
	event.target.style.fontWeight = 'bold';
})

headerColorChange.forEach(title => {
	title.addEventListener('cut', (event) => {
		event.target.style.backgroundColor = 'black';
		event.target.style.color = 'white';
	})
})