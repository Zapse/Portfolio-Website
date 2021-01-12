const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
/* Here we make background for header that its not transparent all the way */ 
document.addEventListener('scroll', ()=>{
	var scroll_position = window.scrollY;
	if(scroll_position > 250){
		header.style.backgroundColor ="#1c1837";
	}
	else{
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item)=>{
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});