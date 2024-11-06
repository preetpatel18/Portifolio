// For Scrolling Effect on Navigation bar
var currentScrollPos = window.pageYOffset;
var maxScrollPos = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
	var newScrollPos = window.pageYOffset;
	if (newScrollPos < currentScrollPos) {
		document.getElementById("navbar").style.top = "2%";
	} else if (newScrollPos <= 0) {
		document.getElementById("navbar").style.top = "2%";
	} else if (currentScrollPos === maxScrollPos) {
		document.getElementById("navbar").style.top = "-70px";
	} else {
		document.getElementById("navbar").style.top = "-70px";
	}
 
	currentScrollPos = newScrollPos;
};


// Stop the nav bar from moving
function manageScrollAnimation() {
    const element = document.getElementById('navbar');
    const thresholdWidth = 800;

    if (window.innerWidth <= thresholdWidth) {
        if (element) {
			document.getElementById("navbar").style.top = "0%";
            element.removeAttribute('id');
        }
    } else {
        if (!element) {
            const targetElement = document.querySelector('div');
            targetElement.id = 'navbar';
        }
    }
}
window.addEventListener('resize', manageScrollAnimation);
manageScrollAnimation();


// For the DropDown Menu on the User Profile
let subMenu = document.getElementById("subMenu");
function toggleMenu() {
	subMenu.classList.toggle("open-menu");
}

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let linksarrow = document.querySelector(".links-arrow");
linksarrow.onclick = function() {
 navLinks.classList.toggle("show1");
}