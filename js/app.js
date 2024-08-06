// Navbar que gruda
window.onscroll = () => {stickyNav()};

var navbar = document.querySelector('.navbar');
var logoNav = document.querySelector('.logo-img');

function stickyNav() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
        setTimeout(() => {
            logoNav.src = 'images/logo-sticky.png';
        }, 1000);
        
    } else {
        navbar.classList.remove("sticky");
        setTimeout(() => {
            logoNav.src = 'images/logo-aninga.png';
        }, 1000);
    }
}